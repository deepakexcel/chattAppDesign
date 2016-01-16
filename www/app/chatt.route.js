(function() {
    'use strict';

angular.module('starter', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('login', {
    url: '/login',
    cache:false,
    templateUrl: 'app/login/login.html',
    controller: 'loginController'
  })
    .state('register', {
    url: '/register',
    cache:false,
    templateUrl: 'app/register/register.html',
    controller: 'registerController'
  })
    .state('app', {
    url: '/app',
    cache:false,
    abstract: true,
    templateUrl: 'app/menu/menu.html'
  })

  .state('app.contacts', {
    url: '/contacts',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'app/contacts/contacts.html',
        controller: 'contactsController'
      }
    }
  })
  .state('app.chat', {
      url: '/chat',
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'app/chat/chat.html',
          controller: 'chatController'
        }
      }
    })
  .state('app.setting', {
      url: '/setting',
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'app/setting/setting.html',
          controller: 'settingController'
        }
      }
    })
  .state('app.profile', {
      url: '/profile',
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'app/profile/profile.html',
          controller: 'profileController'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});

})();