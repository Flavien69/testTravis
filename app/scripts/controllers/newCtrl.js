'use strict';

angular.module('learnatorApp')
  .controller('newCtrl', ['$scope','$http', function ($scope,$http) {
  
      $http.get('phones/phones.json').success(function(data) {
        $scope.phones = data;
      });
       
       $scope.orderProp = 'age';
    
  }]);
