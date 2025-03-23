
import { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import PortfolioItem from '@/components/PortfolioItem';
import { cn } from '@/lib/utils';

// Sample portfolio data
const portfolioData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A custom e-commerce solution with integrated payment processing and inventory management.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    category: "Web Development",
    link: "#"
  },
  {
    id: 2,
    title: "AI-Powered Customer Service",
    description: "Implemented a chatbot solution that reduced customer service response time by 70%.",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "AI Automation",
    link: "#"
  },
  {
    id: 3,
    title: "Corporate CMS Platform",
    description: "A custom content management system for a large corporate client with multiple user roles.",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    category: "CMS Development",
    link: "#"
  },
  {
    id: 4,
    title: "Real Estate Website",
    description: "A property listing platform with advanced search functionality and virtual tours.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    category: "Web Development",
    link: "#"
  },
  {
    id: 5,
    title: "Data Analytics Dashboard",
    description: "An AI-powered analytics solution providing real-time business insights and reporting.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "AI Automation",
    link: "#"
  },
  {
    id: 6,
    title: "Healthcare Portal",
    description: "A secure patient portal for a healthcare provider with appointment scheduling and medical records.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Web Development",
    link: "#"
  },
  {
    id: 7,
    title: "Marketing Automation",
    description: "Email and social media marketing automation for a retail client, increasing engagement by 45%.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Digital Marketing",
    link: "#"
  },
  {
    id: 8,
    title: "Restaurant Ordering System",
    description: "A custom online ordering and reservation system for a chain of restaurants.",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    category: "Web Development",
    link: "#"
  },
  {
    id: 9,
    title: "Brand Identity Design",
    description: "Complete brand identity design including logo, color palette, and marketing materials.",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "UI/UX Design",
    link: "#"
  }
];

// Extract unique categories for the filter
const categories = ["All", ...new Set(portfolioData.map(item => item.category))];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(portfolioData);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading effect
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    // Filter projects based on selected category
    if (selectedCategory === "All") {
      setFilteredProjects(portfolioData);
    } else {
      setFilteredProjects(
        portfolioData.filter(project => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-primary/5 border-b border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg text-muted-foreground mb-0 max-w-2xl mx-auto">
              Explore our successful projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full transition-all text-sm font-medium",
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-secondary hover:bg-primary/10 text-foreground/80 hover:text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="rounded-lg border border-border bg-card h-64 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <PortfolioItem
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  category={project.category}
                  link={project.link}
                  delay={index}
                />
              ))}
            </div>
          )}
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-muted-foreground">
              Dive deeper into how our solutions have made a real impact for our clients.
            </p>
          </div>
          
          {/* Featured Case Study */}
          <div className="bg-card border border-border rounded-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                  alt="E-Commerce Platform" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 lg:p-10">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Featured Project
                </span>
                <h3 className="text-2xl font-bold mb-3">E-Commerce Transformation</h3>
                <p className="text-muted-foreground mb-6">
                  A leading retail company approached us to revamp their outdated e-commerce platform. We delivered a modern, user-friendly solution that increased online sales by 135% within the first quarter.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>135% increase in online sales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>42% improvement in conversion rate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>68% reduction in cart abandonment</span>
                  </li>
                </ul>
                <a href="#" className="inline-block px-5 py-2 bg-primary text-white rounded-md font-medium hover:shadow-md transition-all">
                  Read Case Study
                </a>
              </div>
            </div>
          </div>
          
          {/* Additional Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg overflow-hidden animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="AI Customer Service" 
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AI-Powered Support</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  How we helped a service company reduce response time by 70% with AI chatbots.
                </p>
                <a href="#" className="text-primary font-medium text-sm hover:underline">
                  Read Case Study
                </a>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <img 
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="CMS Platform" 
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Corporate CMS Solution</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Streamlining content management for a multinational corporation.
                </p>
                <a href="#" className="text-primary font-medium text-sm hover:underline">
                  Read Case Study
                </a>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Data Analytics" 
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Data-Driven Decisions</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  How our analytics dashboard helped a client increase operational efficiency by 40%.
                </p>
                <a href="#" className="text-primary font-medium text-sm hover:underline">
                  Read Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Hear directly from the businesses we've helped succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="p-6 rounded-lg bg-card border border-border animate-fade-in-up">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary fill-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground mb-4">
                "SavannahPrime delivered an exceptional e-commerce platform that transformed our business. Their attention to detail and technical expertise helped us achieve results beyond our expectations."
              </p>
              <footer className="flex items-center">
                <div className="mr-4 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                  D
                </div>
                <div>
                  <cite className="not-italic font-semibold">David Kamau</cite>
                  <p className="text-sm text-muted-foreground">CEO, TechSolutions Ltd</p>
                </div>
              </footer>
            </blockquote>
            
            <blockquote className="p-6 rounded-lg bg-card border border-border animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary fill-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground mb-4">
                "The AI chatbot SavannahPrime developed for our customer service has completely transformed how we interact with our customers. Response times have decreased dramatically, and customer satisfaction is at an all-time high."
              </p>
              <footer className="flex items-center">
                <div className="mr-4 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                  S
                </div>
                <div>
                  <cite className="not-italic font-semibold">Sarah Wanjiku</cite>
                  <p className="text-sm text-muted-foreground">Operations Manager, RetailMaster Kenya</p>
                </div>
              </footer>
            </blockquote>
            
            <blockquote className="p-6 rounded-lg bg-card border border-border animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex mb-4">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary fill-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-foreground mb-4">
                "Working with SavannahPrime was a game-changer for our content management. Their CMS solution is intuitive and has significantly improved our team's productivity. The only reason for 4 stars is that we had a few minor delays in the project timeline."
              </p>
              <footer className="flex items-center">
                <div className="mr-4 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                  M
                </div>
                <div>
                  <cite className="not-italic font-semibold">Michael Odhiambo</cite>
                  <p className="text-sm text-muted-foreground">Content Director, Media Insights</p>
                </div>
              </footer>
            </blockquote>
            
            <blockquote className="p-6 rounded-lg bg-card border border-border animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary fill-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground mb-4">
                "The real estate platform SavannahPrime built for us has completely transformed our business. The virtual tour feature and advanced search functionality have significantly improved user engagement and property inquiries."
              </p>
              <footer className="flex items-center">
                <div className="mr-4 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                  J
                </div>
                <div>
                  <cite className="not-italic font-semibold">James Mwangi</cite>
                  <p className="text-sm text-muted-foreground">Director, Prime Properties</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our web development and AI automation expertise.
            </p>
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-primary/20 inline-block"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Portfolio;
