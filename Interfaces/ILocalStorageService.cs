namespace CFDTrollo.Interfaces;

/// <summary>
/// Interface for local storage operations
/// </summary>
public interface ILocalStorageService
{
    /// <summary>
    /// Gets an item from local storage
    /// </summary>
    /// <typeparam name="T">Type of the item to retrieve</typeparam>
    /// <param name="key">Storage key</param>
    /// <returns>Deserialized item or default value if not found</returns>
    Task<T?> GetItemAsync<T>(string key);

    /// <summary>
    /// Sets an item in local storage
    /// </summary>
    /// <typeparam name="T">Type of the item to store</typeparam>
    /// <param name="key">Storage key</param>
    /// <param name="value">Value to store</param>
    /// <returns>Task representing the async operation</returns>
    Task SetItemAsync<T>(string key, T value);

    /// <summary>
    /// Removes an item from local storage
    /// </summary>
    /// <param name="key">Storage key to remove</param>
    /// <returns>Task representing the async operation</returns>
    Task RemoveItemAsync(string key);

    /// <summary>
    /// Clears all items from local storage
    /// </summary>
    /// <returns>Task representing the async operation</returns>
    Task ClearAsync();

    /// <summary>
    /// Checks if a key exists in local storage
    /// </summary>
    /// <param name="key">Storage key to check</param>
    /// <returns>True if key exists, false otherwise</returns>
    Task<bool> ContainsKeyAsync(string key);
}
