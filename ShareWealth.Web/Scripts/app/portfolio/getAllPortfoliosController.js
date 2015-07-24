(function () {

    angular
        .module('app')
        .controller('GetAllPortfoliosController', GetAllPortfoliosController);

    GetAllPortfoliosController.$inject = ['$scope', 'PortfolioService', 'PageHeaderService'];

    function GetAllPortfoliosController($scope, PortfolioService, PageHeaderService) {
        PageHeaderService.setTitle('All Portfolios here');

        var vm = this;
        vm.portfolio = PortfolioService.portfolio;

    }

})();
