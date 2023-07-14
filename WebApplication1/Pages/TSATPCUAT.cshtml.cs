using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Pages
{
    public class TSATPCUATModel : PageModel
    {
        private readonly ILogger<TSATPCUATModel> _logger;

        public TSATPCUATModel(ILogger<TSATPCUATModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}