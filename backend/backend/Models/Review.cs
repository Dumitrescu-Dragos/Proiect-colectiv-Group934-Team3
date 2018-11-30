using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public enum Rating
    {
        VeryBad = 1,
        Bad = 2,
        Average = 3,
        Good = 4,
        Great = 5
    }

    public class Review
    {
        public int ReviewId { get; set; }
        public string Text { get; set; }
        public Rating Rating { get; set; }

        public int AdvertisementId { get; set; }
        public Advertisement Advertisement { get; set; }
    }
}
