using Microsoft.EntityFrameworkCore;
using BlogPlatform.Models;

namespace BlogPlatform.Data
{
    public class BlogDbContext : DbContext
    {
        public BlogDbContext(DbContextOptions<BlogDbContext> options) : base(options) { }

        public DbSet<BlogPost> BlogPosts { get; set; }
    }
}