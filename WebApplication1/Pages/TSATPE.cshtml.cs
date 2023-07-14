using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Pages
{
    public class TSATPEPDModel : PageModel
    {
        private readonly ILogger<TSATPEPDModel> _logger;

        public TSATPEPDModel(ILogger<TSATPEPDModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}