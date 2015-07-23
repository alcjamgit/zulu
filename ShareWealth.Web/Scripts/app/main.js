
(function () {

    angular.module('app', ['ngRoute']);

    angular.module('app').config(configureRoute);

    function configureRoute($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'scripts/app/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'vm'
            })

            .when('/dashboard', {
                templateUrl: 'scripts/app/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'vm'
            })

            .when('/portfolio/getPortfolio', {
                templateUrl: '/scripts/app/portfolio/getPortfolio.html',
                controller: 'GetPortfolioController',
                controllerAs: 'vm'
            })

            .when('/portfolio/getAllPortfolios', {
                templateUrl: '/scripts/app/portfolio/getAllPortfolios.html',
                controller: 'GetAllPortfoliosController',
                controllerAs: 'vm'
            })

            .when('/securities', {
                templateUrl: 'scripts/app/securities/securities.html',
                controller: 'SecuritiesController',
                controllerAs: 'vm'
            })

            .when('/watchlist', {
                templateUrl: 'scripts/app/watchlist/watchlist.html',
                controller: 'WatchListController',
                controllerAs: 'vm'
            })

            .when('/scans', {
                templateUrl: 'scripts/app/scans/scans.html',
                controller: 'ScansController',
                controllerAs: 'vm'
            })

            .otherwise({
                redirectTo: '/'
            });
    }

})();
