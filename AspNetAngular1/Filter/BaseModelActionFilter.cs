using AspNetAngular1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AspNetAngular1.Filter
{
    public class BaseModelActionFilterAttribute : ActionFilterAttribute, IActionFilter, IResultFilter
    {

        public override void OnResultExecuting(ResultExecutingContext filterContext)
        {
            var viewResult = filterContext.Result as ViewResult;
            if (viewResult != null)
            {
                var viewModelBase = viewResult.ViewData.Model as IViewModelBase;
                if (viewModelBase != null)
                {
                    viewModelBase.Message = "Hello World";
                }
            }
        }

    }
}