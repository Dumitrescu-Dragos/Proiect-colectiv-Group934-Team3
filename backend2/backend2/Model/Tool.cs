using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend2.Model
{
    public class Tool
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ToolId { get; set; }
        public string Name { get; set; }
        public string TechSpecs { get; set; }
        public bool IsAvailable { get; set; }

        public IList<ToolImage> Images { get; set; }
    }
}
