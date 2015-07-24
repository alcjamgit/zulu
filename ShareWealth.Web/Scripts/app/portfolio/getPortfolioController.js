(function () {

    angular
        .module('app')
        .controller('GetPortfolioController',  GetPortfolioController);

    GetPortfolioController.$inject = ['$scope', 'PortfolioService', 'PageHeaderService'];

    function GetPortfolioController($scope, PortfolioService, PageHeaderService) {
        PageHeaderService.setTitle('Current Portfolio');
        var vm = this;
        vm.portfolio = PortfolioService.portfolio;
    }

})();