(function () {

    angular
        .module('app')
        .controller('WatchListController', WatchListController);

    WatchListController.$inject = ['$scope', 'WatchlistService'];

    function WatchListController($scope, WatchlistService) {

    }

})();