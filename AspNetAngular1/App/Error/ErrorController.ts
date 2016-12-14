namespace MyApp {

    export interface IErrorController {
        hasErrorFlag(): boolean;
    }

    class ErrorController implements IErrorController {

        constructor($scope, $location, $routeParams) {
            // this.path = $routeParams.productGUID;
        }

        private hasError: boolean = true;

        static Dependencies = ["$scope", "$location", "$routeParams", ErrorController];

        hasErrorFlag(): boolean {
            return this.hasError;
        }

    }

    angular
        .module("MyAngularApp")
        .controller("ErrorController", ErrorController.Dependencies);

}