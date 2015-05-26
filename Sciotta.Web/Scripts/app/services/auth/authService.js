'use strict';

angular.module('sciottaApp').factory('authService', [
    '$http',
    '$q',
    'localStorageService',
    function ($http, $q, localStorageService)
    {
        var serviceBase = 'http://localhost:19395';

        var _authentication =  {
            isAuth: false,
            userName: ""
        };

        var _login = function(loginData) {
            var data = "grant_type=password&username=" +
                loginData.userName + "&password=" + loginData.password;

            var deferred = $q.defer();

            $http.post(serviceBase + '/api/authenticate', data, {
                headers:
                { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function(response) {
                localStorageService.set('authorizationData',
                { token: response, userName: loginData.userName });

                _authentication.isAuth = true;
                _authentication.userName = loginData.userName;

                deferred.resolve(response);

            }).error(function(err) {
                _logOut();
                deferred.reject(err);
            });
            return deferred.promise;
        };

        var _logOut = function() {
            localStorageService.remove('authorizationData');
            _authentication.isAuth = false;
            _authentication.userName = "";
        };

        var _fillAuthData = function() {
            var authData = localStorageService.get('authorizationData');
            if (authData) {
                _authentication.isAuth = true;
                _authentication.userName = authData.userName;
            }
        };

        return {
            authentication: _authentication,
            login: _login,
            logout: _logOut,
            fillAuthData: _fillAuthData
        }
    }
]);