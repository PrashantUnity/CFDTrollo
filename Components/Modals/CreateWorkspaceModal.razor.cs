using CFDTrollo.Models;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;

namespace CFDTrollo.Components.Modals;

public partial class CreateWorkspaceModal
{
    [Parameter] public bool IsOpen { get; set; }
    [Parameter] public EventCallback OnClose { get; set; }
    [Parameter] public EventCallback<Workspace> OnCreateWorkspace { get; set; }

    private string workspaceName = string.Empty;
    private string workspaceDescription = string.Empty;
    private string selectedColor = "bg-blue-500";
    private string selectedTemplate = string.Empty;
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
        if (IsOpen)
        {
            // Reset form when modal opens
            workspaceName = string.Empty;
            workspaceDescription = string.Empty;
            selectedColor = "bg-blue-500";
            selectedTemplate = string.Empty;
        }
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (IsOpen && nameInputRef.Context != null)
        {
            await nameInputRef.FocusAsync();
        }
    }

    private async Task HandleCreateWorkspace()
    {
        if (string.IsNullOrWhiteSpace(workspaceName))
            return;

        var newWorkspace = new Workspace
        {
            Id = Guid.NewGuid().ToString(),
            Name = workspaceName.Trim(),
            Description = workspaceDescription?.Trim() ?? string.Empty,
            Color = selectedColor,
            Lists = CreateTemplateLists(selectedTemplate)
        };

        await OnCreateWorkspace.InvokeAsync(newWorkspace);
        await OnClose.InvokeAsync();
    }

    private List<List> CreateTemplateLists(string template)
    {
        return template switch
        {
            "kanban" => new List<List>
            {
                new List { Id = Guid.NewGuid().ToString(), Title = "To Do", Color = "bg-gray-500", Cards = new List<Card>() },
                new List { Id = Guid.NewGuid().ToString(), Title = "In Progress", Color = "bg-blue-500", Cards = new List<Card>() },
                new List { Id = Guid.NewGuid().ToString(), Title = "Review", Color = "bg-yellow-500", Cards = new List<Card>() },
                new List { Id = Guid.NewGuid().ToString(), Title = "Done", Color = "bg-green-500", Cards = new List<Card>() }
            },
            "project" => new List<List>
            {
                new List { Id = Guid.NewGuid().ToString(), Title = "Backlog", Color = "bg-gray-500", Cards = new List<Card>() },
                new List { Id = Guid.NewGuid().ToString(), Title = "Sprint Planning", Color = "bg-blue-500", Cards = new List<Card>() },
                new List { Id = Guid.NewGuid().ToString(), Title = "In Development", Color = "bg-orange-500", Cards = new List<Card>() },
                new List { Id = Guid.NewGuid().ToString(), Title = "Testing", Color = "bg-yellow-500", Cards = new List<Card>() },
                new List { Id = Guid.NewGuid().ToString(), Title = "Deployed", Color = "bg-green-500", Cards = new List<Card>() }
            },
            "personal" => new List<List>
            {
                new List { Id = Guid.NewGuid().ToString(), Title = "Ideas", Color = "bg-purple-500", Cards = new List<Card>() },
                new List { Id = Guid.NewGuid().ToString(), Title = "This Week", Color = "bg-blue-500", Cards = new List<Card>() },
                new List { Id = Guid.NewGuid().ToString(), Title = "In Progress", Color = "bg-orange-500", Cards = new List<Card>() },
                new List { Id = Guid.NewGuid().ToString(), Title = "Completed", Color = "bg-green-500", Cards = new List<Card>() }
            },
            "team" => new List<List>
            {
                new List { Id = Guid.NewGuid().ToString(), Title = "Ideas & Requests", Color = "bg-purple-500", Cards = new List<Card>() },
                new List { Id = Guid.NewGuid().ToString(), Title = "To Do", Color = "bg-blue-500", Cards = new List<Card>() },
                new List { Id = Guid.NewGuid().ToString(), Title = "In Progress", Color = "bg-orange-500", Cards = new List<Card>() },
                new List { Id = Guid.NewGuid().ToString(), Title = "Review", Color = "bg-yellow-500", Cards = new List<Card>() },
                new List { Id = Guid.NewGuid().ToString(), Title = "Done", Color = "bg-green-500", Cards = new List<Card>() }
            },
            _ => new List<List>()
        };
    }
}
