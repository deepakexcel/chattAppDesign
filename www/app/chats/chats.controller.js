 (function() {
    'use strict';

    angular.module('starter')
        .controller('chatsController', chatsController);

    function chatsController($scope, $rootScope, $state) {
            console.log('chatsController');
    }
})();