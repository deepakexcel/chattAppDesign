 (function() {
    'use strict';

    angular.module('starter')
        .controller('contactsController', contactsController);

    function contactsController($scope, $rootScope, $state) {
            console.log('contactsController');
            $rootScope.footerMenu = true;
    }
})();