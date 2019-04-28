using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using RestSharp;

namespace Beers.Controllers.Api
{
    [Route("[controller]/{action}")]
    public class ApiController : Controller
    {
        private readonly IConfiguration _configuration;

        public ApiController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public IActionResult GetBeers()
        {
            var baseEndpoint = _configuration.GetSection("BreweryApi").GetSection("Base").Value;
            var beersEndpoint = _configuration.GetSection("BreweryApi").GetSection("BeersEndpoint").Value;
            var key = _configuration.GetSection("BreweryApi").GetSection("key").Value;

            var client = new RestClient(baseEndpoint);
            var request = new RestRequest(beersEndpoint, Method.GET);
            request.AddParameter("key", key);
            
            // execute the request
            IRestResponse response = client.Execute(request);
            var content = response.Content; // raw content as string

            return Ok(content);
        }

        [HttpGet]
        public IActionResult GetMoreBeers(int pageNumber)
        {
            var baseEndpoint = _configuration.GetSection("BreweryApi").GetSection("Base").Value;
            var beersEndpoint = _configuration.GetSection("BreweryApi").GetSection("BeersEndpoint").Value;
            var key = _configuration.GetSection("BreweryApi").GetSection("key").Value;

            var client = new RestClient(baseEndpoint);
            var request = new RestRequest(beersEndpoint, Method.GET);
            request.AddParameter("key", key);
            request.AddParameter("p", pageNumber);

            // execute the request
            IRestResponse response = client.Execute(request);
            var content = response.Content; // raw content as string

            return Ok(content);
        }

        [HttpGet]
        public IActionResult GetBeerByName(string name)
        {
            var baseEndpoint = _configuration.GetSection("BreweryApi").GetSection("Base").Value;
            var beersEndpoint = _configuration.GetSection("BreweryApi").GetSection("BeersEndpoint").Value;
            var key = _configuration.GetSection("BreweryApi").GetSection("key").Value;

            var client = new RestClient(baseEndpoint);
            var request = new RestRequest(beersEndpoint, Method.GET);
            request.AddParameter("key", key);
            request.AddParameter("name", name);

            // execute the request
            IRestResponse response = client.Execute(request);
            var content = response.Content; // raw content as string

            return Ok(content);
        }
    }
}