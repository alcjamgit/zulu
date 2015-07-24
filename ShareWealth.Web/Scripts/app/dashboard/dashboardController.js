(function () {

    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'DashboardService', 'PageHeaderService'];

    function DashboardController($scope, DashboardService, PageHeaderService) {
        PageHeaderService.setTitle('Dashboard');
        var vm = this;
    }

})();