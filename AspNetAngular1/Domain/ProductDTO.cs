using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AspNetAngular1.Domain
{
    public class ProductDTO
    {
        public ProductDTO()
        {
            this.ProductGUID = Guid.Empty;
        }

        public int ProductID { get; set; }

        public Guid ProductGUID { get; set; }

        [Required]
        [StringLength(50)]
        public string ProductName { get; set; }

        public int Quantity { get; set; }
    }
}