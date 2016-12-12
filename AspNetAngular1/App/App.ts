module app {
    angular.module("MyAngularApp", ["ngRoute", "ui.bootstrap"]);

    var app = angular.module("MyAngularApp");

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "GitHub/index.html",
            })
            .when("/user/:username", {
                templateUrl: "GitHub/user.html",
            })
            .when("/product", {
                templateUrl: "product/index.html",
            })
            .when("/product/addProduct", {
                templateUrl: "product/addProduct.html",
            })
            .when("/modifyProduct/:productGUID", {
                templateUrl: "product/modifyProduct.html",
            })
            .when("/game", {
                templateUrl: "game/index.html",
            })
            .when("/error", {
                templateUrl: "error/index.html",
            })
            .otherwise({ redirectTo: "/error" });
    });
}