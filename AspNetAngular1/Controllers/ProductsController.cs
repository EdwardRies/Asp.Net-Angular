using AspNetAngular1.Data.Repository;
using AspNetAngular1.Data.Repository.Interfaces;
using AspNetAngular1.Domain;
using System;
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
        public IHttpActionResult Get()
        {
            var productDTOs = this.productRepository.GetProducts().OrderBy(o => o.ProductName);

            return Content(HttpStatusCode.OK, productDTOs);
        }

        // GET: api/Product/{Guid}
        public ProductDTO Get(Guid Id)
        {
            return this.productRepository
                .GetProduct(Id);
        }

        public HttpResponseMessage Delete(Guid Id)
        {
            return Request.CreateResponse(HttpStatusCode.OK, 
                this.productRepository.DeleteProduct(Id));
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
