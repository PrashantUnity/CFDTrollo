using Microsoft.AspNetCore.Components;
using CFDTrollo.Interfaces;
using CFDTrollo.Models;
using CFDTrollo.Constants;

namespace CFDTrollo.Pages;

/// <summary>
/// Home page code-behind
/// </summary>
public partial class Home : ComponentBase
{
    [Inject] 
    public IWorkspaceService WorkspaceService { get; set; } = default!;
    
    [Inject] 
    public NavigationManager Navigation { get; set; } = default!;

    private List<CFDTrollo.Models.Workspace>? workspaces;
    private bool isLoading = true;
    private string? errorMessage;
    private bool showCreateModal = false;
    private bool showSettingsModal = false;
    private CFDTrollo.Models.Workspace? selectedWorkspace;
    private string newWorkspaceName = "";
    private string newWorkspaceDescription = "";
    private string newWorkspaceColor = "#3B82F6";
    
    private readonly string[] workspaceColors = {
        "#3B82F6", "#10B981", "#8B5CF6", "#EF4444", "#F59E0B", "#6366F1"
    };

    protected override async Task OnInitializedAsync()
    {
        await LoadWorkspaces();
    }

    private async Task LoadWorkspaces()
    {
        try
        {
            isLoading = true;
            errorMessage = null;
            workspaces = await WorkspaceService.GetWorkspacesAsync();
        }
        catch (Exception ex)
        {
            errorMessage = $"Error loading workspaces: {ex.Message}";
        }
        finally
        {
            isLoading = false;
            StateHasChanged();
        }
    }

    private void NavigateToWorkspace(string workspaceId)
    {
        Navigation.NavigateTo($"workspace/{workspaceId}");
    }

    private void ShowCreateWorkspaceModal()
    {
        showCreateModal = true;
        newWorkspaceName = "";
        newWorkspaceDescription = "";
        newWorkspaceColor = "#3B82F6";
    }

    private void HideCreateWorkspaceModal()
    {
        showCreateModal = false;
    }

    private async Task CreateWorkspace()
    {
        if (string.IsNullOrWhiteSpace(newWorkspaceName))
            return;

        try
        {
            await WorkspaceService.CreateWorkspaceAsync(newWorkspaceName, newWorkspaceDescription, newWorkspaceColor);
            await LoadWorkspaces();
            HideCreateWorkspaceModal();
        }
        catch (Exception ex)
        {
            errorMessage = $"Error creating workspace: {ex.Message}";
        }
    }

    private void ShowWorkspaceSettings(CFDTrollo.Models.Workspace workspace)
    {
        selectedWorkspace = workspace;
        showSettingsModal = true;
    }

    private void HideWorkspaceSettings()
    {
        showSettingsModal = false;
        selectedWorkspace = null;
    }

    private async Task HandleUpdateWorkspace(CFDTrollo.Models.Workspace updatedWorkspace)
    {
        try
        {
            await WorkspaceService.UpdateWorkspaceAsync(updatedWorkspace);
            await LoadWorkspaces();
        }
        catch (Exception ex)
        {
            errorMessage = $"Error updating workspace: {ex.Message}";
        }
    }

    private async Task HandleDeleteWorkspace(string workspaceId)
    {
        try
        {
            await WorkspaceService.DeleteWorkspaceAsync(workspaceId);
            await LoadWorkspaces();
        }
        catch (Exception ex)
        {
            errorMessage = $"Error deleting workspace: {ex.Message}";
        }
    }

    private string GetTimeAgo(DateTime dateTime)
    {
        var timeSpan = DateTime.UtcNow - dateTime;
        
        if (timeSpan.TotalDays >= 1)
        {
            var days = (int)timeSpan.TotalDays;
            return days == 1 ? "1 day ago" : $"{days} days ago";
        }
        else if (timeSpan.TotalHours >= 1)
        {
            var hours = (int)timeSpan.TotalHours;
            return hours == 1 ? "1 hour ago" : $"{hours} hours ago";
        }
        else if (timeSpan.TotalMinutes >= 1)
        {
            var minutes = (int)timeSpan.TotalMinutes;
            return minutes == 1 ? "1 minute ago" : $"{minutes} minutes ago";
        }
        else
        {
            return "Just now";
        }
    }

    private async Task RefreshWorkspaces()
    {
        await LoadWorkspaces();
    }
}
