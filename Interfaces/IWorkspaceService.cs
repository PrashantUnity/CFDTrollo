using CFDTrollo.Models;

namespace CFDTrollo.Interfaces;

/// <summary>
/// Interface for workspace management operations
/// </summary>
public interface IWorkspaceService
{
    /// <summary>
    /// Gets all workspaces
    /// </summary>
    /// <returns>List of all workspaces</returns>
    Task<List<Workspace>> GetWorkspacesAsync();

    /// <summary>
    /// Gets a specific workspace by ID
    /// </summary>
    /// <param name="workspaceId">ID of the workspace</param>
    /// <returns>Workspace if found, null otherwise</returns>
    Task<Workspace?> GetWorkspaceAsync(string workspaceId);

    /// <summary>
    /// Creates a new workspace
    /// </summary>
    /// <param name="name">Name of the workspace</param>
    /// <param name="description">Description of the workspace</param>
    /// <param name="color">Color of the workspace</param>
    /// <returns>Created workspace</returns>
    Task<Workspace> CreateWorkspaceAsync(string name, string description = "", string color = "#3B82F6");

    /// <summary>
    /// Updates an existing workspace
    /// </summary>
    /// <param name="workspace">Workspace to update</param>
    /// <returns>Task representing the async operation</returns>
    Task UpdateWorkspaceAsync(Workspace workspace);

    /// <summary>
    /// Deletes a workspace
    /// </summary>
    /// <param name="workspaceId">ID of the workspace to delete</param>
    /// <returns>Task representing the async operation</returns>
    Task DeleteWorkspaceAsync(string workspaceId);

    /// <summary>
    /// Updates the card count for a workspace
    /// </summary>
    /// <param name="workspaceId">ID of the workspace</param>
    /// <param name="cardCount">New card count</param>
    /// <returns>Task representing the async operation</returns>
    Task UpdateWorkspaceCardCountAsync(string workspaceId, int cardCount);

    /// <summary>
    /// Validates workspace data
    /// </summary>
    /// <param name="workspace">Workspace to validate</param>
    /// <returns>True if valid, false otherwise</returns>
    bool ValidateWorkspace(Workspace workspace);
}
