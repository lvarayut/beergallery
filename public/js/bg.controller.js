(function(){
    'use strict';

    angular
        .module('bg')
        .controller('BeerController', BeerController);

    BeerController.$inject = ['$location'];
    function BeerController($location){
        var vm = this;

        vm.isActivePath = isActivePath;

        function isActivePath(path) {
            return $location.path() === path;
        }
    }
})();