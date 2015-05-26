'use strict';
angular.module('sciottaApp').config(['$httpProvider', function ($httpProvider)
{
    $httpProvider.interceptors.push('authInterceptorService');
}]);

angular.module('sciottaApp').factory('authInterceptorService', [
    '$q',
    '$location',
    'localStorageService',
    function ($q, $location, localStorageService) {

        return {
            request: function (config)
            {
                config.headers = config.headers || {};

                if (localStorageService.get('authorizationData') == null)
                {
                    $location.path('/authenticate');
                }

                var authData = localStorageService.get('authorizationData');
                if (authData)
                {
                    config.headers.Authorization = 'Bearer ' + authData.token.replace('"', '').replace('"', '');
                }
                return config;
            },
            responseError : function (rejection) {
                if (rejection.status === 403) {
                    $location.path('/authenticate');
                }
                return $q.reject(rejection);
            }
        };
    }
]);