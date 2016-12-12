using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspNetAngular1.Domain.Game.Players
{
    public class Warrior : Player
    {
        public Warrior()
        {
            base.Name = "Beowulf";
            base.Class = "Warrior";
        }
    }
}