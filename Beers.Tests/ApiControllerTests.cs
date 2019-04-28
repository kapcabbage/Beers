using Beers.Controllers.Api;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Xunit;

namespace Beers.Tests
{

    public class ApiControllerTests
    {
        private readonly IConfiguration _configuration;
        private readonly ApiController _controller;
        public ApiControllerTests()
        {
            _configuration = new ConfigurationBuilder()
                         .AddJsonFile("appsettings.json")
                         .Build();
            _controller = new ApiController(_configuration);
        }

        [Fact]
        public void Should_GetBeers_Return_Ok()
        {
            var result = _controller.GetBeers();
            result.Should().BeOfType<OkObjectResult>();
        }

        [Fact]
        public void Should_GetMoreBeers_Return_Ok()
        {
            var result = _controller.GetMoreBeers(145);
            result.Should().BeOfType<OkObjectResult>();
        }
    }
}
