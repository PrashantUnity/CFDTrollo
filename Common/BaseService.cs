using CFDTrollo.Interfaces;

namespace CFDTrollo.Common;

/// <summary>
/// Base service class providing common functionality
/// </summary>
public abstract class BaseService
{
    protected readonly ILoggerService Logger;

    protected BaseService(ILoggerService logger)
    {
        Logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    /// <summary>
    /// Executes an operation with error handling and logging
    /// </summary>
    /// <typeparam name="T">Return type</typeparam>
    /// <param name="operation">Operation to execute</param>
    /// <param name="operationName">Name of the operation for logging</param>
    /// <param name="defaultValue">Default value to return on error</param>
    /// <returns>Result of the operation or default value</returns>
    protected async Task<T> ExecuteWithErrorHandlingAsync<T>(
        Func<Task<T>> operation, 
        string operationName, 
        T defaultValue = default!)
    {
        try
        {
            Logger.LogDebug($"Starting {operationName}");
            var result = await operation();
            Logger.LogDebug($"Completed {operationName}");
            return result;
        }
        catch (Exception ex)
        {
            Logger.LogError($"Error in {operationName}", ex);
            return defaultValue;
        }
    }

    /// <summary>
    /// Executes an operation with error handling and logging (void return)
    /// </summary>
    /// <param name="operation">Operation to execute</param>
    /// <param name="operationName">Name of the operation for logging</param>
    protected async Task ExecuteWithErrorHandlingAsync(
        Func<Task> operation, 
        string operationName)
    {
        try
        {
            Logger.LogDebug($"Starting {operationName}");
            await operation();
            Logger.LogDebug($"Completed {operationName}");
        }
        catch (Exception ex)
        {
            Logger.LogError($"Error in {operationName}", ex);
        }
    }
}
