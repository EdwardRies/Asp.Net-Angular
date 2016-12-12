using AspNetAngular1.Domain.Game;

namespace AspNetAngular1.Core
{
    public interface IGameCore
    {
        Cell MoveDirection(int x, int y);
    }
}