'use strict';

angular.module('learnatorApp', [
  'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'newCtrl'
      })
      
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'listCtrl'
      })
              
      .otherwise({
        redirectTo: '/new'
      });
  });


