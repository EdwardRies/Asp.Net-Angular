module app {
    angular.module("MyAngularApp", ["ngRoute"]);    

    var app = angular.module("MyAngularApp");

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "/app/search/index.html",
                controller: "SearchController"
            })
            .when("/user/:username", {
                templateUrl: "/app/search/user.html",
                controller: "UserController"
            })
            .when("/product", {
                templateUrl: "/app/product/index.html",
                controller: "ProductController"
            })
            .when("/product/addProduct", {
                templateUrl: "/app/product/addProduct.html",
                controller: "ProductController"
            })
            .when("/modifyProduct/:productGUID", {
                templateUrl: "/app/product/modifyProduct.html",
                controller: "ProductController"
            })
            .when("/error", {
                templateUrl: "/app/error/index.html",
                controller: "ErrorController"
            })
            .otherwise({ redirectTo: "/error" });
    });
}