using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend2.Model
{
    public class Advertisement
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public string PeriodOfTime { get; set; }
        public string RentalConditions { get; set; }
        public string ReturnRequirements { get; set; }

        public int OwnerId { get; set; }
        public User Owner { get; set; }

        public int ToolId { get; set; }
        public Tool Tool { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public int LocationId { get; set; }
        public Address Location { get; set; }
    }
}
