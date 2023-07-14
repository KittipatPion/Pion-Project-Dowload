using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Pages
{
    public class EQCTabletModel : PageModel
    {
        private readonly ILogger<EQCTabletModel> _logger;

        public EQCTabletModel(ILogger<EQCTabletModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}