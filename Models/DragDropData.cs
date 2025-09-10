namespace CFDTrollo.Models;

public class CardMoveData
{
    public string CardId { get; set; } = string.Empty;
    public string SourceListId { get; set; } = string.Empty;
    public string TargetListId { get; set; } = string.Empty;
    public int SourceIndex { get; set; }
    public int TargetIndex { get; set; }
}

public class CardReorderData
{
    public string CardId { get; set; } = string.Empty;
    public string ListId { get; set; } = string.Empty;
    public int OldIndex { get; set; }
    public int NewIndex { get; set; }
}

public class ListReorderData
{
    public string ListId { get; set; } = string.Empty;
    public int OldIndex { get; set; }
    public int NewIndex { get; set; }
}
