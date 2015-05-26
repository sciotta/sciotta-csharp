'use strict';

angular.module('sciottaApp')
  .controller('DocumentoDetailsController', ['$scope', '$routeParams', 'documentoService', function ($scope, $routeParams, documentoService)
  {
      documentoService.get({ Id: $routeParams.Id }, function (data)
      {
          $scope.documento = data;
      });

      $scope.goBack = function ()
      {
          window.history.back();
      }
  }]);
