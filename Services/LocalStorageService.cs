using Microsoft.JSInterop;
using System.Text.Json;
using CFDTrollo.Interfaces;
using CFDTrollo.Common;
using CFDTrollo.Constants;

namespace CFDTrollo.Services;

/// <summary>
/// Local storage service implementation
/// </summary>
public class LocalStorageService : BaseService, ILocalStorageService
{
    private readonly IJSRuntime _jsRuntime;

    public LocalStorageService(IJSRuntime jsRuntime, ILoggerService logger) : base(logger)
    {
        _jsRuntime = jsRuntime ?? throw new ArgumentNullException(nameof(jsRuntime));
    }

    public async Task<T?> GetItemAsync<T>(string key)
    {
        return await ExecuteWithErrorHandlingAsync(async () =>
        {
            try
            {
                var json = await _jsRuntime.InvokeAsync<string>("localStorage.getItem", key);
                return json == null ? default : JsonSerializer.Deserialize<T>(json);
            }
            catch (Exception ex)
            {
                Logger.LogError($"Failed to get item from localStorage with key: {key}", ex);
                return default;
            }
        }, $"GetItemAsync<{typeof(T).Name}>", default(T));
    }

    public async Task SetItemAsync<T>(string key, T value)
    {
        await ExecuteWithErrorHandlingAsync(async () =>
        {
            try
            {
                var json = JsonSerializer.Serialize(value);
                await _jsRuntime.InvokeVoidAsync("localStorage.setItem", key, json);
            }
            catch (Exception ex)
            {
                Logger.LogError($"Failed to set item in localStorage with key: {key}", ex);
                throw;
            }
        }, $"SetItemAsync<{typeof(T).Name}>");
    }

    public async Task RemoveItemAsync(string key)
    {
        await ExecuteWithErrorHandlingAsync(async () =>
        {
            try
            {
                await _jsRuntime.InvokeVoidAsync("localStorage.removeItem", key);
            }
            catch (Exception ex)
            {
                Logger.LogError($"Failed to remove item from localStorage with key: {key}", ex);
                throw;
            }
        }, "RemoveItemAsync");
    }

    public async Task ClearAsync()
    {
        await ExecuteWithErrorHandlingAsync(async () =>
        {
            try
            {
                await _jsRuntime.InvokeVoidAsync("localStorage.clear");
            }
            catch (Exception ex)
            {
                Logger.LogError("Failed to clear localStorage", ex);
                throw;
            }
        }, "ClearAsync");
    }

    public async Task<bool> ContainsKeyAsync(string key)
    {
        return await ExecuteWithErrorHandlingAsync(async () =>
        {
            try
            {
                var result = await _jsRuntime.InvokeAsync<string>("localStorage.getItem", key);
                return result != null;
            }
            catch (Exception ex)
            {
                Logger.LogError($"Failed to check if key exists in localStorage: {key}", ex);
                return false;
            }
        }, "ContainsKeyAsync", false);
    }
}
