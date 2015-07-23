

(function () {

    angular
        .module('app')
        .controller("SidebarController",  SidebarController);

        SidebarController.$inject = ['$location'];

        function SidebarController($location) {
            var vm = this;
        
            vm.navigateTo = function (url) {
                $location.path(url);
            };
            vm.sayHello = function () {
                alert("hola");
            }
        }

})();