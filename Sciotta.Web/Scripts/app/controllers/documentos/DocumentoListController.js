'use strict';

angular.module('sciottaApp')
  .controller('DocumentoListController', ['$scope', 'documentoService', function ($scope, documentoService)
  {
      documentoService.query({}, function (data)
      {
           $scope.documentos = data;
      });
  }]);
