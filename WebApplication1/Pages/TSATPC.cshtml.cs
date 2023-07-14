using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Pages
{
    public class TSATPCPDModel : PageModel
    {
        private readonly ILogger<TSATPCPDModel> _logger;

        public TSATPCPDModel(ILogger<TSATPCPDModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}