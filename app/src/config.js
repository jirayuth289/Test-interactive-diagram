(function() {
    "use strict";

    /**
     * Restaurant module that includes the public module as a dependency
     */
    angular.module('app', ['public'])
        .config(['$urlRouterProvider', function($urlRouterProvider) {

            // If user goes to a path that doesn't exist, redirect to public root
            $urlRouterProvider.otherwise('/app/dashboard');
        }]);


})();