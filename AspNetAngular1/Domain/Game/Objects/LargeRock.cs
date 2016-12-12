using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspNetAngular1.Domain.Game.Objects
{
    public class LargeRock : GameObject
    {
        public LargeRock()
        {
            this.Name = "Large Rock";
            this.Description = "A large rock";
            this.CanTake = true;
            this.Weight = 5;
            this.IsWeapon = true;
        }
    }
}