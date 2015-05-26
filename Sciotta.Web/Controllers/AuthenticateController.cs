using System;
using Sciotta.Web.Controllers.Base;
using Sciotta.Web.Models;
using Sciotta.Web.Models.VM;

namespace Sciotta.Web.Controllers
{
    public class AuthenticateController : ApiControllerBase
    {
        public string Post(AuthenticateUserVM authenticateUser)
        {
            var authenticatedUser = GetAuthenticateUser(authenticateUser.Username, authenticateUser.Password);
            if (authenticatedUser == null) return null;

            const string secretKey = "GQDstcKsx0NHjPOuXOYg5MbeJ1XT0uFiwDVvVBrk";
            return JWT.JsonWebToken.Encode(authenticatedUser, secretKey, JWT.JwtHashAlgorithm.HS256);
        }

        private AuthenticatedUser GetAuthenticateUser(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                throw UnauthorizedException();
            }

            var user = Usuario.GetUsuarioByLoginAndSenha(username, password);

            if (user == null)
            {
                throw UnauthorizedException();
            }

            return new AuthenticatedUser
            {
                Id = user.Id,
                Start = DateTime.Now
            };
        }
    }
}
