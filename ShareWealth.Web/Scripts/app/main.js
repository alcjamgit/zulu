
(function () {

    angular.module('app', ['ngRoute', 'ngAnimate']);

    angular.module('app').config(configureRoute);

    configureRoute.$inject = ['$routeProvider', '$locationProvider'];
    function configureRoute($routeProvider, $locationProvider) {
        $routeProvider

            .when('/', {
                title:'Dashboard',
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
                title:'Portfolio',
                templateUrl: '/scripts/app/portfolio/getPortfolio.html',
                controller: 'GetPortfolioController',
                controllerAs: 'vm'
            })

            .when('/portfolio/getAllPortfolios', {
                title: 'All Portfolios',
                templateUrl: '/scripts/app/portfolio/getAllPortfolios.html',
                controller: 'GetAllPortfoliosController',
                controllerAs: 'vm'
            })

            .when('/securities', {
                title: 'Securities',
                templateUrl: 'scripts/app/securities/securities.html',
                controller: 'SecuritiesController',
                controllerAs: 'vm'
            })

            .when('/watchlist', {
                title: 'Watchlist',
                templateUrl: 'scripts/app/watchlist/watchlist.html',
                controller: 'WatchListController',
                controllerAs: 'vm'
            })

            .when('/scans', {
                title: 'Scans',
                templateUrl: 'scripts/app/scans/scans.html',
                controller: 'ScansController',
                controllerAs: 'vm'
            })

            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }

})();
