namespace CFDTrollo.Models;

public class List
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Color { get; set; } = "bg-blue-500";
    public List<Card> Cards { get; set; } = new();
}
