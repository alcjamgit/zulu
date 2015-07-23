(function () {

    angular
        .module('app')
        .factory('DashboardService', DashboardService);

    DashboardService.$inject = ['$http'];

    function DashboardService($http) {
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