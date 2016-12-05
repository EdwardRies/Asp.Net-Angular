// Angular Controller
//(function () {
//    var ErrorController = function ($scope, $routeParams) {
//    };
//    var app = angular.module("MyAngularApp");
//    app.controller("ErrorController", ["$scope", "$routeParams", ErrorController]);
//} ());
var app;
(function (app) {
    var Error;
    (function (Error) {
        var ErrorController = (function () {
            function ErrorController($scope, $location, $routeParams) {
                this.title = "Error Controller";
                this.hasError = false;
                this.path = $routeParams.productGUID;
            }
            ErrorController.prototype.hasErrorFlag = function () {
                return this.hasError;
            };
            return ErrorController;
        }());
        angular
            .module("MyAngularApp")
            .controller("ErrorController", ["$scope", "$location", "$routeParams", ErrorController]);
    })(Error = app.Error || (app.Error = {}));
})(app || (app = {}));
//var app2 = angular.module("MyAngularApp");
//app2.controller("ErrorController", ["$scope", "$routeParams", ErrorController]); 
//# sourceMappingURL=ErrorController.js.map