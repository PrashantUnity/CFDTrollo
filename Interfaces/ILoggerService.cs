namespace CFDTrollo.Interfaces;

/// <summary>
/// Interface for logging operations
/// </summary>
public interface ILoggerService
{
    /// <summary>
    /// Logs an information message
    /// </summary>
    /// <param name="message">Message to log</param>
    void LogInformation(string message);

    /// <summary>
    /// Logs a warning message
    /// </summary>
    /// <param name="message">Message to log</param>
    void LogWarning(string message);

    /// <summary>
    /// Logs an error message
    /// </summary>
    /// <param name="message">Message to log</param>
    void LogError(string message);

    /// <summary>
    /// Logs an error message with exception
    /// </summary>
    /// <param name="message">Message to log</param>
    /// <param name="exception">Exception to log</param>
    void LogError(string message, Exception exception);

    /// <summary>
    /// Logs a debug message
    /// </summary>
    /// <param name="message">Message to log</param>
    void LogDebug(string message);
}
