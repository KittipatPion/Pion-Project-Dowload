using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Pages
{
    public class EQCModel : PageModel
    {
        private readonly ILogger<EQCModel> _logger;

        public EQCModel(ILogger<EQCModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}