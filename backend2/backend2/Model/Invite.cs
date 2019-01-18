using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace backend2.Model
{
    public class Invite
    {
        [Key]
        public string InviteId { get; set; }
    }
}
