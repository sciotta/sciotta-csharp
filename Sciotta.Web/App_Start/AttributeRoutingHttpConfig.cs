using System.Web.Http;
using AttributeRouting.Web.Http.WebHost;

namespace Sciotta.Web 
{
    public static class AttributeRoutingHttpConfig
	{
		public static void RegisterRoutes(HttpRouteCollection routes) 
		{    
            routes.MapHttpAttributeRoutes();
		}
    }
}
