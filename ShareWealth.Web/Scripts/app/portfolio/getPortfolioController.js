(function () {

    angular
        .module('app')
        .controller('GetPortfolioController',  GetPortfolioController);

    GetPortfolioController.$inject = ['$scope', 'PortfolioService'];

    function GetPortfolioController($scope, PortfolioService) {
        var vm = this;
        vm.portfolio = PortfolioService.portfolio;
    }

})();