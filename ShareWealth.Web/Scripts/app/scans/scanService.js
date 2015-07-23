(function () {

    angular
        .module('app')
        .factory('ScanService', ScanService);

    ScanService.$inject = ['$http'];

    function ScanService($http) {
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