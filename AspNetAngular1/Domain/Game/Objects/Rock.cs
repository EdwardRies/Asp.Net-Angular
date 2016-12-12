using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspNetAngular1.Domain.Game.Objects
{
    public class Rock : GameObject
    {
        public Rock()
        {
            this.Name = "Rock";
            this.Description = "A small rock";
            this.CanTake = true;
            this.Weight = 1;
            this.IsWeapon = false;
        }
    }
}