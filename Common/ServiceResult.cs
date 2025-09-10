namespace CFDTrollo.Common;

/// <summary>
/// Generic service result wrapper for operations that can succeed or fail
/// </summary>
/// <typeparam name="T">Type of the result data</typeparam>
public class ServiceResult<T>
{
    /// <summary>
    /// Indicates if the operation was successful
    /// </summary>
    public bool IsSuccess { get; set; }

    /// <summary>
    /// The result data
    /// </summary>
    public T? Data { get; set; }

    /// <summary>
    /// Error message if the operation failed
    /// </summary>
    public string? ErrorMessage { get; set; }

    /// <summary>
    /// Exception if the operation failed
    /// </summary>
    public Exception? Exception { get; set; }

    /// <summary>
    /// Creates a successful result
    /// </summary>
    /// <param name="data">Result data</param>
    /// <returns>Successful service result</returns>
    public static ServiceResult<T> Success(T data)
    {
        return new ServiceResult<T>
        {
            IsSuccess = true,
            Data = data
        };
    }

    /// <summary>
    /// Creates a failed result with error message
    /// </summary>
    /// <param name="errorMessage">Error message</param>
    /// <returns>Failed service result</returns>
    public static ServiceResult<T> Failure(string errorMessage)
    {
        return new ServiceResult<T>
        {
            IsSuccess = false,
            ErrorMessage = errorMessage
        };
    }

    /// <summary>
    /// Creates a failed result with exception
    /// </summary>
    /// <param name="exception">Exception that occurred</param>
    /// <returns>Failed service result</returns>
    public static ServiceResult<T> Failure(Exception exception)
    {
        return new ServiceResult<T>
        {
            IsSuccess = false,
            ErrorMessage = exception.Message,
            Exception = exception
        };
    }

    /// <summary>
    /// Creates a failed result with error message and exception
    /// </summary>
    /// <param name="errorMessage">Error message</param>
    /// <param name="exception">Exception that occurred</param>
    /// <returns>Failed service result</returns>
    public static ServiceResult<T> Failure(string errorMessage, Exception exception)
    {
        return new ServiceResult<T>
        {
            IsSuccess = false,
            ErrorMessage = errorMessage,
            Exception = exception
        };
    }
}

/// <summary>
/// Non-generic service result for operations that don't return data
/// </summary>
public class ServiceResult : ServiceResult<object>
{
    /// <summary>
    /// Creates a successful result
    /// </summary>
    /// <returns>Successful service result</returns>
    public static ServiceResult Success()
    {
        return new ServiceResult
        {
            IsSuccess = true
        };
    }

    /// <summary>
    /// Creates a failed result with error message
    /// </summary>
    /// <param name="errorMessage">Error message</param>
    /// <returns>Failed service result</returns>
    public static new ServiceResult Failure(string errorMessage)
    {
        return new ServiceResult
        {
            IsSuccess = false,
            ErrorMessage = errorMessage
        };
    }

    /// <summary>
    /// Creates a failed result with exception
    /// </summary>
    /// <param name="exception">Exception that occurred</param>
    /// <returns>Failed service result</returns>
    public static new ServiceResult Failure(Exception exception)
    {
        return new ServiceResult
        {
            IsSuccess = false,
            ErrorMessage = exception.Message,
            Exception = exception
        };
    }

    /// <summary>
    /// Creates a failed result with error message and exception
    /// </summary>
    /// <param name="errorMessage">Error message</param>
    /// <param name="exception">Exception that occurred</param>
    /// <returns>Failed service result</returns>
    public static new ServiceResult Failure(string errorMessage, Exception exception)
    {
        return new ServiceResult
        {
            IsSuccess = false,
            ErrorMessage = errorMessage,
            Exception = exception
        };
    }
}
