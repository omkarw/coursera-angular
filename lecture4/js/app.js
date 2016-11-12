(function () {
  'use strict';
  angular.module('myFirstApp', [])
  .controller('MyFirstController', function ($scope) {
  $scope.name = "Omkar";
  $scope.sayHello=function(){
    return "Hello Coursera!";
  };
});
})();
