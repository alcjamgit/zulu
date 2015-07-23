(function () {

    angular
        .module('app')
        .controller('GetAllPortfoliosController', GetAllPortfoliosController);

    GetAllPortfoliosController.$inject = ['$scope', 'PortfolioService'];

    function GetAllPortfoliosController($scope, PortfolioService) {
        var vm = this;
        vm.portfolio = PortfolioService.portfolio;
    }

})();