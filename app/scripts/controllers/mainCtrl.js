'use strict';

angular.module('learnatorApp')
  .controller('mainCtrl', ['$scope', '$location', '$log', function ($scope, $location, $log) {
     
     $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
     };
     
  }]);
