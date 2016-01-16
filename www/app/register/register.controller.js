 (function() {
    'use strict';

    angular.module('starter')
        .controller('registerController', registerController);

    function registerController($scope, $ionicHistory, $state) {
            console.log('Register');
            $scope.goback = function() {
            	console.log('Go back');
                  $ionicHistory.goBack();
            };
            $scope.goLogin = function(){
                $state.go('login');
            }
    }
})();