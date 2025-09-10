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
        await _jsRuntime.InvokeVoidAsync("dragDrop.init", dotNetReference);
    }

    public async Task EnableCardDraggingAsync(ElementReference element, string cardId, string listTitle, int cardIndex)
    {
        await _jsRuntime.InvokeVoidAsync("dragDrop.enableDragging", element, "card", cardId, listTitle, cardIndex);
    }

    public async Task EnableListDraggingAsync(ElementReference element, string listId, int listIndex)
    {
        await _jsRuntime.InvokeVoidAsync("dragDrop.enableDragging", element, "list", listId, "", listIndex);
    }

    public async Task EnableCardDropZoneAsync(ElementReference element, string listId)
    {
        await _jsRuntime.InvokeVoidAsync("dragDrop.enableDropZone", element, "card", listId);
    }

    public async Task EnableListDropZoneAsync(ElementReference element)
    {
        await _jsRuntime.InvokeVoidAsync("dragDrop.enableDropZone", element, "list", "");
    }
}