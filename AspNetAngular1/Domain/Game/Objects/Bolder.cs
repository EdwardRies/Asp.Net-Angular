using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspNetAngular1.Domain.Game.Objects
{
    public class Bolder : GameObject
    {
        public Bolder()
        {
            this.Name = "Bolder";
            this.Description = "A bolder";
            this.CanTake = false;
            this.Weight = 100;
            this.IsWeapon = false;
        }
    }
}