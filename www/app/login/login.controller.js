 (function() {
    'use strict';

    angular.module('starter')
        .controller('loginController', loginController);

    function loginController($scope, $state, ajaxRequest) {
            console.log('login');
            $scope.goRegister = function(){
            	$state.go('register');
            }
            $scope.login = function(){
            	$state.go('app.contacts');
            }
            $scope.push = function(){
                console.log('PUSH NOTIFICATION');
                var api ="http://excellencetechnologies.co.in/yuvraj/notification.php";
                var promise = ajaxRequest.send(api);
                       promise.then(function(data) {
                           console.log(data);
                       });
            }
    }
})();