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
            vm.beers = Beer.add(vm.beers, vm.newBeer);
            vm.newBeer = null;
            $location.path('/beers');
        }

        function prepareUpdate(beer) {
            vm.updatedBeer = beer;
            $location.path('/beer/update/' + beer.id);
        }

        function update() {
            $location.path('/beers');
        }

        function del(index) {
            vm.beers.splice(index, 1);
        }
    }
})();
