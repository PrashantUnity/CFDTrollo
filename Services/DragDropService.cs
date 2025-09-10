using Microsoft.JSInterop;
using Microsoft.AspNetCore.Components;
using CFDTrollo.Interfaces;
using CFDTrollo.Common;
using CFDTrollo.Constants;

namespace CFDTrollo.Services;

/// <summary>
/// Drag and drop service implementation
/// </summary>
public class DragDropService : BaseService, IDragDropService
{
    private readonly IJSRuntime _jsRuntime;

    public DragDropService(IJSRuntime jsRuntime, ILoggerService logger) : base(logger)
    {
        _jsRuntime = jsRuntime ?? throw new ArgumentNullException(nameof(jsRuntime));
    }

    public async Task InitializeDragDropAsync<T>(DotNetObjectReference<T> dotNetReference) where T : class
    {
        await ExecuteWithErrorHandlingAsync(async () =>
        {
            Logger.LogInformation("Initializing DragDrop with SortableJS...");
            await _jsRuntime.InvokeVoidAsync("dragDrop.init", dotNetReference);
            Logger.LogInformation("DragDrop initialized successfully");
        }, "InitializeDragDropAsync");
    }

    public async Task EnableCardDraggingAsync(ElementReference listElement, string listId)
    {
        await ExecuteWithErrorHandlingAsync(async () =>
        {
            Logger.LogInformation($"Enabling card dragging for list: {listId}");
            await _jsRuntime.InvokeVoidAsync("dragDrop.enableCardDragging", listElement, listId);
            Logger.LogInformation($"Card dragging enabled for list: {listId}");
        }, $"EnableCardDraggingAsync for list {listId}");
    }

    public async Task EnableListDraggingAsync(ElementReference boardElement)
    {
        await ExecuteWithErrorHandlingAsync(async () =>
        {
            Logger.LogInformation("Enabling list dragging for board");
            await _jsRuntime.InvokeVoidAsync("dragDrop.enableListDragging", boardElement);
            Logger.LogInformation("List dragging enabled for board");
        }, "EnableListDraggingAsync");
    }

    public async Task DestroySortableAsync(string elementId)
    {
        await ExecuteWithErrorHandlingAsync(async () =>
        {
            Logger.LogInformation($"Destroying sortable instance: {elementId}");
            await _jsRuntime.InvokeVoidAsync("dragDrop.destroy", elementId);
            Logger.LogInformation($"Sortable instance destroyed: {elementId}");
        }, $"DestroySortableAsync for element {elementId}");
    }

    public async Task DestroyAllSortablesAsync()
    {
        await ExecuteWithErrorHandlingAsync(async () =>
        {
            Logger.LogInformation("Destroying all sortable instances");
            await _jsRuntime.InvokeVoidAsync("dragDrop.destroyAll");
            Logger.LogInformation("All sortable instances destroyed");
        }, "DestroyAllSortablesAsync");
    }
}