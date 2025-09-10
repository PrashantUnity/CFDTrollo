using CFDTrollo.Models;
using CFDTrollo.Interfaces;
using CFDTrollo.Common;
using CFDTrollo.Constants;

namespace CFDTrollo.Services;

/// <summary>
/// Workspace service implementation
/// </summary>
public class WorkspaceService : BaseService, IWorkspaceService
{
    private readonly ILocalStorageService _localStorage;
    private readonly IConfigurationService _configurationService;

    public WorkspaceService(ILocalStorageService localStorage, ILoggerService logger, IConfigurationService configurationService) 
        : base(logger)
    {
        _localStorage = localStorage ?? throw new ArgumentNullException(nameof(localStorage));
        _configurationService = configurationService ?? throw new ArgumentNullException(nameof(configurationService));
    }

    public async Task<List<Workspace>> GetWorkspacesAsync()
    {
        return await ExecuteWithErrorHandlingAsync(async () =>
        {
            var workspaces = await _localStorage.GetItemAsync<List<Workspace>>(ApplicationConstants.StorageKeys.Workspaces);
            return workspaces ?? GetDefaultWorkspaces();
        }, "GetWorkspacesAsync", new List<Workspace>());
    }

    public async Task<Workspace?> GetWorkspaceAsync(string workspaceId)
    {
        return await ExecuteWithErrorHandlingAsync(async () =>
        {
            if (string.IsNullOrWhiteSpace(workspaceId))
            {
                Logger.LogWarning("GetWorkspaceAsync called with null or empty workspaceId");
                return null;
            }

            var workspaces = await GetWorkspacesAsync();
            return workspaces.FirstOrDefault(w => w.Id == workspaceId);
        }, $"GetWorkspaceAsync for {workspaceId}", null);
    }

    public async Task<Workspace> CreateWorkspaceAsync(string name, string description = "", string color = "#3B82F6")
    {
        return await ExecuteWithErrorHandlingAsync(async () =>
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                throw new ArgumentException(ApplicationConstants.ErrorMessages.WorkspaceNameRequired, nameof(name));
            }

            var appSettings = _configurationService.GetAppSettings();
            var workspaces = await GetWorkspacesAsync();

            // Check workspace limit
            if (workspaces.Count >= appSettings.MaxWorkspaces)
            {
                throw new InvalidOperationException($"Maximum number of workspaces ({appSettings.MaxWorkspaces}) reached");
            }

            var newWorkspace = new Workspace
            {
                Id = $"workspace-{DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()}",
                Name = name.Trim(),
                Description = description?.Trim() ?? "",
                Color = ValidationHelper.IsValidColor(color) ? color : ApplicationConstants.DefaultWorkspace.Color,
                CreatedAt = DateTime.UtcNow,
                LastModified = DateTime.UtcNow,
                CardCount = 0
            };

            // Validate workspace
            var validationResult = ValidationHelper.ValidateWorkspace(newWorkspace);
            if (!validationResult.IsValid)
            {
                throw new ArgumentException(validationResult.ErrorMessage);
            }

            workspaces.Add(newWorkspace);
            await _localStorage.SetItemAsync(ApplicationConstants.StorageKeys.Workspaces, workspaces);
            
            Logger.LogInformation($"Created workspace: {newWorkspace.Name} (ID: {newWorkspace.Id})");
            return newWorkspace;
        }, $"CreateWorkspaceAsync: {name}", new Workspace());
    }

    public async Task UpdateWorkspaceAsync(Workspace workspace)
    {
        await ExecuteWithErrorHandlingAsync(async () =>
        {
            if (workspace == null)
            {
                throw new ArgumentNullException(nameof(workspace));
            }

            // Validate workspace
            var validationResult = ValidationHelper.ValidateWorkspace(workspace);
            if (!validationResult.IsValid)
            {
                throw new ArgumentException(validationResult.ErrorMessage);
            }

            var workspaces = await GetWorkspacesAsync();
            var index = workspaces.FindIndex(w => w.Id == workspace.Id);
            if (index < 0)
            {
                throw new InvalidOperationException(ApplicationConstants.ErrorMessages.WorkspaceNotFound);
            }

            workspace.LastModified = DateTime.UtcNow;
            workspaces[index] = workspace;
            await _localStorage.SetItemAsync(ApplicationConstants.StorageKeys.Workspaces, workspaces);
            
            Logger.LogInformation($"Updated workspace: {workspace.Name} (ID: {workspace.Id})");
        }, $"UpdateWorkspaceAsync: {workspace?.Name}");
    }

    public async Task DeleteWorkspaceAsync(string workspaceId)
    {
        await ExecuteWithErrorHandlingAsync(async () =>
        {
            if (string.IsNullOrWhiteSpace(workspaceId))
            {
                throw new ArgumentException(ApplicationConstants.ErrorMessages.InvalidWorkspaceId, nameof(workspaceId));
            }

            var workspaces = await GetWorkspacesAsync();
            var workspaceToDelete = workspaces.FirstOrDefault(w => w.Id == workspaceId);
            
            if (workspaceToDelete == null)
            {
                throw new InvalidOperationException(ApplicationConstants.ErrorMessages.WorkspaceNotFound);
            }

            workspaces.RemoveAll(w => w.Id == workspaceId);
            await _localStorage.SetItemAsync(ApplicationConstants.StorageKeys.Workspaces, workspaces);
            
            Logger.LogInformation($"Deleted workspace: {workspaceToDelete.Name} (ID: {workspaceId})");
        }, $"DeleteWorkspaceAsync: {workspaceId}");
    }

    public async Task UpdateWorkspaceCardCountAsync(string workspaceId, int cardCount)
    {
        await ExecuteWithErrorHandlingAsync(async () =>
        {
            var workspace = await GetWorkspaceAsync(workspaceId);
            if (workspace == null)
            {
                throw new InvalidOperationException(ApplicationConstants.ErrorMessages.WorkspaceNotFound);
            }

            workspace.CardCount = Math.Max(0, cardCount);
            await UpdateWorkspaceAsync(workspace);
            
            Logger.LogInformation($"Updated card count for workspace {workspace.Name}: {cardCount}");
        }, $"UpdateWorkspaceCardCountAsync: {workspaceId}");
    }

    public bool ValidateWorkspace(Workspace workspace)
    {
        var validationResult = ValidationHelper.ValidateWorkspace(workspace);
        return validationResult.IsValid;
    }

    private List<Workspace> GetDefaultWorkspaces()
    {
        var appSettings = _configurationService.GetAppSettings();
        var defaultSettings = appSettings.DefaultWorkspace;
        
        return new List<Workspace>
        {
            new Workspace
            {
                Id = "workspace-1",
                Name = defaultSettings.Name,
                Description = defaultSettings.Description,
                Color = defaultSettings.Color,
                CreatedAt = DateTime.UtcNow.AddDays(-3),
                LastModified = DateTime.UtcNow.AddDays(-3),
                CardCount = 0
            },
            new Workspace
            {
                Id = "workspace-2",
                Name = "Workspace 2",
                Description = "A new workspace for your projects",
                Color = ApplicationConstants.WorkspaceColors.AvailableColors[1],
                CreatedAt = DateTime.UtcNow.AddDays(-3),
                LastModified = DateTime.UtcNow.AddDays(-3),
                CardCount = 0
            },
            new Workspace
            {
                Id = "workspace-3",
                Name = "Workspace 3",
                Description = "A new workspace for your projects",
                Color = ApplicationConstants.WorkspaceColors.AvailableColors[2],
                CreatedAt = DateTime.UtcNow.AddDays(-3),
                LastModified = DateTime.UtcNow.AddDays(-3),
                CardCount = 0
            },
            new Workspace
            {
                Id = "workspace-4",
                Name = "Workspace 4",
                Description = "A new workspace for your projects",
                Color = ApplicationConstants.WorkspaceColors.AvailableColors[3],
                CreatedAt = DateTime.UtcNow.AddDays(-3),
                LastModified = DateTime.UtcNow.AddDays(-3),
                CardCount = 0
            },
            new Workspace
            {
                Id = "workspace-5",
                Name = "Workspace 5",
                Description = "A new workspace for your projects",
                Color = ApplicationConstants.WorkspaceColors.AvailableColors[4],
                CreatedAt = DateTime.UtcNow.AddDays(-3),
                LastModified = DateTime.UtcNow.AddDays(-3),
                CardCount = 0
            },
            new Workspace
            {
                Id = "workspace-6",
                Name = "Workspace 6",
                Description = "A new workspace for your projects",
                Color = ApplicationConstants.WorkspaceColors.AvailableColors[5],
                CreatedAt = DateTime.UtcNow.AddDays(-3),
                LastModified = DateTime.UtcNow.AddDays(-3),
                CardCount = 0
            }
        };
    }
}
