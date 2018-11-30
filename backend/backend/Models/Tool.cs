using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Tool
    {
        public int ToolId { get; set; }
        public string Name { get; set; }
        public string TechSpecs { get; set; }
        public bool IsAvailable { get; set; }

        public IList<ToolImage> Images { get; set; }
    }
}
