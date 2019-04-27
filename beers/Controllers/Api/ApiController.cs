using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RestSharp;

namespace Beers.Controllers.Api
{
    [Route("[controller]/{action}")]
    public class ApiController : Controller
    {
        [HttpGet]
        public IActionResult GetBeers()
        {
            var key = "b0cfacb3f403a62a63aef31bc01b45f1";
            var client = new RestClient("https://sandbox-api.brewerydb.com/v2/");
            var request = new RestRequest("beers", Method.GET);
            request.AddParameter("key", "b0cfacb3f403a62a63aef31bc01b45f1"); 


            // execute the request
            IRestResponse response = client.Execute(request);
            var content = response.Content; // raw content as string

            return Ok(content);
        }
    }
}