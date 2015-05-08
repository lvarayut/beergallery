(function() {
    'use strict';

    angular
        .module('bg')
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'partials/home.html'
                })
                .when('/beers', {
                    templateUrl: 'partials/beers.html'
                })
                .when('/beer/create', {
                    templateUrl: 'partials/create.html'
                })
                .when('/beer/update/:id', {
                    templateUrl: 'partials/update.html'
                })
                .when('/about', {
                    templateUrl: 'partials/about.html'
                });
        }]);
})();
