using backend2.Data;
using backend2.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend2.Repository
{
    public class AdvertisementRepository
    {
        ApplicationDbContext context;

        public AdvertisementRepository(ApplicationDbContext ctx)
        {
            context = ctx;
            /*Tool t = new Tool { ToolId = 1, Name = "Pistol de vopsit", TechSpecs = "specificatii pistol", IsAvailable = true, Images = images };
            Advertisement a1 = new Advertisement
            {
                Id = 1,
                Title = "Pistol de vopsit",
                Description = "Folosit la vopsirea suprafetelor de lemn, de metal.",
                Type = "profesional",
                PeriodOfTime = "25.10.2018-26.12.2018",
                RentalConditions = "RentalConditions",
                ReturnRequirements = "ReturnRequirements",
                OwnerId = 1,
                Owner = new User(),
                ToolId = 1,
                Tool = t,
                CategoryId = 1,
                Category = new Category(),
                LocationId = 1,
                Location = new Address()
            };
            Advertisement a2 = new Advertisement
            {
                Id = 2,
                Title = "Filetanta cu acumulator",
                Description = "FBurghiu 0.8 – 10 mm",
                Type = "profesional",
                PeriodOfTime = "10.10.2018-10.10.2020",
                RentalConditions = "RentalConditions",
                ReturnRequirements = "ReturnRequirements",
                OwnerId = 1,
                Owner = new User(),
                ToolId = 1,
                Tool = t,
                CategoryId = 1,
                Category = new Category(),
                LocationId = 1,
                Location = new Address()
            };
            Advertisement a3 = new Advertisement
            {
                Id = 3,
                Title = "Polizor de banc",
                Description = "Polizor cu tocina cu rezervor cu apa pentru ascutirea produselor fine cum ar fi foarfece si cutite. Apa din rezervor racind piatra de ascutire nedecalind produselor.",
                Type = "profesional",
                PeriodOfTime = "14.10.2018-14.12.2019",
                RentalConditions = "RentalConditions",
                ReturnRequirements = "ReturnRequirements",
                OwnerId = 1,
                Owner = new User(),
                ToolId = 1,
                Tool = t,
                CategoryId = 1,
                Category = new Category(),
                LocationId = 1,
                Location = new Address()
            };
            advertisements.Add(a1);
            advertisements.Add(a2);
            advertisements.Add(a3);*/
        }
        public void addAdvertisement(Advertisement a)
        {
            context.Advertisements.AddAsync(a);
            context.SaveChangesAsync();
        }
        public Advertisement getAdvertisementById(int id)
        {
            Advertisement adv = context.Advertisements.ToList().Find(a => a.Id == id);
            return adv;
        }



        public void deleteAdvertisement(int id)
        {
            Advertisement adv = context.Advertisements.ToList().Find(a => a.Id == id);
            context.Advertisements.Remove(adv);
            context.SaveChangesAsync();
        }
        public List<Advertisement> GetAdvertisements()
        {
            return context.Advertisements.ToList();
        }
    }
}
