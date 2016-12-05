namespace AspNetAngular1.Data.Entity
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class MyEntity : DbContext
    {
        public MyEntity()
            : base("name=MyEntity")
        {
        }

        public virtual DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .Property(e => e.ProductName)
                .IsUnicode(false);
        }
    }
}
