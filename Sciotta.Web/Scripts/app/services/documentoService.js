'use strict';

angular.module('sciottaApp').factory("documentoService", function ($resource)
{
    var serviceBase = 'http://localhost:19395/';

    return $resource(
        serviceBase + "api/documentos/:Id",
        { Id: "@Id" }
    );
});