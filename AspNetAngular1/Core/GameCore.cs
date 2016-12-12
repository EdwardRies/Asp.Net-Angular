using AspNetAngular1.Domain.Game;
using System.Collections.Generic;
using System.Linq;

namespace AspNetAngular1.Core
{
    public class GameCore : IGameCore
    {
        private List<Cell> Cells { get; set; }

        public GameCore()
        {
            this.Cells = new List<Cell>();
            Cells.Add(new Cell(0, 0, "North West Corner") { CanGoNorth = false, CanGoEast = true, CanGoSouth = true, CanGoWest = false });
            Cells.Add(new Cell(0, 1, "Western Edge") { CanGoNorth = true, CanGoEast = true, CanGoSouth = true, CanGoWest = false });
            Cells.Add(new Cell(0, 2, "South West Corner") { CanGoNorth = true, CanGoEast = true, CanGoSouth = false, CanGoWest = false });

            Cells.Add(new Cell(1, 0, "Northern Edge") { CanGoNorth = false, CanGoEast = true, CanGoSouth = true, CanGoWest = true });
            Cells.Add(new Cell(1, 1, "") { CanGoNorth = true, CanGoEast = true, CanGoSouth = true, CanGoWest = true });
            Cells.Add(new Cell(1, 2, "Southern Edge") { CanGoNorth = true, CanGoEast = true, CanGoSouth = false, CanGoWest = true });

            Cells.Add(new Cell(2, 0, "North East Corner") { CanGoNorth = false, CanGoEast = false, CanGoSouth = true, CanGoWest = true });
            Cells.Add(new Cell(2, 1, "Eastern Edge") { CanGoNorth = true, CanGoEast = false, CanGoSouth = true, CanGoWest = true });
            Cells.Add(new Cell(2, 2, "South East Corner") { CanGoNorth = true, CanGoEast = false, CanGoSouth = false, CanGoWest = true });
        }

        public Cell MoveDirection(int x, int y)
        {
            return Cells.SingleOrDefault(o => o.X == x && o.Y == y) ?? new Cell(x, y, "You are lost in the void");
        }
    }
}