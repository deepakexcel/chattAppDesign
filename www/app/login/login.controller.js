 (function() {
    'use strict';

    angular.module('starter')
        .controller('loginController', loginController);

    function loginController($scope, $state) {
            console.log('login');
            $scope.goRegister = function(){
            	$state.go('register');
            }
            $scope.login = function(){
            	$state.go('app.contacts');
            }
    }
})();