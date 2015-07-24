(function () {
    angular
        .module('app')
        .controller('PageController', PageController);

    PageController.$inject = ['$scope','PageHeaderService'];
    function PageController($scope, PageHeaderService) {
        $scope.Page = PageHeaderService;        
    }
    
})();