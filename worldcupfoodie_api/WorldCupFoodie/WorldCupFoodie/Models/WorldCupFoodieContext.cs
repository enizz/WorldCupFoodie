using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WorldCupFoodie.Models;

public partial class WorldCupFoodieContext : DbContext
{
    public WorldCupFoodieContext()
    {
    }

    public WorldCupFoodieContext(DbContextOptions<WorldCupFoodieContext> options)
        : base(options)
    {
    }

    public virtual DbSet<GroceryList> GroceryLists { get; set; }

    public virtual DbSet<Match> Matches { get; set; }

    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)

    //    => optionsBuilder.UseSqlServer("Data Source=(LocalDb)\\MSSQLLocalDB;Initial Catalog=WorldCupFoodie;Integrated Security=SSPI;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<GroceryList>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__GroceryL__3214EC07C100090C");

            entity.ToTable("GroceryList");

            entity.Property(e => e.Ingredients).HasMaxLength(500);

            entity.HasOne(d => d.Match).WithMany(p => p.GroceryLists)
                .HasForeignKey(d => d.MatchId)
                .HasConstraintName("FK__GroceryLi__Match__267ABA7A");
        });

        modelBuilder.Entity<Match>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Matches__3214EC07D77ED072");

            entity.Property(e => e.MatchDate).HasColumnType("datetime");
            entity.Property(e => e.Team1).HasMaxLength(30);
            entity.Property(e => e.Team2).HasMaxLength(30);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
