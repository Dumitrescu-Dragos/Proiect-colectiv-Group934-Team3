using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend2.Model
{
    public class ToolImage
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ToolImageId { get; set; }
        public string ImageUrl { get; set; }

        public int ToolId { get; set; }
        public Tool Tool { get; set; }
    }
}
