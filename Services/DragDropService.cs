using Microsoft.JSInterop;

namespace CFDTrollo.Services;

public class DragDropService
{
    private readonly IJSRuntime _jsRuntime;

    public DragDropService(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    public async Task InitializeSortableAsync<T>(DotNetObjectReference<T> dotNetReference) where T : class
    {
        await _jsRuntime.InvokeVoidAsync("sortableManager.init", dotNetReference);
    }

    public async Task CreateSortableAsync(string elementId, string listId)
    {
        await _jsRuntime.InvokeVoidAsync("sortableManager.createSortable", elementId, listId);
    }

    public async Task CreateListSortableAsync(string elementId)
    {
        await _jsRuntime.InvokeVoidAsync("sortableManager.createListSortable", elementId);
    }

    public async Task DestroySortableAsync(string elementId)
    {
        await _jsRuntime.InvokeVoidAsync("sortableManager.destroySortable", elementId);
    }

    public async Task RefreshSortableAsync(string elementId)
    {
        await _jsRuntime.InvokeVoidAsync("sortableManager.refreshSortable", elementId);
    }

    public async Task SetSortableEnabledAsync(string elementId, bool enabled)
    {
        await _jsRuntime.InvokeVoidAsync("sortableManager.setSortableEnabled", elementId, enabled);
    }
}
