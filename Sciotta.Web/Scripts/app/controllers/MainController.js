'use strict';

/**
 * @ngdoc function
 * @name sciottaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sciottaApp
 */
angular.module('sciottaApp')
  .controller('MainController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
