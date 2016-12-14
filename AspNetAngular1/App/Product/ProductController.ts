/// <reference path="../app.ts" />


namespace MyApp {
    "use strict";

    export interface IProductScope extends ng.IScope {
        ProductList: () => void;
        AddProduct: () => void;
        AddProductSubmit: () => void;
        ModifyProduct: (productGUID: string) => void;
        ModifyProductSubmit: () => void;
        DeleteProduct: (productGUID: string) => void;       
        Mode: string;
        Products: Domain.IProduct[];
        Product: Domain.IProduct;
        SortColumn: string;
        SortOrder: string; 
        Modal: angular.ui.bootstrap.IModalServiceInstance;
        Error: string;
        Dependencies: any[];
    }

    class ProductController {
        
        static $inject = ["$scope", "ModalService", "ProductsService"];
        constructor(private $scope: IProductScope,
            private ModalService: IModalService,
            private ProductsService: IProductsService)
        {
        }

        public static Dependencies:any[] = ["$scope", "ModalService", "ProductsService", ProductController];

        public Mode: string = Mode[MyApp.Mode.Modify];
        public Product: Domain.IProduct;
        public Products: Domain.IProduct[];
        public Modal: angular.ui.bootstrap.IModalServiceInstance;
        public Error: string;
        
        public ProductList():void {
            this.ProductsService.GetProducts()
                .then((data) => {
                    this.Products = data;
                    this.Error = null;
                }, this.onError);
            this.Mode = "List";
            this.Modal = this.ModalService.Close(this.Modal);
        };

        public AddProduct():void {
            this.Mode = "Add";
            this.Product = new Domain.Product();
            this.Modal = this.ModalService.Open(this.$scope, "Product/Includes/AddProduct.html");
        };

        public AddProductSubmit():void {
            this.ProductsService.AddProduct(this.Product)
                .then(() => {
                    this.ProductList();
                }, this.onError);
            this.Modal = this.ModalService.Close(this.Modal);
        };

        public ModifyProduct(productGUID: string): void {
            this.Mode = "Modify";
            this.Product = this.Products.filter(product => product.ProductGUID == productGUID)[0];
            this.Modal = this.ModalService.Open(this.$scope, "Product/Includes/ModifyProduct.html");

            //this.ProductsService.GetProduct(productGUID)
            //    .then((data) => {
            //        this.Mode = "Modify";
            //        this.Product = data;
            //        this.Modal = this.ModalService.Open(this.$scope, "Product/Includes/ModifyProduct.html");
            //    }, this.onError);
        };

        public ModifyProductSubmit(): void {
            this.ProductsService.UpdateProduct(this.Product)
                .then(() => {
                    this.ProductList();
                }, this.onError);
            this.Modal = this.ModalService.Close(this.Modal);
        };

        public DeleteProduct(productGUID: string): void {
            this.ProductsService.DeleteProduct(productGUID)
                .then(() => {
                    this.ProductList();
                }, this.onError);
        };
        
        private onError(reason) {
            this.Error = reason;
        }
        
        private order: string = "+";
        public SortColumn: string = "+ProductName";
        public SortOrder(columnName: string): void {
            if ((this.order + columnName) == this.SortColumn) {
                this.order = this.order == "+" ? "-" : "+";
            }

            this.SortColumn = (this.order + columnName);
        };

    }

    angular.module("MyAngularApp")
        .controller("ProductController", ProductController.Dependencies);

}