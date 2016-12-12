using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspNetAngular1.Domain.Game.Players
{
    public class Player
    {
        public string Name { get; set; }
        public string Race { get; private set; }
        public string Class { get; set; }

        public Player()
        {
            this.Name = "Player";
            this.Race = "Human";
            this.Class = "Laborer";
        }
        
    }
}