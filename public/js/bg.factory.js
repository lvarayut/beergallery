(function() {
    'use strict';

    angular
        .module('bg')
        .factory('Beer', Beer);

    Beer.$inject = ['$http'];

    function Beer($http) {
        var beerFac = {
            get: get,
            add: add,
            update: update,
            del: del
        };

        return beerFac;

        function get() {
            return $http.get('/api/v1/beers').then(function(res) {
                return res.data;
            });
        }

        function add(beers, newBeer) {
            newBeer.id = beers.length + 1;
            return $http.post('/api/v1/beer/create', newBeer).then(function(res){
                beers.push(res.data);
                return beers;
            });
        }

        function update(beer) {
            return $http.post('/api/v1/beer/update', beer).then(function(res){
                return beer;
            });
        }

        function del(beer) {
            return $http.post('/api/v1/beer/delete', beer).then(function(res){
                return beer;
            });
        }
    }
})();
