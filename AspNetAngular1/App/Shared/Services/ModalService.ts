namespace MyApp {
    "use strict";
    
    export interface IModalService {
        Open(scope: angular.IScope, templateUrl: string): angular.ui.bootstrap.IModalServiceInstance;
        Close(instance: angular.ui.bootstrap.IModalServiceInstance): angular.ui.bootstrap.IModalServiceInstance;
    }

    export class ModalService implements IModalService
    {
        static $inject = ["$log", "$uibModal"];
        constructor(private $log: angular.ILogService,
                    private $uibModal: angular.ui.bootstrap.IModalService) { }

        static Dependencies = ["$log", "$uibModal", ModalService];

        Open(scope: angular.IScope, templateUrl: string): angular.ui.bootstrap.IModalServiceInstance {
            var options = {
                templateUrl: templateUrl,
                scope: scope
            };

            return this.$uibModal.open(options);
        }

        Close(instance: angular.ui.bootstrap.IModalServiceInstance): angular.ui.bootstrap.IModalServiceInstance {
            if (instance) {
                instance.close();
            }

            return null;
        }

    }

    angular.module("MyAngularApp")
        .service("ModalService", ModalService.Dependencies);

}

