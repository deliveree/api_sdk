using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AspNetFramworkEx
{
    public class Global : HttpApplication
    {
        protected void Application_Start()
        {
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}
