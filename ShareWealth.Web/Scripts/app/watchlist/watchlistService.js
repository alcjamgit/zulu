(function () {

    angular
        .module('app')
        .factory('WatchlistService', WatchlistService);

    WatchlistService.$inject = ['$http'];

    function WatchlistService($http) {
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