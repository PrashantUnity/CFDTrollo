using CFDTrollo.Constants;
using CFDTrollo.Models;

namespace CFDTrollo.Common;

/// <summary>
/// Helper class for validation operations
/// </summary>
public static class ValidationHelper
{
    /// <summary>
    /// Validates workspace data
    /// </summary>
    /// <param name="workspace">Workspace to validate</param>
    /// <returns>Validation result with error messages</returns>
    public static ValidationResult ValidateWorkspace(Workspace workspace)
    {
        var errors = new List<string>();

        if (workspace == null)
        {
            errors.Add(ApplicationConstants.ErrorMessages.WorkspaceNotFound);
            return new ValidationResult { IsValid = false, Errors = errors };
        }

        if (string.IsNullOrWhiteSpace(workspace.Name))
        {
            errors.Add(ApplicationConstants.ErrorMessages.WorkspaceNameRequired);
        }
        else if (workspace.Name.Length > ApplicationConstants.UI.MaxWorkspaceNameLength)
        {
            errors.Add($"Workspace name cannot exceed {ApplicationConstants.UI.MaxWorkspaceNameLength} characters");
        }

        if (!string.IsNullOrWhiteSpace(workspace.Description) && 
            workspace.Description.Length > ApplicationConstants.UI.MaxWorkspaceDescriptionLength)
        {
            errors.Add($"Workspace description cannot exceed {ApplicationConstants.UI.MaxWorkspaceDescriptionLength} characters");
        }

        if (string.IsNullOrWhiteSpace(workspace.Id))
        {
            errors.Add(ApplicationConstants.ErrorMessages.InvalidWorkspaceId);
        }

        return new ValidationResult
        {
            IsValid = errors.Count == 0,
            Errors = errors
        };
    }

    /// <summary>
    /// Validates card data
    /// </summary>
    /// <param name="card">Card to validate</param>
    /// <returns>Validation result with error messages</returns>
    public static ValidationResult ValidateCard(Card card)
    {
        var errors = new List<string>();

        if (card == null)
        {
            errors.Add("Card cannot be null");
            return new ValidationResult { IsValid = false, Errors = errors };
        }

        if (string.IsNullOrWhiteSpace(card.Title))
        {
            errors.Add(ApplicationConstants.ErrorMessages.CardTitleRequired);
        }
        else if (card.Title.Length > ApplicationConstants.UI.MaxCardTitleLength)
        {
            errors.Add($"Card title cannot exceed {ApplicationConstants.UI.MaxCardTitleLength} characters");
        }

        if (!string.IsNullOrWhiteSpace(card.Description) && 
            card.Description.Length > ApplicationConstants.UI.MaxCardDescriptionLength)
        {
            errors.Add($"Card description cannot exceed {ApplicationConstants.UI.MaxCardDescriptionLength} characters");
        }

        return new ValidationResult
        {
            IsValid = errors.Count == 0,
            Errors = errors
        };
    }

    /// <summary>
    /// Validates list data
    /// </summary>
    /// <param name="list">List to validate</param>
    /// <returns>Validation result with error messages</returns>
    public static ValidationResult ValidateList(Models.List list)
    {
        var errors = new List<string>();

        if (list == null)
        {
            errors.Add("List cannot be null");
            return new ValidationResult { IsValid = false, Errors = errors };
        }

        if (string.IsNullOrWhiteSpace(list.Title))
        {
            errors.Add(ApplicationConstants.ErrorMessages.ListNameRequired);
        }
        else if (list.Title.Length > ApplicationConstants.UI.MaxListNameLength)
        {
            errors.Add($"List name cannot exceed {ApplicationConstants.UI.MaxListNameLength} characters");
        }

        return new ValidationResult
        {
            IsValid = errors.Count == 0,
            Errors = errors
        };
    }

    /// <summary>
    /// Validates if a string is a valid color hex code
    /// </summary>
    /// <param name="color">Color string to validate</param>
    /// <returns>True if valid color, false otherwise</returns>
    public static bool IsValidColor(string color)
    {
        if (string.IsNullOrWhiteSpace(color))
            return false;

        return System.Text.RegularExpressions.Regex.IsMatch(color, @"^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
    }
}

/// <summary>
/// Validation result containing validation status and error messages
/// </summary>
public class ValidationResult
{
    /// <summary>
    /// Indicates if the validation passed
    /// </summary>
    public bool IsValid { get; set; }

    /// <summary>
    /// List of error messages if validation failed
    /// </summary>
    public List<string> Errors { get; set; } = new();

    /// <summary>
    /// Gets the combined error message
    /// </summary>
    public string ErrorMessage => string.Join("; ", Errors);
}
