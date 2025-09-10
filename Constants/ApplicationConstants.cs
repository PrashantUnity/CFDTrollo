namespace CFDTrollo.Constants;

/// <summary>
/// Application-wide constants for better maintainability
/// </summary>
public static class ApplicationConstants
{
    /// <summary>
    /// Local storage keys
    /// </summary>
    public static class StorageKeys
    {
        public const string Workspaces = "workspaces";
        public const string CurrentWorkspace = "current_workspace";
        public const string UserPreferences = "user_preferences";
        public const string BoardState = "board_state";
    }

    /// <summary>
    /// Default workspace configuration
    /// </summary>
    public static class DefaultWorkspace
    {
        public const string Name = "My Workspace";
        public const string Description = "Your main project board";
        public const string Color = "#3B82F6";
        public const int CardCount = 0;
    }

    /// <summary>
    /// Workspace colors
    /// </summary>
    public static class WorkspaceColors
    {
        public static readonly string[] AvailableColors = new[]
        {
            "#3B82F6", // Blue
            "#10B981", // Green
            "#8B5CF6", // Purple
            "#EF4444", // Red
            "#F59E0B", // Orange
            "#6366F1", // Indigo
            "#EC4899", // Pink
            "#14B8A6", // Teal
            "#F97316", // Orange
            "#84CC16"  // Lime
        };
    }

    /// <summary>
    /// Drag and drop configuration
    /// </summary>
    public static class DragDrop
    {
        public const string CardDragGroup = "cards";
        public const string ListDragGroup = "lists";
        public const int AnimationDuration = 150;
        public const string DragClass = "drag-item";
        public const string GhostClass = "ghost-item";
    }

    /// <summary>
    /// UI configuration
    /// </summary>
    public static class UI
    {
        public const int MaxWorkspaceNameLength = 50;
        public const int MaxWorkspaceDescriptionLength = 200;
        public const int MaxCardTitleLength = 100;
        public const int MaxListNameLength = 50;
        public const int MaxCardDescriptionLength = 500;
    }

    /// <summary>
    /// Error messages
    /// </summary>
    public static class ErrorMessages
    {
        public const string WorkspaceNotFound = "Workspace not found";
        public const string InvalidWorkspaceId = "Invalid workspace ID";
        public const string WorkspaceNameRequired = "Workspace name is required";
        public const string CardTitleRequired = "Card title is required";
        public const string ListNameRequired = "List name is required";
        public const string DragDropInitializationFailed = "Failed to initialize drag and drop";
        public const string StorageOperationFailed = "Storage operation failed";
    }

    /// <summary>
    /// Success messages
    /// </summary>
    public static class SuccessMessages
    {
        public const string WorkspaceCreated = "Workspace created successfully";
        public const string WorkspaceUpdated = "Workspace updated successfully";
        public const string WorkspaceDeleted = "Workspace deleted successfully";
        public const string CardCreated = "Card created successfully";
        public const string CardUpdated = "Card updated successfully";
        public const string CardDeleted = "Card deleted successfully";
        public const string ListCreated = "List created successfully";
        public const string ListUpdated = "List updated successfully";
        public const string ListDeleted = "List deleted successfully";
    }

    /// <summary>
    /// Console log prefixes for debugging
    /// </summary>
    public static class LogPrefixes
    {
        public const string DragDrop = "🔧";
        public const string Success = "✅";
        public const string Error = "❌";
        public const string Info = "ℹ️";
        public const string Warning = "⚠️";
    }
}
