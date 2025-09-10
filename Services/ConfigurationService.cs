using CFDTrollo.Interfaces;
using CFDTrollo.Configuration;
using System.Text.Json;

namespace CFDTrollo.Services;

/// <summary>
/// Configuration service implementation
/// </summary>
public class ConfigurationService : IConfigurationService
{
    private readonly IConfiguration _configuration;
    private AppSettings? _appSettings;

    public ConfigurationService(IConfiguration configuration)
    {
        _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
    }

    public AppSettings GetAppSettings()
    {
        if (_appSettings == null)
        {
            _appSettings = new AppSettings();
            _configuration.GetSection(AppSettings.SectionName).Bind(_appSettings);
        }
        return _appSettings;
    }

    public string GetValue(string key)
    {
        return _configuration[key] ?? string.Empty;
    }

    public string GetValue(string key, string defaultValue)
    {
        return _configuration[key] ?? defaultValue;
    }

    public T GetValue<T>(string key)
    {
        var value = _configuration[key];
        if (string.IsNullOrEmpty(value))
        {
            return default(T)!;
        }

        try
        {
            return JsonSerializer.Deserialize<T>(value)!;
        }
        catch
        {
            return default(T)!;
        }
    }

    public T GetValue<T>(string key, T defaultValue)
    {
        var value = _configuration[key];
        if (string.IsNullOrEmpty(value))
        {
            return defaultValue;
        }

        try
        {
            return JsonSerializer.Deserialize<T>(value)!;
        }
        catch
        {
            return defaultValue;
        }
    }
}
