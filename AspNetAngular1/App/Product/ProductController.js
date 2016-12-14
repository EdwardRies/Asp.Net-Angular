/// <reference path="../app.ts" />
var MyApp;
(function (MyApp) {
    "use strict";
    var ProductController = (function () {
        function ProductController($scope, ModalService, ProductsService) {
            this.$scope = $scope;
            this.ModalService = ModalService;
            this.ProductsService = ProductsService;
            this.Mode = MyApp.Mode[MyApp.Mode.Modify];
            this.order = "+";
            this.SortColumn = "+ProductName";
        }
        ProductController.prototype.ProductList = function () {
            var _this = this;
            this.ProductsService.GetProducts()
                .then(function (data) {
                _this.Products = data;
                _this.Error = null;
            }, this.onError);
            this.Mode = "List";
            this.Modal = this.ModalService.Close(this.Modal);
        };
        ;
        ProductController.prototype.AddProduct = function () {
            this.Mode = "Add";
            this.Product = new MyApp.Domain.Product();
            this.Modal = this.ModalService.Open(this.$scope, "Product/Includes/AddProduct.html");
        };
        ;
        ProductController.prototype.AddProductSubmit = function () {
            var _this = this;
            this.ProductsService.AddProduct(this.Product)
                .then(function () {
                _this.ProductList();
            }, this.onError);
            this.Modal = this.ModalService.Close(this.Modal);
        };
        ;
        ProductController.prototype.ModifyProduct = function (productGUID) {
            this.Mode = "Modify";
            this.Product = this.Products.filter(function (product) { return product.ProductGUID == productGUID; })[0];
            this.Modal = this.ModalService.Open(this.$scope, "Product/Includes/ModifyProduct.html");
            //this.ProductsService.GetProduct(productGUID)
            //    .then((data) => {
            //        this.Mode = "Modify";
            //        this.Product = data;
            //        this.Modal = this.ModalService.Open(this.$scope, "Product/Includes/ModifyProduct.html");
            //    }, this.onError);
        };
        ;
        ProductController.prototype.ModifyProductSubmit = function () {
            var _this = this;
            this.ProductsService.UpdateProduct(this.Product)
                .then(function () {
                _this.ProductList();
            }, this.onError);
            this.Modal = this.ModalService.Close(this.Modal);
        };
        ;
        ProductController.prototype.DeleteProduct = function (productGUID) {
            var _this = this;
            this.ProductsService.DeleteProduct(productGUID)
                .then(function () {
                _this.ProductList();
            }, this.onError);
        };
        ;
        ProductController.prototype.onError = function (reason) {
            this.Error = reason;
        };
        ProductController.prototype.SortOrder = function (columnName) {
            if ((this.order + columnName) == this.SortColumn) {
                this.order = this.order == "+" ? "-" : "+";
            }
            this.SortColumn = (this.order + columnName);
        };
        ;
        ProductController.$inject = ["$scope", "ModalService", "ProductsService"];
        ProductController.Dependencies = ["$scope", "ModalService", "ProductsService", ProductController];
        return ProductController;
    }());
    angular.module("MyAngularApp")
        .controller("ProductController", ProductController.Dependencies);
})(MyApp || (MyApp = {}));
//# sourceMappingURL=ProductController.js.map