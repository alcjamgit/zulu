(function () {

    angular
        .module('app')
        .controller('SecuritiesController', SecuritiesController);

    SecuritiesController.$inject = ['$scope', 'SecuritiesService', 'PageHeaderService'];

    function SecuritiesController($scope, SecuritiesService, PageHeaderService) {
        PageHeaderService.setTitle('Securities');
    }

})();