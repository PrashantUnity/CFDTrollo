using CFDTrollo.Models;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;

namespace CFDTrollo.Components.Modals;

public partial class EditWorkspaceModal
{
    [Parameter] public bool IsOpen { get; set; }
    [Parameter] public EventCallback OnClose { get; set; }
    [Parameter] public EventCallback<Workspace> OnUpdateWorkspace { get; set; }
    [Parameter] public Workspace? Workspace { get; set; }

    private string workspaceName = string.Empty;
    private string workspaceDescription = string.Empty;
    private string selectedColor = "bg-blue-500";
    private ElementReference nameInputRef;

    private readonly List<(string Name, string Value)> workspaceColors = new()
    {
        ("Blue", "bg-blue-500"),
        ("Green", "bg-green-500"),
        ("Purple", "bg-purple-500"),
        ("Red", "bg-red-500"),
        ("Yellow", "bg-yellow-500"),
        ("Orange", "bg-orange-500"),
        ("Pink", "bg-pink-500"),
        ("Indigo", "bg-indigo-500"),
        ("Teal", "bg-teal-500"),
        ("Cyan", "bg-cyan-500")
    };

    protected override void OnParametersSet()
    {
        if (IsOpen && Workspace != null)
        {
            // Populate form with existing workspace data
            workspaceName = Workspace.Name;
            workspaceDescription = Workspace.Description ?? string.Empty;
            selectedColor = Workspace.Color;
        }
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (IsOpen && nameInputRef.Context != null)
        {
            await nameInputRef.FocusAsync();
        }
    }

    private async Task HandleUpdateWorkspace()
    {
        if (string.IsNullOrWhiteSpace(workspaceName) || Workspace == null)
            return;

        var updatedWorkspace = new Workspace
        {
            Id = Workspace.Id,
            Name = workspaceName.Trim(),
            Description = workspaceDescription?.Trim() ?? string.Empty,
            Color = selectedColor,
            Lists = Workspace.Lists,
            CreatedAt = Workspace.CreatedAt,
            LastModified = DateTime.UtcNow,
            CardCount = Workspace.CardCount
        };

        await OnUpdateWorkspace.InvokeAsync(updatedWorkspace);
        await OnClose.InvokeAsync();
    }
}
