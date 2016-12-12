// Custom Modal Service
(function () {
    "use strict";

    var ModalService = function ($log, $uibModal) {

        var openModal = function (scope, templateUrl) {
            var options = {
                templateUrl: templateUrl,
                scope: scope
            };

            return $uibModal.open(options);
        };

        var closeModal = function (instance) {
            if (instance) {
                instance.close();
            }

            return null;
        };

        return {
            Open: openModal,
            Close: closeModal
        };
    };

    angular.module("MyAngularApp")
        .service("ModalService", ["$log", "$uibModal", ModalService]);
} ());