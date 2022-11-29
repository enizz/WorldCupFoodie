using System;
using System.Collections.Generic;

namespace WorldCupFoodie.Models;

public partial class GroceryList
{
    public int Id { get; set; }

    public string? Ingredients { get; set; }

    public int? MatchId { get; set; }

    public virtual Match? Match { get; set; }
}
