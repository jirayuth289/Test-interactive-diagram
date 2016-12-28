(function() {
    'use strict';

    angular.module('public')
        .config(['$stateProvider', function($stateProvider) {
            // Routes
            $stateProvider
                .state('app', {
                    absract: true,
                    url: '/app',
                    views: {
                        '': {
                            templateUrl: 'src/public/layout.html'
                        },
                        'nav-top': {
                            templateUrl: 'src/public/nav-top.html'
                        },
                        'aside': {
                            templateUrl: 'src/public/aside.html'
                        },
                    }

                })

            .state('app.dashboard', {
                url: '/dashboard',
                templateUrl: 'src/public/home/home.html'
            })

            .state('app.x', {
                url: '/x',
                template: 'fffff'
            });
        }]);

    /**
     * Configures the routes and views
     */


})();