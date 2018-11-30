using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public enum State
    {
        Bad,
        Average,
        Good,
    }

    public class Rental
    {
        public int RentalId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public State IntialState { get; set; }
        public State FinalState { get; set; }

        public int AdvertisementId { get; set; }
        public Advertisement Advertisement { get; set; }
    }
}
