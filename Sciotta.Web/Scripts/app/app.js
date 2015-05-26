'use strict';

angular
  .module('sciottaApp', [
    'ngResource',
    'ngRoute',
    'LocalStorageModule',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider)
  {
      $routeProvider
        .when('/', {
            templateUrl: 'Views/main.html',
            controller: 'MainController'
        })
        .when('/about', {
            templateUrl: 'Views/about.html',
            controller: 'AboutController'
        })
        .when('/documentos/:Id', {
            templateUrl: 'Views/documentos/details.html',
            controller: 'DocumentoDetailsController'
        })
        .when('/documentos', {
            templateUrl: 'Views/documentos/list.html',
            controller: 'DocumentoListController'
        })
        .when('/authenticate', {
            templateUrl: 'Views/authenticate.html',
            controller: 'AuthenticateController'
        })
        .otherwise({
            redirectTo: '/'
        });
  })
    .config(function (cfpLoadingBarProvider)
    {
        cfpLoadingBarProvider.includeSpinner = true;
    })
  .run(['authService', function (authService)
  {
      authService.fillAuthData();
  }]);
