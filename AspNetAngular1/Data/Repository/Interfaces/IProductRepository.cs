using System;
using System.Collections.Generic;
using AspNetAngular1.Domain;

namespace AspNetAngular1.Data.Repository.Interfaces
{
    public interface IProductRepository
    {
        List<ProductDTO> GetProducts();

        ProductDTO GetProduct(Guid productGUID);

        bool DeleteProduct(Guid productGUID);

        ProductDTO AddProduct(ProductDTO productDTO);

        bool UpdateProduct(ProductDTO productDTO);

    }
}