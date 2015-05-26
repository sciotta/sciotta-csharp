'use strict';

angular.module('sciottaApp')
  .controller('AuthenticateController', [
    '$scope',
    '$location',
    'authService',
    function ($scope, $location, authService)
    {
        $scope.loginData = {
            userName: "",
            password: ""
        };

        $scope.message = "";

        $scope.login = function ()
        {
            authService.login($scope.loginData).then(function (response)
            {
                $location.path('/main');
            },
            function (err)
            {
                $scope.message = err.error_description;
            });
        };
    }]);