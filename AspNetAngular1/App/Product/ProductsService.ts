//import { IProduct, Product } from './Product';

namespace MyApp {
    "use strict";
    
    export interface IProductsService {
        GetProducts(): angular.IPromise<Domain.IProduct[]>;
        GetProduct(productGUID: string): angular.IPromise<Domain.IProduct>;
        AddProduct(product: Domain.IProduct): angular.IPromise<any>;
        UpdateProduct(product: Domain.IProduct): angular.IPromise<Domain.IProduct>;
        DeleteProduct(productGUID: string): angular.IPromise<any>;
    }

    export class ProductsService implements IProductsService {

        static $inject = ["$http", "$log"];
        constructor(private $http: angular.IHttpService,
            private $log: angular.ILogService) { }

        static Dependencies = ["$http", "$log", ProductsService];

        private apiProductsUrl: string = "/api/products/";
        private config: any = {
            headers: {                
            }
        }

        public GetProducts() {
            this.$log.info("Http_Get: " + this.apiProductsUrl);
            return this.$http.get(this.apiProductsUrl, this.config)
                .then(response => {
                    return response.data;
                });
        };

        public GetProduct(productGUID: string) {
            var url = this.apiProductsUrl + productGUID;
            this.$log.info("Http_Get: " + url);
            return this.$http.get(url, this.config)
                .then(function (response) {
                    return response.data;
                });
        };

        public AddProduct(product: Domain.IProduct) {
            this.$log.info("Http_Post: " + this.apiProductsUrl);
            return this.$http.post(this.apiProductsUrl, product, this.config)
                .then(function (response) {
                    return response.data;
                });
        };

        public UpdateProduct(product: Domain.IProduct) {
            this.$log.info("Http_Put: " + this.apiProductsUrl);
            return this.$http.put(this.apiProductsUrl, product, this.config)
                .then(function (response) {
                    return response.data;
                });
        };

        public DeleteProduct(productGUID: string) {
            var url = this.apiProductsUrl + productGUID;
            this.$log.info("Http_Delete: " + url);
            return this.$http.delete(url, this.config)
                .then(function (response) {
                    return response.data;
                });
        };
    }

    angular.module("MyAngularApp")
        .service("ProductsService", ProductsService.Dependencies);
}