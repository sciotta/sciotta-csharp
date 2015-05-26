using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace Sciotta.Web.Controllers.Base
{
    public class ApiControllerBase : ApiController
    {
        protected Exception UnauthorizedException()
        {
            return UnauthorizedException(ControllerContext);
        }

        protected Exception UnauthorizedException(HttpControllerContext context)
        {
            var httpResponseMessage = context.Request.CreateResponse(HttpStatusCode.Forbidden);
            return new HttpResponseException(httpResponseMessage);
        }
    }
}
