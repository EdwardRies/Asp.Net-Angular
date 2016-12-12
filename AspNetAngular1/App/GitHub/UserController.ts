// Angular Controller
(function () {
    "use strict";

    var UserController = function ($scope, $routeParams, GitHubService) {

        var onUserComplete = function (data) {
            $scope.user = data;
            GitHubService.GetRepos(data)
                .then(onUserRepos, onError);
        };

        var onUserRepos = function (data) {
            $scope.repos = data;
        };

        var onError = function (reason) {
            $scope.error = reason;
            $scope.repos = null;
            $scope.user = null;
        };

        $scope.repoSortOrder = "-stargazers_count";
        $scope.username = $routeParams.username;
        GitHubService.GetUser($scope.username)
            .then(onUserComplete, onError);
    };

    var app = angular.module("MyAngularApp");
    app.controller("UserController", ["$scope", "$routeParams", "GitHubService", UserController]);

} ());