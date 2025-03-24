
import { useState } from 'react';
import { BookOpen, Calendar, User, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import BlogCard from '@/components/BlogCard';
import { cn } from '@/lib/utils';

const blogPosts = [
  {
    id: 1,
    title: "Web Development Trends in 2024",
    excerpt: "Explore the latest web development trends that are reshaping the digital landscape in 2024.",
    date: "June 15, 2024",
    author: "Alex Johnson",
    category: "Web Development",
    tags: ["React", "NextJS", "TailwindCSS"],
    featuredImage: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "The Impact of AI on Modern Business",
    excerpt: "How artificial intelligence is transforming business operations and customer experiences in unexpected ways.",
    date: "June 10, 2024",
    author: "Sarah Miller",
    category: "AI & Automation",
    tags: ["AI", "Machine Learning", "Business"],
    featuredImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Effective SEO Strategies for Small Businesses",
    excerpt: "Learn how small businesses can leverage SEO to increase their online visibility and attract more customers.",
    date: "June 5, 2024",
    author: "Michael Chang",
    category: "Digital Marketing",
    tags: ["SEO", "Marketing", "Small Business"],
    featuredImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "The Importance of User Experience in Website Design",
    excerpt: "Discover why prioritizing user experience is crucial for the success of your website and overall business.",
    date: "May 28, 2024",
    author: "Emily Rodriguez",
    category: "UI/UX Design",
    tags: ["UX", "Design", "Conversion"],
    featuredImage: "https://images.unsplash.com/photo-1596742578443-7682ef7b7266?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Building Secure Web Applications",
    excerpt: "Essential security practices and tools for developing robust and secure web applications in an increasingly threatening digital landscape.",
    date: "May 20, 2024",
    author: "David Wilson",
    category: "Web Security",
    tags: ["Security", "Web Development", "Best Practices"],
    featuredImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "E-commerce Solutions for Modern Retailers",
    excerpt: "A comprehensive guide to implementing effective e-commerce solutions that drive sales and enhance customer satisfaction.",
    date: "May 15, 2024",
    author: "Sophia Lee",
    category: "E-commerce",
    tags: ["E-commerce", "Retail", "Online Business"],
    featuredImage: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    readTime: "8 min read"
  }
];

const categories = [
  "All Categories",
  "Web Development",
  "AI & Automation",
  "Digital Marketing",
  "UI/UX Design",
  "Web Security",
  "E-commerce"
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && (searchQuery === "" || matchesSearch);
  });

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-primary/5 border-b border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-0 max-w-2xl mx-auto">
              Insights, updates, and expert advice on web development, AI solutions, and digital marketing.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Search */}
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Category Pills (Mobile) */}
              <div className="mb-8 overflow-x-auto pb-2 lg:hidden">
                <div className="flex space-x-2 min-w-max">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                        selectedCategory === category
                          ? "bg-primary text-white"
                          : "bg-secondary text-foreground hover:bg-primary/10"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Results Info */}
              <div className="flex justify-between items-center mb-8">
                <p className="text-muted-foreground">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                </p>
                <div className="flex items-center">
                  <span className="hidden md:inline text-muted-foreground mr-2">Sort by:</span>
                  <select className="bg-card border border-border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Oldest First</option>
                  </select>
                </div>
              </div>
              
              {/* Blog Posts Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <BookOpen className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any articles matching your search criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All Categories");
                    }}
                    className="text-primary font-medium hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
              
              {/* Pagination */}
              {filteredPosts.length > 0 && (
                <div className="flex justify-center items-center mt-12 space-x-2">
                  <button className="px-4 py-2 rounded-md border border-border hover:bg-secondary transition-colors">
                    Previous
                  </button>
                  <button className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors">
                    1
                  </button>
                  <button className="px-4 py-2 rounded-md hover:bg-secondary transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 rounded-md hover:bg-secondary transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 rounded-md border border-border hover:bg-secondary transition-colors">
                    Next
                  </button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories (Desktop) */}
              <div className="hidden lg:block mb-8 bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md transition-colors",
                          selectedCategory === category
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-foreground hover:bg-secondary"
                        )}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Popular Tags */}
              <div className="mb-8 bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-3 py-1 bg-secondary rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Featured Post */}
              <div className="mb-8 bg-card border border-border rounded-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Featured post"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary font-medium">Featured</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">
                    <Link to="#" className="hover:text-primary transition-colors">
                      The Future of Web Development: Trends to Watch
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    An in-depth analysis of emerging technologies and methodologies that are shaping the future of web development.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">June 22, 2024</span>
                    <User className="h-4 w-4 mr-1" />
                    <span>James Smith</span>
                  </div>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get the latest articles, updates and offers delivered directly to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help bring your ideas to life with our professional web development and AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Get a Quote
              </Link>
              <Link
                to="/services"
                className="border border-primary/20 text-primary px-8 py-3 rounded-md font-medium transition-all hover:bg-primary hover:text-white"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
