using AspNetAngular1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.ComponentModel;
using AspNetAngular1.Filter;

namespace AspNetAngular1.Controllers
{    
    public class HomeController : Controller
    {
        
        public ActionResult Index()
        {
            var model = new HomeViewModel();

            return View(model);
        }
    }
}