using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using System.Threading.Tasks;
using backend.Models;
using backend.Repository;
//using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
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
