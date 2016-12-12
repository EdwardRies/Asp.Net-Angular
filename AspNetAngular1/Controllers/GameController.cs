using AspNetAngular1.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AspNetAngular1.Controllers
{
    [RoutePrefix("api/Game")]
    public class GameController : ApiController
    {
        private IGameCore gameCore { get; set; }

        public GameController() : this(new GameCore())
        { }

        public GameController(IGameCore gameCore)
        {
            this.gameCore = gameCore;
        }

        [Route("Move/{x}/{y}")]
        [HttpPost]
        public IHttpActionResult MoveDirection(int x, int y)
        {
            var result = this.gameCore.MoveDirection(x, y);

            return Ok(result);
        }
    }
}
