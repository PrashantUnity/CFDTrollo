using CFDTrollo.Models;
using Microsoft.AspNetCore.Components;

namespace CFDTrollo.Components.Modals;

public partial class DeleteWorkspaceModal
{
    [Parameter] public bool IsOpen { get; set; }
    [Parameter] public EventCallback OnClose { get; set; }
    [Parameter] public EventCallback<string> OnDeleteWorkspace { get; set; }
    [Parameter] public Workspace? Workspace { get; set; }

    private async Task HandleDeleteWorkspace()
    {
        if (Workspace != null)
        {
            await OnDeleteWorkspace.InvokeAsync(Workspace.Id);
            await OnClose.InvokeAsync();
        }
    }
}
