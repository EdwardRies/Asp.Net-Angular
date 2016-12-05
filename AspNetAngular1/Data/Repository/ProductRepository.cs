namespace AspNetAngular1.Data.Repository
{
    using AspNetAngular1.Data.Entity;
    using AspNetAngular1.Data.Repository.Interfaces;
    using AspNetAngular1.Domain;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.SqlClient;
    using System.Linq;

    public class ProductRepository : IProductRepository
    {
        public ProductRepository()
        {
            // Default Constructor
        }

        public List<ProductDTO> GetProducts()
        {
            using (var context = new MyEntity())
            {
                return context.Products.ToList().Select(o => ToProductDTO(o)).ToList();
            }
        }

        public ProductDTO GetProduct(Guid productGUID)
        {
            using (var context = new MyEntity())
            {
                var product = context.Products.SingleOrDefault(o => o.ProductGUID == productGUID);

                return product != null ? ToProductDTO(product) : new ProductDTO();
            }
        }

        public bool DeleteProduct(Guid productGUID)
        {
            using (var context = new MyEntity())
            {
                try
                {
                    var product = context.Products.SingleOrDefault(o => o.ProductGUID == productGUID);

                    if (product != null)
                    {
                        context.Entry(product).State = EntityState.Deleted;

                        context.SaveChanges();
                    }                    
                }
                catch (SqlException ex)
                {
                    // Log exception here
                    return false;
                }
            }

            return true;
        }

        public ProductDTO AddProduct(ProductDTO productDTO)
        {
            if (productDTO == null)
            {
                return new ProductDTO();
            }

            var newProduct = ToProduct(productDTO);

            using (var context = new MyEntity())
            {
                try
                {
                    var currentProduct = context.Products.SingleOrDefault(o => o.ProductGUID == productDTO.ProductGUID);

                    if (currentProduct == null && productDTO != null && !string.IsNullOrWhiteSpace(productDTO.ProductName))
                    {
                        newProduct.ProductGUID = Guid.NewGuid();
                        context.Entry(newProduct).State = EntityState.Added;
                        context.SaveChanges();
                    }
                    else
                    {
                        return new ProductDTO();
                    }
                }
                catch (SqlException ex)
                {
                    // Log exception here
                    return new ProductDTO();
                }
            }

            return ToProductDTO(newProduct);
        }

        public bool UpdateProduct(ProductDTO productDTO)
        {
            if (productDTO == null || productDTO.ProductGUID == Guid.Empty)
            {
                return false;
            }

            using (var context = new MyEntity())
            {
                try
                {
                    var currentProduct = context.Products.SingleOrDefault(o => o.ProductGUID == productDTO.ProductGUID);

                    if (currentProduct == null)
                    {
                        // Log 'Product Not Found' here
                        return false;
                    }

                    currentProduct.ProductName = productDTO.ProductName;
                    currentProduct.Quantity = productDTO.Quantity;                    

                    context.Entry(currentProduct).State = EntityState.Modified;
                    context.SaveChanges();
                }
                catch (SqlException ex)
                {
                    // Log 'SqlException' here
                    return false;
                }
            }

            return true;
        }

        private static ProductDTO ToProductDTO(Product product)
        {

            return new ProductDTO()
            {
                ProductID = product.ProductID,
                ProductGUID = product.ProductGUID,
                ProductName = product.ProductName,
                Quantity = product.Quantity
            };
        }

        private static Product ToProduct(ProductDTO productDTO)
        {
            return new Product()
            {
                ProductID = productDTO.ProductID,
                ProductGUID = productDTO.ProductGUID,
                ProductName = productDTO.ProductName,
                Quantity = productDTO.Quantity
            };
        }

    }
}