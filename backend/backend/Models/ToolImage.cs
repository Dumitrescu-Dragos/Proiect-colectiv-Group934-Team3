using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class ToolImage
    {
        public int ImageId { get; set; }
        public string ImageUrl {get; set;}

        public int ToolId { get; set; }
        public Tool Tool { get; set; }
    }
}
