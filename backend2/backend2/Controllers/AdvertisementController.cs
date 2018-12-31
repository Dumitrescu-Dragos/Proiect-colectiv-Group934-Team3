using backend2.Data;
using backend2.Model;
using backend2.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace backend2.Controllers
{

    

    [Route("api/[controller]")]
    [ApiController]
    public class AdvertisementController : ControllerBase
    {
        AdvertisementRepository repository = new AdvertisementRepository();

        
       


        // GET: api/Advertisement
        [HttpGet]
        
        public IEnumerable<Advertisement> Get()
        {
            return repository.GetAdvertisements();
            //return new string[] { "value1", "value2" };

        }

        // GET: api/Advertisement/5
        [HttpGet("{id}", Name = "Get")]
        public Advertisement Get(int id)
        {
            return repository.getAdvertisementById(id);
        }

        // POST: api/Advertisement
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Advertisement/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            repository.deleteAdvertisement(id);
        }
    }
}
