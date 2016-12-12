using AspNetAngular1.Domain.Game.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspNetAngular1.Domain.Game
{
    public class Cell
    {
        public int X { get; }
        public int Y { get; }
        public string Description { get; private set; }

        public bool CanGoNorth { get; set; }
        public bool CanGoSouth { get; set; }
        public bool CanGoEast { get; set; }
        public bool CanGoWest { get; set; }

        public List<GameObject> Objects { get; set; }

        public Cell(int x, int y, string description)
        {
            this.X = x;
            this.Y = y;
            this.CanGoNorth = false;
            this.CanGoEast = false;
            this.CanGoSouth = false;
            this.CanGoWest = false;
            this.Description = !string.IsNullOrEmpty(description) ? description :  "nothing but dirt";
            this.Objects = new List<GameObject>();
        }
    }
}