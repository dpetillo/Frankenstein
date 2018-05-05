using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApplicationBasic.Controllers
{
    [Route("api/v1/[controller]")]
    public class SearchController : Controller
    {
        [HttpGet("")]
        public IEnumerable<string> WeatherForecasts(string text)
        {
            return Enumerable.Range(1, 5).Select(index =>
                text + " " + index.ToString()
            );
        }

    }
}
