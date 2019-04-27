using Microsoft.AspNetCore.Mvc;

namespace Beers.Controllers
{
    public class DefaultController : Controller
    {
        #region Methods

        public IActionResult Index()
        {
            return File("~/dist/index.html", "text/html");
        }

        #endregion
    }
}