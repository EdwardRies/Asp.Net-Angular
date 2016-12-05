using AspNetAngular1.Data.Repository;
using AspNetAngular1.Data.Repository.Interfaces;
using AspNetAngular1.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AspNetAngular1.Controllers
{
    public class ProductsController : ApiControllerBase
    {
        private IProductRepository productRepository { get; set; }

        public ProductsController() : this(new ProductRepository())
        {
            // Default Constructor
        }

        public ProductsController(IProductRepository productRepository)
        {
            this.productRepository = productRepository;
        }

        // GET: api/Product
        public IEnumerable<ProductDTO> Get()
        {
            return this.productRepository.GetProducts().OrderBy(o => o.ProductName);
        }

        // GET: api/Product/Apple
        public ProductDTO Get(Guid Id)
        {
            return this.productRepository.GetProduct(Id);
        }
        
        public IHttpActionResult Delete(Guid Id)
        {
            var deleted = this.productRepository.DeleteProduct(Id);

            return Ok(deleted);
        }

        public IHttpActionResult Post(ProductDTO productDTO)
        {
            var newProductDTO = this.productRepository.AddProduct(productDTO);

            return Content(newProductDTO.ProductGUID != Guid.Empty 
                ? HttpStatusCode.OK 
                : HttpStatusCode.BadRequest, newProductDTO.ProductGUID);
        }

        public IHttpActionResult Put(ProductDTO productDTO)
        {
            var updated = this.productRepository.UpdateProduct(productDTO);

            return Content(updated 
                ? HttpStatusCode.OK 
                : HttpStatusCode.BadRequest, updated);
        }
    }
}
