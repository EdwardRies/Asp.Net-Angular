/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="Product/ProductsService.ts" />
/// <reference path="Shared/Services/ModalService.ts" />
/// <reference path="Product/Product.ts" />
var MyApp;
(function (MyApp) {
    angular.module("MyAngularApp", ["ngRoute", "ui.bootstrap"]);
    function initDebug($compileProvider) {
        $compileProvider.debugInfoEnabled(true);
    }
    function routeProvider($routeProvider) {
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
            .when("/register", {
            templateUrl: "register/index.html",
        })
            .when("/game", {
            templateUrl: "game/index.html",
        })
            .when("/error", {
            templateUrl: "error/index.html",
        })
            .otherwise({ redirectTo: "/error" });
    }
    angular.module("MyAngularApp")
        .config(routeProvider);
})(MyApp || (MyApp = {}));
//# sourceMappingURL=App.js.map