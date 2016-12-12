(function () {
    "use strict";
    var module = angular.module("MyAngularApp");
    var myController = function (GameService) {
        var vm = this;
        vm.Description = "";
        vm.$onInit = function () {
            vm.Cell = {
                X: 0,
                Y: 0,
                Description: "Center of the map",
                CanGoNorth: true,
                CanGoEast: true,
                CanGoWest: true,
                CanGoSouth: true
            };
        };
        vm.Move = function (direction) {
            GameService.MoveDirection(direction)
                .then(function (data) {
                vm.Cell = data;
            }, onError);
        };
        var onError = function (reason) {
            vm.Error = reason;
        };
    };
    module.component("myComponent", {
        templateUrl: "/App/Game/My-Component.html",
        controllerAs: "vm",
        controller: ["GameService", myController]
    });
}());
//# sourceMappingURL=My-Component.js.map