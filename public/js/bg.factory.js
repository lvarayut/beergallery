(function() {
    'use strict';

    angular
        .module('bg')
        .factory('Beer', Beer);

    Beer.$inject = ['$http'];

    function Beer($http) {
        var beerFac = {
            get: get
        };

        return beerFac;

        function get() {
            return $http.get('data/beer.json').then(function(res) {
                return res.data;
            });
        }
    }
})();
