using CFDTrollo.Configuration;

namespace CFDTrollo.Interfaces;

/// <summary>
/// Interface for configuration management
/// </summary>
public interface IConfigurationService
{
    /// <summary>
    /// Gets the application settings
    /// </summary>
    /// <returns>Application settings</returns>
    AppSettings GetAppSettings();

    /// <summary>
    /// Gets a configuration value by key
    /// </summary>
    /// <param name="key">Configuration key</param>
    /// <returns>Configuration value</returns>
    string GetValue(string key);

    /// <summary>
    /// Gets a configuration value by key with default value
    /// </summary>
    /// <param name="key">Configuration key</param>
    /// <param name="defaultValue">Default value if key not found</param>
    /// <returns>Configuration value or default</returns>
    string GetValue(string key, string defaultValue);

    /// <summary>
    /// Gets a typed configuration value
    /// </summary>
    /// <typeparam name="T">Type of the configuration value</typeparam>
    /// <param name="key">Configuration key</param>
    /// <returns>Typed configuration value</returns>
    T GetValue<T>(string key);

    /// <summary>
    /// Gets a typed configuration value with default
    /// </summary>
    /// <typeparam name="T">Type of the configuration value</typeparam>
    /// <param name="key">Configuration key</param>
    /// <param name="defaultValue">Default value if key not found</param>
    /// <returns>Typed configuration value or default</returns>
    T GetValue<T>(string key, T defaultValue);
}
