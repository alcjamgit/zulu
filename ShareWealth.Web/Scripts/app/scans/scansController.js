(function () {

    angular
        .module('app')
        .controller('ScansController', ScansController);

    ScansController.$inject = ['$scope', 'ScanService'];

    function ScansController($scope, ScanService) {

    }

})();