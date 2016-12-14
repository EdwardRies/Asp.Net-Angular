var MyApp;
(function (MyApp) {
    var ErrorController = (function () {
        function ErrorController($scope, $location, $routeParams) {
            this.hasError = true;
            // this.path = $routeParams.productGUID;
        }
        ErrorController.prototype.hasErrorFlag = function () {
            return this.hasError;
        };
        ErrorController.Dependencies = ["$scope", "$location", "$routeParams", ErrorController];
        return ErrorController;
    }());
    angular
        .module("MyAngularApp")
        .controller("ErrorController", ErrorController.Dependencies);
})(MyApp || (MyApp = {}));
//# sourceMappingURL=ErrorController.js.map