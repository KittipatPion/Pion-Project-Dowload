using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Pages
{
    public class TSATPEUATModel : PageModel
    {
        private readonly ILogger<TSATPEUATModel> _logger;

        public TSATPEUATModel(ILogger<TSATPEUATModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}