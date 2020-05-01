// var app = angular.module('myApp');
// app.controller('personCtrl', function($scope) {
//   $scope.firstName = "John";
//   $scope.lastName = "Doe";
//   $scope.fullName = function() {
//     return $scope.firstName + " " + $scope.lastName;
//   };
// });

export class PersonController {
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}