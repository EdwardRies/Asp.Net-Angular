// Custom Angular Service
(function () {
    "use strict";

    var GameService = function ($window, $http, $log) {
        var apiProductsUrl = "/api/game/";
        var config = {
            headers: {
            }
        }
        var key = "GameServiceKey";
        
        $window.sessionStorage.setItem(key, JSON.stringify({
                X: 1,
                Y: 1,
                Description: "",
                CanGoNorth: true,
                CanGoEast: true,
                CanGoSouth: true,
                CanGoWest: true
            }));
        
        var getState = function (key) {
            if (key) {
                var result = $window.sessionStorage.getItem(key);
                if (result) {
                    return JSON.parse(result);
                }
            }
        }

        var setState = function (key, cell) {
            if (key && cell) {
                var result = JSON.stringify(cell);
                $window.sessionStorage.setItem(key, result);
            }
        }

        var moveDirection = function (direction) {
            var cell = getState(key);
            cell.X = direction == "East" && cell.CanGoEast ? ++cell.X : cell.X;
            cell.X = direction == "West" && cell.CanGoWest ? --cell.X : cell.X;
            cell.Y = direction == "North" && cell.CanGoNorth ? --cell.Y : cell.Y;
            cell.Y = direction == "South" && cell.CanGoSouth ? ++cell.Y : cell.Y;

            return $http.post(apiProductsUrl + "move/" + cell.X + "/" + cell.Y, config)
                .then(function (response) {
                    setState(key, response.data);
                    return response.data;
                });
        };

        return {
            MoveDirection: moveDirection
        };
    };

    angular.module("MyAngularApp")
        .service("GameService", ["$window", "$http", "$log", GameService]);
} ());