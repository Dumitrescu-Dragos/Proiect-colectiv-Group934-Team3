﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend2.Data;
using backend2.Model;
using System.Security.Claims;

namespace backend2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToolsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ToolsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Tools
        [HttpGet]
        public IEnumerable<Tool> GetTools()
        {
            return _context.Tools;
        }

        // GET: api/Tools/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTool([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tool = await _context.Tools.FindAsync(id);

            if (tool == null)
            {
                return NotFound();
            }

            return Ok(tool);
        }

        // PUT: api/Tools/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTool([FromRoute] int id, [FromBody] Tool tool)
        {

            var adv = await _context.Advertisements.FindAsync(id);
            if(adv.OwnerId != int.Parse(this.User.Claims.First(i => i.Type == ClaimTypes.Name).Value))
            {
                return BadRequest(ModelState);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (adv.ToolId != tool.ToolId)
            {
                return BadRequest();
            }

            _context.Entry(tool).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToolExists(tool.ToolId))
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

        // POST: api/Tools
        [HttpPost]
        public async Task<IActionResult> PostTool([FromBody] Tool tool)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Tools.Add(tool);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTool", new { id = tool.ToolId }, tool);
        }

        // DELETE: api/Tools/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTool([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tool = await _context.Tools.FindAsync(id);
            if (tool == null)
            {
                return NotFound();
            }

            _context.Tools.Remove(tool);
            await _context.SaveChangesAsync();

            return Ok(tool);
        }

        private bool ToolExists(int id)
        {
            return _context.Tools.Any(e => e.ToolId == id);
        }
    }
}