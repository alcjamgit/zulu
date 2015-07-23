(function () {

    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'DashboardService'];

    function DashboardController($scope, DashboardService) {
        var vm = this;
    }

})();