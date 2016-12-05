namespace AspNetAngular1.Data.Entity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Product
    {
        public int ProductID { get; set; }

        public Guid ProductGUID { get; set; }

        [Required]
        [StringLength(50)]
        public string ProductName { get; set; }

        public int Quantity { get; set; }
    }
}
