using System.Threading.Tasks;

namespace Elections.BLL.Contracts
{
    public interface IJwtTokenService
    {
        Task<string> GenerateToken();
        Task<bool> ValidateToken(string token);
    }
}
