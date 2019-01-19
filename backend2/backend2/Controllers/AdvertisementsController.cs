using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend2.Data;
using backend2.Model;
using Microsoft.AspNetCore.Authorization;

namespace backend2.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AdvertisementsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AdvertisementsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Advertisements
        [HttpGet("filters")]
        public IEnumerable<Advertisement> GetAdvertisementsFiltered(Filters filters)
        {
            List<Advertisement> advertisements = _context.Advertisements.ToList();
            List<Advertisement> filteredAdvertisements = new List<Advertisement>();
            IEnumerable<User> owners = _context.Users;
            IEnumerable<Tool> tools = _context.Tools;
            IEnumerable<Category> categories = _context.Categories;
            IEnumerable<Address> locations = _context.Addresses;
            List<ToolImage> images = _context.ToolImages.ToList();
            foreach (Advertisement a in advertisements)
            {

                a.Owner = owners.Single(x => x.Id == a.OwnerId);
                //incluziune multipla (Advertisement contine User si User contine Advertisement)
                a.Owner.Advertisements = null;
                a.Tool = tools.SingleOrDefault(x => x.ToolId == a.ToolId);
                a.Tool.Images = images.FindAll(x => x.ToolId == a.ToolId);
                foreach (ToolImage ti in a.Tool.Images)
                {
                    //incluziune multipla (Tool contine ToolImage si ToolImage contine Tool)
                    ti.Tool = null;
                }
                a.Category = categories.SingleOrDefault(x => x.CategoryId == a.CategoryId);
                a.Location = locations.SingleOrDefault(x => x.AddressId == a.LocationId);
            }
            var comp = StringComparison.OrdinalIgnoreCase;
            foreach (Advertisement a in advertisements)
            {
                if (filters.searchFilter == null || a.Title.Contains(filters.searchFilter, comp))
                {
                    filteredAdvertisements.Add(a);
                }
            }

            if (filters.categoryFilter != null && filteredAdvertisements.Count() != 0)
            {
                foreach (Advertisement a in filteredAdvertisements.ToList())
                {
                    if (a.Category.Name != filters.categoryFilter)
                    {
                        filteredAdvertisements.Remove(a);
                    }
                }
            }
            if (filters.availableFilter == true && filteredAdvertisements.Count() != 0)
            {
                foreach (Advertisement a in filteredAdvertisements.ToList())
                {
                    if (a.Tool.IsAvailable == false)
                    {
                        filteredAdvertisements.Remove(a);
                    }
                }
            }
            return filteredAdvertisements;
        }

        // GET: api/Advertisements
        [HttpGet]
        public IEnumerable<Advertisement> GetAdvertisements()
        {
            IEnumerable<Advertisement> advertisements = _context.Advertisements;
            IEnumerable<User> owners = _context.Users;
            IEnumerable<Tool> tools = _context.Tools;
            IEnumerable<Category> categories = _context.Categories;
            IEnumerable<Address> locations = _context.Addresses;
            List<ToolImage> images = _context.ToolImages.ToList();
            foreach (Advertisement a in advertisements)
            {

                a.Owner = owners.Single(x => x.Id == a.OwnerId);
                //incluziune multipla (Advertisement contine User si User contine Advertisement)
                a.Owner.Advertisements = null;
                a.Tool = tools.SingleOrDefault(x => x.ToolId == a.ToolId);
                a.Tool.Images = images.FindAll(x => x.ToolId == a.ToolId);
                foreach (ToolImage ti in a.Tool.Images)
                {
                    //incluziune multipla (Tool contine ToolImage si ToolImage contine Tool)
                    ti.Tool = null;
                }
                a.Category = categories.SingleOrDefault(x => x.CategoryId == a.CategoryId);
                a.Location = locations.SingleOrDefault(x => x.AddressId == a.LocationId);
            }
            return advertisements;
        }

        // GET: api/Advertisements/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAdvertisement([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var advertisement = await _context.Advertisements.FindAsync(id);

            if (advertisement == null)
            {
                return NotFound();
            }

            return Ok(advertisement);
        }

        // PUT: api/Advertisements/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdvertisement([FromRoute] int id, [FromBody] Advertisement advertisement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != advertisement.Id)
            {
                return BadRequest();
            }

            _context.Entry(advertisement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdvertisementExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Advertisements
        [HttpPost]
        public async Task<IActionResult> PostAdvertisement([FromBody] Advertisement advertisement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Advertisements.Add(advertisement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAdvertisement", new { id = advertisement.Id }, advertisement);
        }

        // DELETE: api/Advertisements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdvertisement([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var advertisement = await _context.Advertisements.FindAsync(id);
            if (advertisement == null)
            {
                return NotFound();
            }

            _context.Advertisements.Remove(advertisement);
            await _context.SaveChangesAsync();

            return Ok(advertisement);
        }

        private bool AdvertisementExists(int id)
        {
            return _context.Advertisements.Any(e => e.Id == id);
        }
    }
}