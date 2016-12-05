// Custom Angular Service
(function () {
    "use strict";

    var ProductsService = function ($http, $log) {
        var apiProductsUrl = "/api/products/";

        var config = {
            headers: {                
            }
        }

        var getProducts = function () {
            $log.info("Http_Get: " + apiProductsUrl);
            return $http.get(apiProductsUrl, config)
                .then(function (response) {
                    return response.data;
                });
        };

        var getProduct = function (productGUID) {
            var url = apiProductsUrl + productGUID;
            $log.info("Http_Get: " + url);
            return $http.get(url, config)
                .then(function (response) {
                    return response.data;
                });
        };

        var addProduct = function (product) {
            $log.info("Http_Post: " + apiProductsUrl);
            return $http.post(apiProductsUrl, product, config)
                .then(function (response) {
                    return response.data;
                });
        };

        var updateProduct = function (product) {
            $log.info("Http_Put: " + apiProductsUrl);
            return $http.put(apiProductsUrl, product, config)
                .then(function (response) {
                    return response.data;
                });
        };

        var deleteProduct = function (productGUID) {
            var url = apiProductsUrl + productGUID;
            $log.info("Http_Delete: " + url);
            return $http.delete(url, config)
                .then(function (response) {
                    return response.data;
                });
        };

        return {
            GetProducts: getProducts,
            GetProduct: getProduct,            
            AddProduct: addProduct,
            UpdateProduct: updateProduct,
            DeleteProduct: deleteProduct
        };
    };

    var module = angular.module("MyAngularApp");

    module.factory("ProductsService", ["$http", "$log", ProductsService]);
} ());