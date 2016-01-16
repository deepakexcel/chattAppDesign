 (function() {
    'use strict';

    angular.module('starter')
        .controller('profileController', profileController);

    function profileController($scope, $rootScope, $state) {
            console.log('profileController');
            $rootScope.footerMenu = false;
    }
})();