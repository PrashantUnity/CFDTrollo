using CFDTrollo.Data;
using CFDTrollo.Models;
using CFDTrollo.Interfaces;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace CFDTrollo.Components.Board;

public partial class Board : IDisposable
{
    [Parameter] public string WorkspaceId { get; set; } = "default";
    [Parameter] public EventCallback<int> OnCardCountChanged { get; set; }

    [Inject] public ILocalStorageService LocalStorage { get; set; } = default!;
    [Inject] public IDragDropService DragDropService { get; set; } = default!;
    [Inject] public IJSRuntime JSRuntime { get; set; } = default!;

    private BoardState boardState = new();
    private DotNetObjectReference<Board>? dotNetReference;
    private ElementReference boardListsElement;
    
    // Delete modal state
    private bool isDeleteModalOpen = false;
    private string deleteModalTitle = string.Empty;
    private string deleteModalMessage = string.Empty;
    private string deleteModalDetails = string.Empty;
    private string? pendingDeleteListId = null;
    private string? pendingDeleteCardId = null;
    
    // Debug state
    private bool showDebugInfo = false;

    protected override async Task OnInitializedAsync()
    {
        await LoadBoardState();
        dotNetReference = DotNetObjectReference.Create(this);
        await DragDropService.InitializeDragDropAsync(dotNetReference);
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            // Enable list dragging on the board
            await DragDropService.EnableListDraggingAsync(boardListsElement);
        }
    }

    private async Task LoadBoardState()
    {
        var storageKey = GetStorageKey(WorkspaceId);
        var savedState = await LocalStorage.GetItemAsync<BoardState>(storageKey);
        
        if (savedState != null && savedState.Lists.Any())
        {
            boardState = savedState;
            Console.WriteLine($"Board state loaded from localStorage with key: {storageKey}");
        }
        else
        {
            boardState = InitialBoardState.GetInitialState();
            Console.WriteLine($"No saved state found, using initial state for key: {storageKey}");
        }
    }

    private async Task SaveBoardState()
    {
        if (boardState.Lists.Any())
        {
            var storageKey = GetStorageKey(WorkspaceId);
            await LocalStorage.SetItemAsync(storageKey, boardState);
            await NotifyCardCountChanged();
            Console.WriteLine($"Board state saved to localStorage with key: {storageKey}");
        }
    }

    private async Task NotifyCardCountChanged()
    {
        var totalCards = boardState.Lists.Sum(list => list.Cards.Count);
        await OnCardCountChanged.InvokeAsync(totalCards);
    }

    private string GetStorageKey(string workspaceId) => $"project-board-state-{workspaceId}";

    private void HandleAddCard((string listId, string title) cardData)
    {
        var list = boardState.Lists.FirstOrDefault(l => l.Id == cardData.listId);
        if (list != null)
        {
            var newCard = new Card
            {
                Id = $"card-{DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()}",
                Title = cardData.title
            };
            list.Cards.Add(newCard);
            StateHasChanged();
            _ = SaveBoardState();
        }
    }

    private void HandleUpdateCard(Card updatedCard)
    {
        foreach (var list in boardState.Lists)
        {
            var cardIndex = list.Cards.FindIndex(c => c.Id == updatedCard.Id);
            if (cardIndex >= 0)
            {
                list.Cards[cardIndex] = updatedCard;
                break;
            }
        }
        StateHasChanged();
        _ = SaveBoardState();
    }

    private void HandleQuickAddList()
    {
        var newList = new List
        {
            Id = $"list-{DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()}",
            Title = $"New List {boardState.Lists.Count + 1}",
            Cards = new List<Card>()
        };

        boardState.Lists.Add(newList);
        StateHasChanged();
        _ = SaveBoardState();
    }

    private void HandleDeleteList(string listId)
    {
        var list = boardState.Lists.FirstOrDefault(l => l.Id == listId);
        if (list == null) return;

        // Set up modal content
        pendingDeleteListId = listId;
        deleteModalTitle = "Delete List";
        deleteModalMessage = $"Are you sure you want to delete the list '{list.Title}'?";
        deleteModalDetails = $"This will permanently delete the list and all {list.Cards.Count} cards in it. This action cannot be undone.";
        
        // Show modal
        isDeleteModalOpen = true;
        StateHasChanged();
    }

    private async Task HandleConfirmDelete()
    {
        if (pendingDeleteListId != null)
        {
            // Delete list
            var list = boardState.Lists.FirstOrDefault(l => l.Id == pendingDeleteListId);
            if (list != null)
            {
                boardState.Lists.Remove(list);
                StateHasChanged();
                await SaveBoardState();
            }
            pendingDeleteListId = null;
        }
        else if (pendingDeleteCardId != null)
        {
            // Delete card
            foreach (var list in boardState.Lists)
            {
                var card = list.Cards.FirstOrDefault(c => c.Id == pendingDeleteCardId);
                if (card != null)
                {
                    list.Cards.Remove(card);
                    break;
                }
            }
            StateHasChanged();
            await SaveBoardState();
            pendingDeleteCardId = null;
        }

        // Reset modal state
        isDeleteModalOpen = false;
    }

    private void HandleDeleteCard(string cardId)
    {
        // Find the card in all lists
        Card? cardToDelete = null;
        List? parentList = null;

        foreach (var list in boardState.Lists)
        {
            var card = list.Cards.FirstOrDefault(c => c.Id == cardId);
            if (card != null)
            {
                cardToDelete = card;
                parentList = list;
                break;
            }
        }

        if (cardToDelete == null || parentList == null) return;

        // Set up modal content
        pendingDeleteCardId = cardId;
        deleteModalTitle = "Delete Card";
        deleteModalMessage = $"Are you sure you want to delete the card '{cardToDelete.Title}'?";
        deleteModalDetails = $"This will permanently delete the card from the '{parentList.Title}' list. This action cannot be undone.";
        
        // Show modal
        isDeleteModalOpen = true;
        StateHasChanged();
    }

    [JSInvokable]
    public async Task HandleCardMove(string cardId, string sourceListId, string targetListId, int newIndex)
    {
        try
        {
            Console.WriteLine($"🎯 HandleCardMove called: cardId={cardId}, sourceListId={sourceListId}, targetListId={targetListId}, newIndex={newIndex}");
            
            // Find source and target lists
            var sourceList = boardState.Lists.FirstOrDefault(l => l.Id == sourceListId);
            var targetList = boardState.Lists.FirstOrDefault(l => l.Id == targetListId);

            if (sourceList == null || targetList == null) return;

            // Find the card to move
            var card = sourceList.Cards.FirstOrDefault(c => c.Id == cardId);
            if (card == null) return;

            // Remove from source list
            sourceList.Cards.Remove(card);

            // Add to target list at the correct position
            if (newIndex >= 0 && newIndex <= targetList.Cards.Count)
            {
                targetList.Cards.Insert(newIndex, card);
            }
            else
            {
                targetList.Cards.Add(card);
            }

            StateHasChanged();
            await SaveBoardState();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error handling card move: {ex.Message}");
        }
    }

    [JSInvokable]
    public async Task HandleCardReorder(string cardId, string listId, int oldIndex, int newIndex)
    {
        try
        {
            Console.WriteLine($"🎯 HandleCardReorder called: cardId={cardId}, listId={listId}, oldIndex={oldIndex}, newIndex={newIndex}");
            
            var list = boardState.Lists.FirstOrDefault(l => l.Id == listId);
            if (list == null) return;

            // Reorder within the same list
            if (oldIndex >= 0 && oldIndex < list.Cards.Count && newIndex >= 0 && newIndex < list.Cards.Count)
            {
                var card = list.Cards[oldIndex];
                list.Cards.RemoveAt(oldIndex);
                list.Cards.Insert(newIndex, card);
            }

            StateHasChanged();
            await SaveBoardState();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error handling card reorder: {ex.Message}");
        }
    }

    [JSInvokable]
    public async Task HandleListReorder(string listId, int oldIndex, int newIndex)
    {
        try
        {
            Console.WriteLine($"🎯 HandleListReorder called: listId={listId}, oldIndex={oldIndex}, newIndex={newIndex}");
            
            // Reorder lists
            if (oldIndex >= 0 && oldIndex < boardState.Lists.Count && newIndex >= 0 && newIndex < boardState.Lists.Count)
            {
                var list = boardState.Lists[oldIndex];
                boardState.Lists.RemoveAt(oldIndex);
                boardState.Lists.Insert(newIndex, list);
            }

            StateHasChanged();
            await SaveBoardState();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error handling list reorder: {ex.Message}");
        }
    }

    private void ToggleDebugInfo()
    {
        showDebugInfo = !showDebugInfo;
        StateHasChanged();
    }

    private async Task TestDragDrop()
    {
        Console.WriteLine("🧪 Testing drag drop...");
        
        try
        {
            // Test if dragDrop is available
            var dragDropExists = await JSRuntime.InvokeAsync<bool>("eval", "typeof window.dragDrop !== 'undefined'");
            Console.WriteLine($"🔍 dragDrop exists: {dragDropExists}");
            
            if (dragDropExists)
            {
                // Test the dragDrop object
                var dragDropMethods = await JSRuntime.InvokeAsync<string>("eval", "Object.keys(window.dragDrop).join(', ')");
                Console.WriteLine($"🔧 dragDrop methods: {dragDropMethods}");
                
                // Test the test function
                await JSRuntime.InvokeVoidAsync("eval", "if (typeof window.testDragDrop === 'function') { window.testDragDrop(); } else { console.log('❌ testDragDrop function not found'); }");
                
                // Test initialization
                if (dotNetReference != null)
                {
                    await DragDropService.InitializeDragDropAsync(dotNetReference);
                }
                Console.WriteLine("✅ Drag drop test completed successfully");
                
                // Test enabling drag on first card
                if (boardState.Lists.Any() && boardState.Lists.First().Cards.Any())
                {
                    var firstCard = boardState.Lists.First().Cards.First();
                    Console.WriteLine($"🔧 Testing card drag for: {firstCard.Title}");
                    
                    // Find the card element and test dragging
                    await JSRuntime.InvokeVoidAsync("eval", 
                        "const cards = document.querySelectorAll('[data-card-id]');" +
                        "if (cards.length > 0) {" +
                        "  console.log('🔍 Found', cards.length, 'cards');" +
                        "  const firstCard = cards[0];" +
                        "  console.log('🔍 First card:', firstCard);" +
                        "  console.log('🔍 First card draggable:', firstCard.draggable);" +
                        "} else {" +
                        "  console.log('❌ No cards found in DOM');" +
                        "}");
                }
            }
            else
            {
                Console.WriteLine("❌ dragDrop object not found");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"❌ Drag drop test failed: {ex.Message}");
        }
    }

    public void Dispose()
    {
        dotNetReference?.Dispose();
    }
}
