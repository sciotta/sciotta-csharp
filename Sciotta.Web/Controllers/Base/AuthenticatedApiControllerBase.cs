using Newtonsoft.Json;
using Sciotta.Web.Models;

namespace Sciotta.Web.Controllers.Base
{
    public class AuthenticatedApiControllerBase : ApiControllerBase
    {
        protected AuthenticatedUser AuthenticadedUser;

        protected override void Initialize(System.Web.Http.Controllers.HttpControllerContext controllerContext)
        {
            var authorization = controllerContext.Request.Headers.Authorization;

            if (authorization == null)
            {
                throw UnauthorizedException(controllerContext);
            }

            const string secretKey = "GQDstcKsx0NHjPOuXOYg5MbeJ1XT0uFiwDVvVBrk";

            try
            {
                var jsonPayload = JWT.JsonWebToken.Decode(authorization.Parameter, secretKey);
                AuthenticadedUser = JsonConvert.DeserializeObject<AuthenticatedUser>(jsonPayload);
            }
            catch (JWT.SignatureVerificationException)
            {
                throw UnauthorizedException(controllerContext);
            }

            base.Initialize(controllerContext);
        }
    }
}