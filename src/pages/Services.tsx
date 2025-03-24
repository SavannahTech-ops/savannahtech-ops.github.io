import { Code, Database, Cpu, BarChart4, PenTool, Server, Shield, Globe, Smartphone, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { cn } from '@/lib/utils';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
}

const ServiceItem: React.FC<ServiceProps> = ({ icon, title, description, features, isHighlighted = false }) => {
  return (
    <div className={cn(
      "rounded-lg border p-8 transition-all duration-300",
      isHighlighted 
        ? "border-primary/20 bg-primary/5 shadow-lg shadow-primary/10" 
        : "border-border bg-card hover:border-primary/20 hover:shadow-md"
    )}>
      <div className={cn(
        "p-3 rounded-md w-fit mb-6",
        isHighlighted ? "bg-primary text-white" : "bg-primary/10 text-primary"
      )}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2 mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link
        to="/contact"
        className={cn(
          "block text-center py-3 px-6 rounded-md font-medium transition-all",
          isHighlighted 
            ? "bg-primary text-white hover:shadow-md hover:shadow-primary/20" 
            : "border border-primary/20 text-primary hover:bg-primary hover:text-white"
        )}
      >
        Get Started
      </Link>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Website Development & Hosting",
      description: "Fully customized websites tailored for businesses, with all the essentials included.",
      features: [
        "Custom design and development",
        "Domain registration & hosting",
        "SEO-optimized structure",
        "Mobile-friendly responsive design",
        "Secure HTTPS implementation",
        "Fast-loading optimized performance",
        "Basic analytics integration",
        "Social media integration"
      ],
      isHighlighted: false
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "CMS Development",
      description: "Custom-built content management systems for blogs, eCommerce, or business platforms.",
      features: [
        "Custom CMS architecture",
        "User-friendly admin dashboard",
        "Content scheduling & management",
        "User role management",
        "Advanced security measures",
        "Third-party integrations",
        "eCommerce capabilities",
        "Training and documentation"
      ],
      isHighlighted: true
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI Automation & Business Solutions",
      description: "Intelligent solutions that streamline operations and enhance customer experience.",
      features: [
        "AI-powered chatbots",
        "Workflow automation tools",
        "Data analytics solutions",
        "Machine learning integration",
        "Business process optimization",
        "Custom AI model development",
        "Integration with existing systems",
        "Ongoing maintenance and updates"
      ],
      isHighlighted: false
    },
    {
      icon: <BarChart4 className="h-6 w-6" />,
      title: "Digital Marketing & SEO",
      description: "Comprehensive digital marketing strategies to boost your online presence.",
      features: [
        "SEO optimization",
        "Social media marketing",
        "Email marketing automation",
        "Google Ads management",
        "Content marketing strategy",
        "Conversion rate optimization",
        "Analytics and reporting",
        "Competitor analysis"
      ],
      isHighlighted: false
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Branding & UI/UX Design",
      description: "Professional design services to establish a strong brand identity and enhance user experience.",
      features: [
        "Logo design",
        "Brand identity development",
        "UI/UX design for apps and websites",
        "Graphic design for marketing",
        "Design system creation",
        "User research and testing",
        "Wireframing and prototyping",
        "Visual storytelling"
      ],
      isHighlighted: false
    }
  ];
  
  const additionalFeatures = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Enhanced Security",
      description: "Advanced security measures to protect your website from threats and vulnerabilities."
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud hosting solutions that grow with your business needs."
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Multilingual Support",
      description: "Build websites that cater to global audiences with multilingual capabilities."
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Progressive Web Apps",
      description: "Create app-like experiences for your users directly through the web browser."
    },
    {
      icon: <RefreshCw className="h-5 w-5" />,
      title: "Maintenance Plans",
      description: "Regular updates and support to ensure your website remains secure and functional."
    }
  ];
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-primary/5 border-b border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Premium Services
            </h1>
            <p className="text-lg text-muted-foreground mb-0 max-w-2xl mx-auto">
              Discover our comprehensive range of web development and AI automation services designed to help your business thrive.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                isHighlighted={service.isHighlighted}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Features Section */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Features</h2>
            <p className="text-muted-foreground">
              Enhance your project with these additional features and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-sm animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex mb-4">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-muted-foreground">
              We follow a structured approach to ensure success for every project.
            </p>
          </div>
          
          <div className="relative">
            {/* Line connecting the steps */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12 md:space-y-0">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                <div className="md:text-right animate-fade-in-up">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Step 1</span>
                  <h3 className="text-2xl font-bold mt-1 mb-3">Discovery & Requirements</h3>
                  <p className="text-muted-foreground">
                    We start by understanding your business goals, target audience, and specific project requirements. This phase includes research, stakeholder interviews, and defining success metrics.
                  </p>
                </div>
                
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                
                <div className="mt-6 md:mt-0">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h4 className="font-semibold mb-2">During this phase, we:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Conduct in-depth stakeholder interviews</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Research your market and competitors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Define clear project objectives and KPIs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative md:mt-20">
                <div className="order-last md:order-first mt-6 md:mt-0">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h4 className="font-semibold mb-2">During this phase, we:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Create detailed technical specifications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Design wireframes and prototypes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Establish project timeline and milestones</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                
                <div className="md:text-right animate-fade-in-up">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Step 2</span>
                  <h3 className="text-2xl font-bold mt-1 mb-3">Planning & Design</h3>
                  <p className="text-muted-foreground">
                    We create a detailed roadmap and design blueprint for your project. This includes wireframing, UI/UX design, technical planning, and setting clear milestones.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative md:mt-20">
                <div className="md:text-right animate-fade-in-up">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Step 3</span>
                  <h3 className="text-2xl font-bold mt-1 mb-3">Development & Testing</h3>
                  <p className="text-muted-foreground">
                    Our expert team builds your solution with a focus on quality, performance, and best practices. This phase includes regular reviews, rigorous testing, and quality assurance.
                  </p>
                </div>
                
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                
                <div className="mt-6 md:mt-0">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h4 className="font-semibold mb-2">During this phase, we:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Implement core functionality and features</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Conduct thorough testing and QA</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Refine based on client feedback</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative md:mt-20">
                <div className="order-last md:order-first mt-6 md:mt-0">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h4 className="font-semibold mb-2">During this phase, we:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Deploy to production environment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Provide training and documentation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Establish ongoing support protocols</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
                
                <div className="md:text-right animate-fade-in-up">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Step 4</span>
                  <h3 className="text-2xl font-bold mt-1 mb-3">Launch & Support</h3>
                  <p className="text-muted-foreground">
                    We deploy your solution and provide comprehensive training, documentation, and ongoing support to ensure long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and how we can help your business grow with our web development and AI solutions.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
