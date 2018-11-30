using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public enum Gender
    {
        Male,
        Female,
        Other
    }

    public class User
    {
        public int Id { get; set;}
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Gender Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string PhoneNumber { get; set; }

        public int AddressId { get; set; }
        public Address Address { get; set; }

        public IList<Advertisement> Advertisements { get; set; }
    }
}
