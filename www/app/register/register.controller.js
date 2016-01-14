 (function() {
    'use strict';

    angular.module('starter')
        .controller('registerController', registerController);

    function registerController($scope, $ionicHistory) {
            console.log('Register');
            $scope.goback = function() {
            	console.log('Go back');
        $ionicHistory.goBack();
    };
    }
})();