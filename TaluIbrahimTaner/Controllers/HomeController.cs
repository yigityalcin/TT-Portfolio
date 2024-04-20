using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using TaluIbrahimTaner.Models;

namespace TaluIbrahimTaner.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult About()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();
        }
        public IActionResult Projects()
        {
            return View();
        }
        public IActionResult Project1()
        {
            return View();
        }
        public IActionResult Project2()
        {
            return View();
        }
        public IActionResult Project3()
        {
            return View();
        }
        public IActionResult Project4()
        {
            return View();
        }
        public IActionResult Project5()
        {
            return View();
        }
        public IActionResult Project6()
        {
            return View();
        }
        public IActionResult Yazilar()
        {
            return View();
        }
        public IActionResult Single()
        {
            return View();
        }
        public IActionResult Fotografi()
        {
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
