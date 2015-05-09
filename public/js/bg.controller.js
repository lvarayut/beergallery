(function() {
    'use strict';

    angular
        .module('bg')
        .controller('BeerController', BeerController);

    BeerController.$inject = ['$location', 'Beer'];

    function BeerController($location, Beer) {
        var vm = this;

        vm.isActivePath = isActivePath;
        vm.add = add;
        vm.update = update;
        vm.prepareUpdate = prepareUpdate;
        vm.del = del;

        init();

        function init() {
            Beer.get().then(function(beers) {
                vm.beers = beers;
            });
        }

        function isActivePath(path) {
            return $location.path() === path;
        }

        function add() {
            Beer.add(vm.beers, vm.newBeer).then(function(beers){
                vm.beers = beers;
                vm.newBeer = null;
                $location.path('/beers');
            });
        }

        function prepareUpdate(beer) {
            vm.updatedBeer = beer;
            $location.path('/beer/update/' + beer.id);
        }

        function update() {
            Beer.update(vm.updatedBeer).then(function(beer){
                $location.path('/beers');
            });
        }

        function del(index) {
            Beer.del(vm.beers[index]).then(function(beer){
                vm.beers.splice(index, 1);
            });
        }
    }
})();
