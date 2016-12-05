// Angular Controller
//(function () {

//    var ErrorController = function ($scope, $routeParams) {

//    };

//    var app = angular.module("MyAngularApp");

//    app.controller("ErrorController", ["$scope", "$routeParams", ErrorController]);

//} ());

module app.Error {
    interface IErrorControllerInterface {
        title: string;
        path: string;
        hasError: boolean;
        hasErrorFlag(): boolean;
    }

    class ErrorController implements IErrorControllerInterface {
        title: string;
        hasError: boolean;
        path: string;

        constructor($scope, $location, $routeParams) {
            this.title = "Error Controller";
            this.hasError = false;
            this.path = $routeParams.productGUID;            
        }

        hasErrorFlag(): boolean {
            return this.hasError;            
        }

    }
    angular
        .module("MyAngularApp")
        .controller("ErrorController", ["$scope", "$location", "$routeParams", ErrorController]);
}

//var app2 = angular.module("MyAngularApp");
//app2.controller("ErrorController", ["$scope", "$routeParams", ErrorController]);