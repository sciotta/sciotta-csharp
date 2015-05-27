'use strict';

angular.module('sciottaApp').factory("documentoService", function ($resource)
{
    var serviceBase = '';

    return $resource(
        serviceBase + "api/documentos/:Id",
        { Id: "@Id" }
    );
});