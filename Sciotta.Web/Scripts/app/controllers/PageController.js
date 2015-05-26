'use strict';

angular.module('sciottaApp')
  .controller('PageController', [
      '$scope',
      '$location',
      'authService',
      function ($scope, $location, authService)
      {
          $scope.logout = function () {
              authService.logout();
              $location.path('/authenticate');
          };

          $scope.$on('$routeChangeSuccess', function (event, current, previous, rejection) {
              $scope.actualPath = current.$$route.originalPath;
          });
      }]);