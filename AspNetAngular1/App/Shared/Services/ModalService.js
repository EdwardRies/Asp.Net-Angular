var MyApp;
(function (MyApp) {
    "use strict";
    var ModalService = (function () {
        function ModalService($log, $uibModal) {
            this.$log = $log;
            this.$uibModal = $uibModal;
        }
        ModalService.prototype.Open = function (scope, templateUrl) {
            var options = {
                templateUrl: templateUrl,
                scope: scope
            };
            return this.$uibModal.open(options);
        };
        ModalService.prototype.Close = function (instance) {
            if (instance) {
                instance.close();
            }
            return null;
        };
        ModalService.$inject = ["$log", "$uibModal"];
        ModalService.Dependencies = ["$log", "$uibModal", ModalService];
        return ModalService;
    }());
    MyApp.ModalService = ModalService;
    angular.module("MyAngularApp")
        .service("ModalService", ModalService.Dependencies);
})(MyApp || (MyApp = {}));
//# sourceMappingURL=ModalService.js.map