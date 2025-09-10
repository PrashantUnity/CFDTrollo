using Microsoft.JSInterop;
using Microsoft.AspNetCore.Components;

namespace CFDTrollo.Services;

public class DragDropService
{
    private readonly IJSRuntime _jsRuntime;

    public DragDropService(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    public async Task InitializeDragDropAsync<T>(DotNetObjectReference<T> dotNetReference) where T : class
    {
        try
        {
            Console.WriteLine("🔧 Initializing DragDrop with SortableJS...");
            await _jsRuntime.InvokeVoidAsync("dragDrop.init", dotNetReference);
            Console.WriteLine("✅ DragDrop initialized successfully");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"❌ Error initializing DragDrop: {ex.Message}");
            throw;
        }
    }

    public async Task EnableCardDraggingAsync(ElementReference listElement, string listId)
    {
        try
        {
            Console.WriteLine($"🔧 Enabling card dragging for list: {listId}");
            await _jsRuntime.InvokeVoidAsync("dragDrop.enableCardDragging", listElement, listId);
            Console.WriteLine($"✅ Card dragging enabled for list: {listId}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"❌ Error enabling card dragging for list {listId}: {ex.Message}");
            throw;
        }
    }

    public async Task EnableListDraggingAsync(ElementReference boardElement)
    {
        try
        {
            Console.WriteLine("🔧 Enabling list dragging for board");
            await _jsRuntime.InvokeVoidAsync("dragDrop.enableListDragging", boardElement);
            Console.WriteLine("✅ List dragging enabled for board");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"❌ Error enabling list dragging: {ex.Message}");
            throw;
        }
    }

    public async Task DestroySortableAsync(string elementId)
    {
        try
        {
            Console.WriteLine($"🔧 Destroying sortable instance: {elementId}");
            await _jsRuntime.InvokeVoidAsync("dragDrop.destroy", elementId);
            Console.WriteLine($"✅ Sortable instance destroyed: {elementId}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"❌ Error destroying sortable instance {elementId}: {ex.Message}");
            throw;
        }
    }

    public async Task DestroyAllSortablesAsync()
    {
        try
        {
            Console.WriteLine("🔧 Destroying all sortable instances");
            await _jsRuntime.InvokeVoidAsync("dragDrop.destroyAll");
            Console.WriteLine("✅ All sortable instances destroyed");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"❌ Error destroying all sortable instances: {ex.Message}");
            throw;
        }
    }
}