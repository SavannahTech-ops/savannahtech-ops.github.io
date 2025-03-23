
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Cpu, BarChart4, PenTool } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    const elementsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (statsRef.current) elementsObserver.observe(statsRef.current);
    if (servicesRef.current) elementsObserver.observe(servicesRef.current);
    
    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (statsRef.current) elementsObserver.unobserve(statsRef.current);
      if (servicesRef.current) elementsObserver.unobserve(servicesRef.current);
    };
  }, []);
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-36 md:pb-24 relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10" />
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
              Web Development & AI Automation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with <span className="text-primary">Digital Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              SavannahPrime Agency delivers custom web solutions and AI-powered automation that help businesses thrive in the digital era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="button-hover-effect bg-primary text-white px-6 py-3 rounded-md font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                Get a Quote
              </Link>
              <Link
                to="/services"
                className="border border-border hover:border-primary px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2 group"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-secondary/50" ref={statsRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <p className="text-4xl font-bold text-primary mb-2">3+</p>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <p className="text-4xl font-bold text-primary mb-2">10+</p>
              <p className="text-muted-foreground">Successful Projects</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-background" ref={servicesRef}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-muted-foreground">
              We offer a comprehensive range of web development and AI solutions to elevate your online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Website Development"
              description="Custom websites tailored for your business, including domain registration and hosting services."
              icon={<Code className="h-6 w-6" />}
              link="/services"
              delay={0}
            />
            
            <ServiceCard
              title="CMS Development"
              description="Custom-built content management systems for blogs, eCommerce, or business platforms."
              icon={<Database className="h-6 w-6" />}
              link="/services"
              delay={1}
            />
            
            <ServiceCard
              title="AI Automation"
              description="AI-powered chatbots, workflow automation, and data analytics tools for business efficiency."
              icon={<Cpu className="h-6 w-6" />}
              link="/services"
              delay={2}
            />
            
            <ServiceCard
              title="Digital Marketing"
              description="SEO optimization, social media marketing, and Google Ads strategies for better online visibility."
              icon={<BarChart4 className="h-6 w-6" />}
              link="/services"
              delay={3}
            />
            
            <ServiceCard
              title="UI/UX Design"
              description="Professional design services for applications and websites that enhance user experience."
              icon={<PenTool className="h-6 w-6" />}
              link="/services"
              delay={4}
            />
            
            <div className="rounded-lg p-6 bg-primary/5 border border-primary/20 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-semibold mb-3">Need a Custom Solution?</h3>
              <p className="text-muted-foreground mb-4">
                Let's discuss your specific requirements and create a tailored solution for your business.
              </p>
              <Link
                to="/contact"
                className="bg-primary text-white px-5 py-2.5 rounded-md font-medium transition-all hover:shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-muted-foreground">
              We follow a structured process to ensure your project succeeds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="rounded-lg p-6 bg-card border border-border relative">
              <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">1</span>
              <h3 className="text-xl font-semibold mb-3 mt-2">Discovery</h3>
              <p className="text-muted-foreground">
                We understand your business goals, target audience, and project requirements.
              </p>
            </div>
            
            <div className="rounded-lg p-6 bg-card border border-border relative">
              <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">2</span>
              <h3 className="text-xl font-semibold mb-3 mt-2">Planning</h3>
              <p className="text-muted-foreground">
                We create a detailed roadmap and technical specifications for your project.
              </p>
            </div>
            
            <div className="rounded-lg p-6 bg-card border border-border relative">
              <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">3</span>
              <h3 className="text-xl font-semibold mb-3 mt-2">Development</h3>
              <p className="text-muted-foreground">
                Our expert team builds your solution with a focus on quality and performance.
              </p>
            </div>
            
            <div className="rounded-lg p-6 bg-card border border-border relative">
              <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">4</span>
              <h3 className="text-xl font-semibold mb-3 mt-2">Launch & Support</h3>
              <p className="text-muted-foreground">
                We deploy your solution and provide ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="SavannahPrime transformed our online presence with a stunning website that perfectly captures our brand. Their attention to detail and technical expertise is impressive."
              name="David Kamau"
              company="TechSolutions Ltd"
              rating={5}
              delay={0}
            />
            
            <TestimonialCard
              quote="The AI chatbot SavannahPrime built for our customer service has reduced response time by 70% and improved customer satisfaction significantly."
              name="Sarah Wanjiku"
              company="RetailMaster Kenya"
              rating={5}
              delay={1}
            />
            
            <TestimonialCard
              quote="Working with SavannahPrime was a game-changer for our business. Their CMS solution simplified our content management and increased our team's productivity."
              name="Michael Odhiambo"
              company="Media Insights"
              rating={4}
              delay={2}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our web development and AI automation solutions can help your business grow.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-3 rounded-md font-medium text-lg hover:shadow-lg hover:shadow-primary/20 transition-all inline-block"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
