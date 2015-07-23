(function () {

    angular
        .module('app')
        .factory('SecuritiesService', SecuritiesService);

    SecuritiesService.$inject = ['$http'];

    function SecuritiesService($http) {
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