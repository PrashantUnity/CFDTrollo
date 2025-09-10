using CFDTrollo.Interfaces;
using CFDTrollo.Constants;

namespace CFDTrollo.Services;

/// <summary>
/// Console-based logger service implementation
/// </summary>
public class LoggerService : ILoggerService
{
    private readonly bool _enableDebugMode;

    public LoggerService(IConfigurationService configurationService)
    {
        var appSettings = configurationService.GetAppSettings();
        _enableDebugMode = appSettings.EnableDebugMode;
    }

    public void LogInformation(string message)
    {
        Console.WriteLine($"{ApplicationConstants.LogPrefixes.Info} {message}");
    }

    public void LogWarning(string message)
    {
        Console.WriteLine($"{ApplicationConstants.LogPrefixes.Warning} {message}");
    }

    public void LogError(string message)
    {
        Console.WriteLine($"{ApplicationConstants.LogPrefixes.Error} {message}");
    }

    public void LogError(string message, Exception exception)
    {
        Console.WriteLine($"{ApplicationConstants.LogPrefixes.Error} {message}");
        Console.WriteLine($"{ApplicationConstants.LogPrefixes.Error} Exception: {exception.Message}");
        if (_enableDebugMode)
        {
            Console.WriteLine($"{ApplicationConstants.LogPrefixes.Error} Stack Trace: {exception.StackTrace}");
        }
    }

    public void LogDebug(string message)
    {
        if (_enableDebugMode)
        {
            Console.WriteLine($"{ApplicationConstants.LogPrefixes.Info} DEBUG: {message}");
        }
    }
}
