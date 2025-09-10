using CFDTrollo.Models;
using Microsoft.AspNetCore.Components;

namespace CFDTrollo.Components.Modals;

public partial class WorkspaceSettingsModal
{
    [Parameter] public bool IsOpen { get; set; }
    [Parameter] public EventCallback OnClose { get; set; }
    [Parameter] public EventCallback<Workspace> OnUpdateWorkspace { get; set; }
    [Parameter] public EventCallback<string> OnDeleteWorkspace { get; set; }
    [Parameter] public Workspace? Workspace { get; set; }

    private bool showEditModal = false;
    private bool showDeleteModal = false;

    private void ShowEditModal()
    {
        showEditModal = true;
    }

    private void HideEditModal()
    {
        showEditModal = false;
    }

    private void ShowDeleteModal()
    {
        showDeleteModal = true;
    }

    private void HideDeleteModal()
    {
        showDeleteModal = false;
    }

    private async Task HandleUpdateWorkspace(Workspace updatedWorkspace)
    {
        await OnUpdateWorkspace.InvokeAsync(updatedWorkspace);
        HideEditModal();
    }

    private async Task HandleDeleteWorkspace(string workspaceId)
    {
        await OnDeleteWorkspace.InvokeAsync(workspaceId);
        HideDeleteModal();
        await OnClose.InvokeAsync(); // Close the settings modal after deletion
    }
}
