
'use strict';

angular.module('learnatorApp')
  .controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
     
     $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
     };
     
  }]);
