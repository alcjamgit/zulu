(function () {

    angular
        .module('app')
        .factory('PortfolioService', PortfolioService);

    PortfolioService.$inject = ['$http'];

    function PortfolioService($http) {
        var portfolio = {
                portfolioId: 1,
                portfolioName: 'Default Portfolio',
                system: 'SPA3',
                currency: 'AUD',
                stockExchange: 'XASX',
        }

        return portfolio;
    }

})();