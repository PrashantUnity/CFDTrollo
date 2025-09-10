namespace CFDTrollo.Models;

public class Card
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public string? DueDate { get; set; }
    public List<Label> Labels { get; set; } = new();
    public bool IsComplete { get; set; }
    public string? BackgroundColor { get; set; }
}
