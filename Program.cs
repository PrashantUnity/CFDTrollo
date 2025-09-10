using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using CFDTrollo;
using CFDTrollo.Services;
using CFDTrollo.Interfaces;
using CFDTrollo.Configuration;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

// Configure HttpClient
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

// Register configuration
builder.Services.Configure<AppSettings>(options => 
    builder.Configuration.GetSection(AppSettings.SectionName).Bind(options));

// Register services with interfaces
builder.Services.AddScoped<IConfigurationService, ConfigurationService>();
builder.Services.AddScoped<ILoggerService, LoggerService>();
builder.Services.AddScoped<ILocalStorageService, LocalStorageService>();
builder.Services.AddScoped<IDragDropService, DragDropService>();
builder.Services.AddScoped<IWorkspaceService, WorkspaceService>();

await builder.Build().RunAsync();
