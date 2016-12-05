// Angular Controller
(function () {
    "use strict";

    var ProductController = function ($scope, $routeParams, $location, ProductsService) {

        $scope.product = {};

        $scope.GetProducts = function () {
            ProductsService.GetProducts()
                .then(function (data) {
                    $scope.products = data;
                }, onError);
        };

        $scope.GetProduct = function (productGUID) {
            ProductsService.GetProducts(productGUID)
                .then(function () {
                    $scope.GetProducts();
                }, onError);
        };

        $scope.GotoProduct = function () {
            $location.path("/product/");
        };

        $scope.AddProductForm = function () {
            $location.path("/product/addProduct/");
        };

        $scope.AddProductSubmit = function () {
            ProductsService.AddProduct($scope.Product)
                .then(function () {
                    $scope.GotoProduct();
                }, onError);
        };

        $scope.ModifyProduct = function () {
            var productGUID = $routeParams.productGUID;
            ProductsService.GetProduct(productGUID)
                .then(function (data) {
                    $scope.product = data;
                }, onError);            
        };

        $scope.ModifyProductForm = function (productGUID) { 
            $scope.productGUID = productGUID;           
            $location.path("/modifyProduct/" + productGUID);
        };

        $scope.ModifyProductSubmit = function () {
            ProductsService.UpdateProduct($scope.product)
                .then(function () {
                    $scope.GotoProduct();
                }, onError);
        };

        $scope.AddProduct = function (product) {
            ProductsService.AddProduct(product)
                .then(function () {
                    $scope.GetProducts();
                }, onError);
        };

        $scope.DeleteProduct = function(productGUID) {
            ProductsService.DeleteProduct(productGUID)
                .then(function () {
                    $scope.GetProducts();
                }, onError);
        };
        
        var onError = function (reason) {
            $scope.error = reason;
        };

        var order = "+";
        $scope.sortColumn = "+ProductName";

        $scope.sortOrder = function (columnName) {
            if ((order + columnName) == $scope.sortColumn) {
                order = order == "+" ? "-" : "+";
            }

            $scope.sortColumn = (order + columnName);
        };
        
    };

    var app = angular.module("MyAngularApp");

    app.controller("ProductController", ["$scope", "$routeParams", "$location", "ProductsService", ProductController]);

} ());