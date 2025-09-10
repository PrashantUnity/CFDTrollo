namespace CFDTrollo.Configuration;

/// <summary>
/// Application configuration settings
/// </summary>
public class AppSettings
{
    public const string SectionName = "AppSettings";
    
    /// <summary>
    /// Application name
    /// </summary>
    public string ApplicationName { get; set; } = "CFDTrollo";
    
    /// <summary>
    /// Application version
    /// </summary>
    public string Version { get; set; } = "1.0.0";
    
    /// <summary>
    /// Maximum number of workspaces allowed
    /// </summary>
    public int MaxWorkspaces { get; set; } = 10;
    
    /// <summary>
    /// Maximum number of lists per workspace
    /// </summary>
    public int MaxListsPerWorkspace { get; set; } = 20;
    
    /// <summary>
    /// Maximum number of cards per list
    /// </summary>
    public int MaxCardsPerList { get; set; } = 100;
    
    /// <summary>
    /// Enable debug mode
    /// </summary>
    public bool EnableDebugMode { get; set; } = false;
    
    /// <summary>
    /// Auto-save interval in milliseconds
    /// </summary>
    public int AutoSaveInterval { get; set; } = 5000;
    
    /// <summary>
    /// Enable drag and drop animations
    /// </summary>
    public bool EnableDragDropAnimations { get; set; } = true;
    
    /// <summary>
    /// Default workspace settings
    /// </summary>
    public DefaultWorkspaceSettings DefaultWorkspace { get; set; } = new();
}

/// <summary>
/// Default workspace configuration
/// </summary>
public class DefaultWorkspaceSettings
{
    /// <summary>
    /// Default workspace name
    /// </summary>
    public string Name { get; set; } = "My Workspace";
    
    /// <summary>
    /// Default workspace description
    /// </summary>
    public string Description { get; set; } = "Your main project board";
    
    /// <summary>
    /// Default workspace color
    /// </summary>
    public string Color { get; set; } = "#3B82F6";
    
    /// <summary>
    /// Create default lists when creating a new workspace
    /// </summary>
    public bool CreateDefaultLists { get; set; } = true;
    
    /// <summary>
    /// Default list names
    /// </summary>
    public string[] DefaultListNames { get; set; } = { "To Do", "In Progress", "Done" };
}
