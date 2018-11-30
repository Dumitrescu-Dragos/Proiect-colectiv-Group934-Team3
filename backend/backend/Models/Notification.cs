using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Notification
    {
        public int NotificationId { get; set; }
        public string email { get; set; }

        public int AdvertisementId { get; set; }
        public Advertisement Advertisement { get; set; }
    }
}
