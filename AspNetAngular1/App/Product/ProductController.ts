// Angular Controller
(function () {
    "use strict";

    var ProductController = function ($scope, ModalService, ProductsService) {

        $scope.Mode = "List";
        $scope.Product = {};

        $scope.ProductList = function () {
            ProductsService.GetProducts()
                .then(function (data) {
                    $scope.Products = data;
                    $scope.Error = null;
                }, onError);
            $scope.Mode = "List";
            $scope.modal = ModalService.Close($scope.modal);
        };

        $scope.AddProduct = function () {
            $scope.Mode = "Add";
            $scope.Product = {};
            $scope.modal = ModalService.Open($scope, "Product/Includes/AddProduct.html");
        };

        $scope.AddProductSubmit = function () {
            ProductsService.AddProduct($scope.Product)
                .then(function () {
                    $scope.ProductList();
                }, onError);
            $scope.modal = ModalService.Close($scope.modal);
        };

        $scope.ModifyProduct = function (productGUID) {
            ProductsService.GetProduct(productGUID)
                .then(function (data) {
                    $scope.Mode = "Modify";
                    $scope.Product = data;
                    $scope.modal = ModalService.Open($scope, "Product/Includes/ModifyProduct.html");
                }, onError);            
        };

        $scope.ModifyProductSubmit = function () {
            ProductsService.UpdateProduct($scope.Product)
                .then(function () {
                    $scope.ProductList();
                }, onError);
            $scope.modal = ModalService.Close($scope.modal);
        };

        $scope.DeleteProduct = function(productGUID) {
            ProductsService.DeleteProduct(productGUID)
                .then(function () {
                    $scope.ProductList();
                }, onError);
        };
        
        var onError = function (reason) {
            $scope.Error = reason;
        };

        var order = "+";
        $scope.SortColumn = "+ProductName";
        $scope.SortOrder = function (columnName) {
            if ((order + columnName) == $scope.SortColumn) {
                order = order == "+" ? "-" : "+";
            }

            $scope.SortColumn = (order + columnName);
        };
        
    };
    
    angular.module("MyAngularApp")
        .controller("ProductController", ["$scope", "ModalService", "ProductsService", ProductController]);

} ());