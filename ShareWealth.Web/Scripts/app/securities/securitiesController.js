(function () {

    angular
        .module('app')
        .controller('SecuritiesController', SecuritiesController);

    SecuritiesController.$inject = ['$scope', 'SecuritiesService'];

    function SecuritiesController($scope, SecuritiesService) {

    }

})();