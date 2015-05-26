'use strict';

/**
 * @ngdoc function
 * @name sciottaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sciottaApp
 */
angular.module('sciottaApp')
  .controller('AboutController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
