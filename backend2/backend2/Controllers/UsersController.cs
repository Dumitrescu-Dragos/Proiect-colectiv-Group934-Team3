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
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using AutoMapper.QueryableExtensions;
using AutoMapper;

namespace backend2.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public IEnumerable<User> GetUsers()
        {
            return _context.Users;
        }

        // GET: api/Users/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // PUT: api/Users/5
        [AllowAnonymous]
        [HttpPut("{inviteId}")]
        public async Task<IActionResult> Signup([FromRoute] string inviteId, [FromBody] UserRegisterDTO user)
        {
            Console.Out.WriteLine(1);
            if (!ModelState.IsValid)
            {
                Console.Out.WriteLine(2);
                return BadRequest(ModelState);
            }
            Console.Out.WriteLine(3);

            User user_to_register = new Model.User();
            Console.Out.WriteLine(4);
            Mapper.Map(user, user_to_register);
            Console.Out.WriteLine(5);

            //search and delete invite id
            Invite givenInv = _context.Invites.SingleOrDefault(x => x.InviteId == inviteId);

            Console.Out.WriteLine(6);
            if (givenInv == null)
            {
                Console.Out.WriteLine(7);
                return BadRequest(ModelState);
            }

            Console.Out.WriteLine(8);
            _context.Invites.Remove(givenInv);

            //invite id confirmed
            //add user

            Console.Out.WriteLine(9);
            _context.Users.Add(user_to_register);
            Console.Out.WriteLine(10);
            await _context.SaveChangesAsync();

            Console.Out.WriteLine(11);
            _context.Entry(user).State = EntityState.Modified;

            Console.Out.WriteLine(12);
            return NoContent();
        }

        // POST: api/Users
        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] UserLoginDTO user)
        {
            Console.Out.WriteLine(user.ToString());
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var foundUser = _context.Users.SingleOrDefault(x => x.Email == user.Email);

            // check if username exists
            if (foundUser == null)
                return null;

            // check if password is correct
            if (foundUser.Password != user.Password)
                return null;

            // authentication successful
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("parola mega secreta");
            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity(new[] {
                    new Claim(ClaimTypes.Name, foundUser.Id.ToString())
                }),
                Expires = DateTime.Now.AddDays(3),
                SigningCredentials = new SigningCredentials( new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);
            return Ok(tokenString);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            int thisuserid = int.Parse(this.User.Claims.First(i => i.Type == ClaimTypes.Name).Value);
            if(thisuserid != id)
            {
                return BadRequest(ModelState);
            }
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return Ok(user);
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}