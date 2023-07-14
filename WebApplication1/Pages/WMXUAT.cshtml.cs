using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Pages
{
    public class WMXModel : PageModel
    {
        private readonly ILogger<WMXModel> _logger;

        public WMXModel(ILogger<WMXModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}