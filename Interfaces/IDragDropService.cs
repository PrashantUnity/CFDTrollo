using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace CFDTrollo.Interfaces;

/// <summary>
/// Interface for drag and drop operations
/// </summary>
public interface IDragDropService
{
    /// <summary>
    /// Initializes drag and drop functionality
    /// </summary>
    /// <typeparam name="T">Type of the component reference</typeparam>
    /// <param name="dotNetReference">Reference to the .NET component</param>
    /// <returns>Task representing the async operation</returns>
    Task InitializeDragDropAsync<T>(DotNetObjectReference<T> dotNetReference) where T : class;

    /// <summary>
    /// Enables card dragging for a specific list
    /// </summary>
    /// <param name="listElement">Reference to the list element</param>
    /// <param name="listId">ID of the list</param>
    /// <returns>Task representing the async operation</returns>
    Task EnableCardDraggingAsync(ElementReference listElement, string listId);

    /// <summary>
    /// Enables list dragging for the board
    /// </summary>
    /// <param name="boardElement">Reference to the board element</param>
    /// <returns>Task representing the async operation</returns>
    Task EnableListDraggingAsync(ElementReference boardElement);

    /// <summary>
    /// Destroys a specific sortable instance
    /// </summary>
    /// <param name="elementId">ID of the element to destroy</param>
    /// <returns>Task representing the async operation</returns>
    Task DestroySortableAsync(string elementId);

    /// <summary>
    /// Destroys all sortable instances
    /// </summary>
    /// <returns>Task representing the async operation</returns>
    Task DestroyAllSortablesAsync();
}
