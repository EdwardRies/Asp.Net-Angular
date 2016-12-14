// Angular Controller
(function () {
    "use strict";


    var SearchController = function ($scope, $interval, $location) {

        $scope.search = function (username) {
            if ($scope.intervalID) {
                $interval.cancel($scope.intervalID);
                $scope.intervalID = null;
            }

            $location.path("/user/" + username);
        };

        var countDownDecrement = function () {
            $scope.countDown -= 1;
            if ($scope.countDown < 1) {
                $scope.search($scope.username);
            }
        };

        var countDownStart = function () {
            $scope.intervalID = $interval(countDownDecrement, 1000, $scope.countDown);
        };

        $scope.username = "EdwardRies";
        $scope.countDown = 10;
        $scope.intervalID = null;
        countDownStart();
    };

    var app = angular.module("MyAngularApp");
    app.controller("SearchController", ["$scope", "$interval", "$location", SearchController]);

} ());
