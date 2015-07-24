(function () {

    angular
        .module('app')
        .controller('WatchListController', WatchListController);

    WatchListController.$inject = ['$scope', 'WatchlistService', 'PageHeaderService'];

    function WatchListController($scope, WatchlistService, PageHeaderService) {
        PageHeaderService.setTitle('Watchlists');
    }

})();