using CFDTrollo.Models;

namespace CFDTrollo.Services;

public class WorkspaceService
{
    private readonly LocalStorageService _localStorage;
    private const string WORKSPACES_KEY = "workspaces";

    public WorkspaceService(LocalStorageService localStorage)
    {
        _localStorage = localStorage;
    }

    public async Task<List<Workspace>> GetWorkspacesAsync()
    {
        var workspaces = await _localStorage.GetItem<List<Workspace>>(WORKSPACES_KEY);
        return workspaces ?? GetDefaultWorkspaces();
    }

    public async Task<Workspace?> GetWorkspaceAsync(string workspaceId)
    {
        var workspaces = await GetWorkspacesAsync();
        return workspaces.FirstOrDefault(w => w.Id == workspaceId);
    }

    public async Task<Workspace> CreateWorkspaceAsync(string name, string description = "", string color = "#3B82F6")
    {
        var workspaces = await GetWorkspacesAsync();
        var newWorkspace = new Workspace
        {
            Id = $"workspace-{DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()}",
            Name = name,
            Description = description,
            Color = color,
            CreatedAt = DateTime.UtcNow,
            LastModified = DateTime.UtcNow
        };

        workspaces.Add(newWorkspace);
        await _localStorage.SetItem(WORKSPACES_KEY, workspaces);
        return newWorkspace;
    }

    public async Task UpdateWorkspaceAsync(Workspace workspace)
    {
        var workspaces = await GetWorkspacesAsync();
        var index = workspaces.FindIndex(w => w.Id == workspace.Id);
        if (index >= 0)
        {
            workspaces[index] = workspace;
            workspace.LastModified = DateTime.UtcNow;
            await _localStorage.SetItem(WORKSPACES_KEY, workspaces);
        }
    }

    public async Task DeleteWorkspaceAsync(string workspaceId)
    {
        var workspaces = await GetWorkspacesAsync();
        workspaces.RemoveAll(w => w.Id == workspaceId);
        await _localStorage.SetItem(WORKSPACES_KEY, workspaces);
    }

    public async Task UpdateWorkspaceCardCountAsync(string workspaceId, int cardCount)
    {
        var workspace = await GetWorkspaceAsync(workspaceId);
        if (workspace != null)
        {
            workspace.CardCount = cardCount;
            await UpdateWorkspaceAsync(workspace);
        }
    }

    private List<Workspace> GetDefaultWorkspaces()
    {
        return new List<Workspace>
        {
            new Workspace
            {
                Id = "workspace-1",
                Name = "My Workspace",
                Description = "Your main project board",
                Color = "#3B82F6",
                CreatedAt = DateTime.UtcNow.AddDays(-3),
                LastModified = DateTime.UtcNow.AddDays(-3),
                CardCount = 0
            },
            new Workspace
            {
                Id = "workspace-2",
                Name = "Workspace 2",
                Description = "A new workspace for your projects",
                Color = "#10B981",
                CreatedAt = DateTime.UtcNow.AddDays(-3),
                LastModified = DateTime.UtcNow.AddDays(-3),
                CardCount = 0
            },
            new Workspace
            {
                Id = "workspace-3",
                Name = "Workspace 3",
                Description = "A new workspace for your projects",
                Color = "#8B5CF6",
                CreatedAt = DateTime.UtcNow.AddDays(-3),
                LastModified = DateTime.UtcNow.AddDays(-3),
                CardCount = 0
            },
            new Workspace
            {
                Id = "workspace-4",
                Name = "Workspace 4",
                Description = "A new workspace for your projects",
                Color = "#EF4444",
                CreatedAt = DateTime.UtcNow.AddDays(-3),
                LastModified = DateTime.UtcNow.AddDays(-3),
                CardCount = 0
            },
            new Workspace
            {
                Id = "workspace-5",
                Name = "Workspace 5",
                Description = "A new workspace for your projects",
                Color = "#F59E0B",
                CreatedAt = DateTime.UtcNow.AddDays(-3),
                LastModified = DateTime.UtcNow.AddDays(-3),
                CardCount = 0
            },
            new Workspace
            {
                Id = "workspace-6",
                Name = "Workspace 6",
                Description = "A new workspace for your projects",
                Color = "#6366F1",
                CreatedAt = DateTime.UtcNow.AddDays(-3),
                LastModified = DateTime.UtcNow.AddDays(-3),
                CardCount = 0
            }
        };
    }
}
