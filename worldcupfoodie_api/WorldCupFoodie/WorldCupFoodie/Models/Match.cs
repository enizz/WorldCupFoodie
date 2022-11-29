using System;
using System.Collections.Generic;

namespace WorldCupFoodie.Models;

public partial class Match
{
    public int Id { get; set; }

    public string? Team1 { get; set; }

    public string? Team2 { get; set; }

    public DateTime? MatchDate { get; set; }

    public virtual ICollection<GroceryList> GroceryLists { get; } = new List<GroceryList>();
}
