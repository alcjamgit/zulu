(function () {

    angular
        .module('app')
        .controller('ScansController', ScansController);

    ScansController.$inject = ['$scope', 'ScanService', 'PageHeaderService'];

    function ScansController($scope, ScanService, PageHeaderService) {
        PageHeaderService.setTitle('Scan Profiles');
    }

})();