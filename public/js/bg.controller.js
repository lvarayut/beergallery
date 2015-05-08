(function() {
    'use strict';

    angular
        .module('bg')
        .controller('BeerController', BeerController);

    BeerController.$inject = ['$location', 'Beer'];

    function BeerController($location, Beer) {
        var vm = this;

        vm.isActivePath = isActivePath;

        init();

        function init() {
            Beer.get().then(function(beers) {
                vm.beers = beers;
            });
        }

        function isActivePath(path) {
            return $location.path() === path;
        }
    }
})();
