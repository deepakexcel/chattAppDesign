 (function() {
    'use strict';

    angular.module('starter')
        .controller('chatController', chatController);

    function chatController($scope, $rootScope, $state, $timeout, $ionicScrollDelegate) {
            console.log('Chat');
            $rootScope.footerMenu = false;
            $scope.login = function(){
            	$state.go('app.contacts');
            }
            $timeout(function() {
                $ionicScrollDelegate.scrollBottom(true);
            });
    }
})();