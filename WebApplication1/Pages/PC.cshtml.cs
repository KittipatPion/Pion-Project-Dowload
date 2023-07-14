using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Pages
{
    public class PCModel : PageModel
    {
        private readonly ILogger<PCModel> _logger;

        public PCModel(ILogger<PCModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}