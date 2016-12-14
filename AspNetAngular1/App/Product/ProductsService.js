//import { IProduct, Product } from './Product';
var MyApp;
(function (MyApp) {
    "use strict";
    var ProductsService = (function () {
        function ProductsService($http, $log) {
            this.$http = $http;
            this.$log = $log;
            this.apiProductsUrl = "/api/products/";
            this.config = {
                headers: {}
            };
        }
        ProductsService.prototype.GetProducts = function () {
            this.$log.info("Http_Get: " + this.apiProductsUrl);
            return this.$http.get(this.apiProductsUrl, this.config)
                .then(function (response) {
                return response.data;
            });
        };
        ;
        ProductsService.prototype.GetProduct = function (productGUID) {
            var url = this.apiProductsUrl + productGUID;
            this.$log.info("Http_Get: " + url);
            return this.$http.get(url, this.config)
                .then(function (response) {
                return response.data;
            });
        };
        ;
        ProductsService.prototype.AddProduct = function (product) {
            this.$log.info("Http_Post: " + this.apiProductsUrl);
            return this.$http.post(this.apiProductsUrl, product, this.config)
                .then(function (response) {
                return response.data;
            });
        };
        ;
        ProductsService.prototype.UpdateProduct = function (product) {
            this.$log.info("Http_Put: " + this.apiProductsUrl);
            return this.$http.put(this.apiProductsUrl, product, this.config)
                .then(function (response) {
                return response.data;
            });
        };
        ;
        ProductsService.prototype.DeleteProduct = function (productGUID) {
            var url = this.apiProductsUrl + productGUID;
            this.$log.info("Http_Delete: " + url);
            return this.$http.delete(url, this.config)
                .then(function (response) {
                return response.data;
            });
        };
        ;
        ProductsService.$inject = ["$http", "$log"];
        ProductsService.Dependencies = ["$http", "$log", ProductsService];
        return ProductsService;
    }());
    MyApp.ProductsService = ProductsService;
    angular.module("MyAngularApp")
        .service("ProductsService", ProductsService.Dependencies);
})(MyApp || (MyApp = {}));
//# sourceMappingURL=ProductsService.js.map