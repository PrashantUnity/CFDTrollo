using Microsoft.AspNetCore.Components;
using CFDTrollo.Interfaces;
using CFDTrollo.Models;
using CFDTrollo.Constants;

namespace CFDTrollo.Pages;

/// <summary>
/// Workspace page code-behind
/// </summary>
public partial class Workspace : ComponentBase
{
    [Parameter] 
    public string WorkspaceId { get; set; } = "";
    
    [Inject] 
    public IWorkspaceService WorkspaceService { get; set; } = default!;
    
    [Inject] 
    public NavigationManager Navigation { get; set; } = default!;

    private CFDTrollo.Models.Workspace? workspace;
    private bool showSettingsModal = false;
    private bool isLoading = true;
    private string? errorMessage;

    protected override async Task OnInitializedAsync()
    {
        await LoadWorkspace();
    }

    private async Task LoadWorkspace()
    {
        try
        {
            isLoading = true;
            errorMessage = null;
            
            if (string.IsNullOrWhiteSpace(WorkspaceId))
            {
                errorMessage = ApplicationConstants.ErrorMessages.InvalidWorkspaceId;
                return;
            }

            workspace = await WorkspaceService.GetWorkspaceAsync(WorkspaceId);
            if (workspace == null)
            {
                errorMessage = ApplicationConstants.ErrorMessages.WorkspaceNotFound;
                // Redirect to home after a short delay
                await Task.Delay(2000);
                Navigation.NavigateTo("");
            }
        }
        catch (Exception ex)
        {
            errorMessage = $"Error loading workspace: {ex.Message}";
        }
        finally
        {
            isLoading = false;
            StateHasChanged();
        }
    }

    private void NavigateToHome()
    {
        Navigation.NavigateTo("");
    }

    private async Task UpdateCardCount(int cardCount)
    {
        if (workspace != null)
        {
            try
            {
                await WorkspaceService.UpdateWorkspaceCardCountAsync(workspace.Id, cardCount);
                workspace.CardCount = cardCount;
            }
            catch (Exception ex)
            {
                // Log error but don't show to user for card count updates
                Console.WriteLine($"Error updating card count: {ex.Message}");
            }
        }
    }

    private void ShowWorkspaceSettings()
    {
        showSettingsModal = true;
    }

    private void HideWorkspaceSettings()
    {
        showSettingsModal = false;
    }

    private async Task SaveWorkspaceSettings()
    {
        if (workspace != null)
        {
            try
            {
                await WorkspaceService.UpdateWorkspaceAsync(workspace);
                HideWorkspaceSettings();
            }
            catch (Exception ex)
            {
                errorMessage = $"Error saving workspace: {ex.Message}";
            }
        }
    }

    private async Task DeleteWorkspace()
    {
        if (workspace != null)
        {
            try
            {
                await WorkspaceService.DeleteWorkspaceAsync(workspace.Id);
                Navigation.NavigateTo("");
            }
            catch (Exception ex)
            {
                errorMessage = $"Error deleting workspace: {ex.Message}";
            }
        }
    }
}
