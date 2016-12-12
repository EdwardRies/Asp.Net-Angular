using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspNetAngular1.Domain.Game.Objects
{
    public class GameObject
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public bool CanTake { get; set; }
        public int Weight { get; set; }
        public bool IsWeapon { get; set; }
        public bool IsArmor { get; set; }
        public bool isHelm { get; set; }

        public GameObject()
        {
            this.Name = "Object";
            this.Description = "An Object";
            this.CanTake = true;
            this.Weight = 1;
            this.IsWeapon = false;
        }
                
    }
}