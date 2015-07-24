(function () {

    angular
        .module('app')
        .factory('PageHeaderService', PageHeaderService);

    function PageHeaderService() {
        var title = 'default';
        return {
            title: function () { return title; },
            setTitle: function (newTitle) { title = newTitle }
        };
    }

})();