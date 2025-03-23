
import { CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { cn } from '@/lib/utils';

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: {
    included: string[];
    excluded?: string[];
  };
  buttonText: string;
  buttonLink: string;
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  buttonLink,
  isPopular = false
}) => {
  return (
    <div className={cn(
      "rounded-lg border relative transition-all duration-300 hover:shadow-lg p-8",
      isPopular 
        ? "border-primary shadow-md shadow-primary/10 bg-primary/5 z-10" 
        : "border-border bg-card hover:border-primary/20"
    )}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      
      <div className="mb-4">
        {price !== "Custom" ? (
          <>
            <span className="text-4xl font-bold text-foreground">{price}</span>
            <span className="text-muted-foreground ml-1">KSH</span>
          </>
        ) : (
          <span className="text-3xl font-bold text-foreground">Custom</span>
        )}
      </div>
      
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.included.map((feature, index) => (
          <li key={`included-${index}`} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
        
        {features.excluded?.map((feature, index) => (
          <li key={`excluded-${index}`} className="flex items-start text-muted-foreground">
            <XCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link
        to={buttonLink}
        className={cn(
          "block text-center py-3 px-6 rounded-md font-medium transition-all",
          isPopular 
            ? "bg-primary text-white hover:shadow-md hover:shadow-primary/20" 
            : "border border-primary/20 text-primary hover:bg-primary hover:text-white"
        )}
      >
        {buttonText}
      </Link>
    </div>
  );
};

const Pricing = () => {
  const pricingTiers = [
    {
      title: "Website Development",
      price: "28,000",
      description: "Perfect for small businesses looking to establish a professional online presence.",
      features: {
        included: [
          "Custom design and development",
          "Domain registration & hosting",
          "SEO-optimized structure",
          "Mobile-friendly responsive design",
          "Secure HTTPS implementation",
          "Fast-loading optimized performance",
          "Basic analytics integration",
          "Social media integration"
        ],
        excluded: [
          "Advanced CMS features",
          "AI-powered automation",
          "Custom integrations"
        ]
      },
      buttonText: "Get Started",
      buttonLink: "/contact",
      isPopular: false
    },
    {
      title: "CMS Development",
      price: "130,000",
      description: "Comprehensive solution for businesses that need advanced content management capabilities.",
      features: {
        included: [
          "Custom CMS architecture",
          "User-friendly admin dashboard",
          "Content scheduling & management",
          "User role management",
          "Advanced security measures",
          "Third-party integrations",
          "eCommerce capabilities",
          "Training and documentation",
          "3 months of technical support"
        ]
      },
      buttonText: "Get Started",
      buttonLink: "/contact",
      isPopular: true
    },
    {
      title: "AI Solutions",
      price: "Custom",
      description: "Tailored AI automation solutions for businesses looking to streamline operations.",
      features: {
        included: [
          "Custom AI solution development",
          "Integration with existing systems",
          "AI-powered chatbots",
          "Workflow automation",
          "Data analytics dashboards",
          "Machine learning implementation",
          "Personalized consultation",
          "Comprehensive training",
          "Ongoing support and maintenance"
        ]
      },
      buttonText: "Request Quote",
      buttonLink: "/contact",
      isPopular: false
    }
  ];
  
  const faqItems = [
    {
      question: "What is included in the Website Development package?",
      answer: "Our Website Development package includes custom design and development, domain registration and hosting, SEO-optimized structure, mobile-friendly responsive design, secure HTTPS implementation, fast-loading optimized performance, basic analytics integration, and social media integration. It's everything you need to establish a professional online presence."
    },
    {
      question: "How long does it take to develop a CMS solution?",
      answer: "The timeline for CMS development varies depending on the complexity of your requirements. Typically, our CMS projects take between 6-10 weeks from initial consultation to launch. We'll provide you with a detailed timeline during our project planning phase."
    },
    {
      question: "Do you offer maintenance services after the project is completed?",
      answer: "Yes, we offer ongoing maintenance and support services to ensure your website or application continues to perform optimally. Our CMS Development package includes 3 months of technical support, and we offer additional maintenance packages for all our services."
    },
    {
      question: "Can you help with migrating content from my existing website?",
      answer: "Absolutely! We provide content migration services to help transition from your existing website to your new one. This can be included in your project scope or added as an additional service depending on the volume and complexity of content."
    },
    {
      question: "How do you determine pricing for custom AI solutions?",
      answer: "Pricing for AI solutions is based on several factors including the complexity of the AI functionality, integration requirements, data volume, and ongoing support needs. We provide custom quotes after an initial consultation to understand your specific requirements and goals."
    },
    {
      question: "Do I have to pay the full amount upfront?",
      answer: "No, we typically work with a milestone-based payment schedule. For most projects, we require a 50% deposit to begin work, with the remaining balance divided into milestones throughout the project. For larger projects, we can create a more detailed payment schedule."
    }
  ];
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-primary/5 border-b border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent & Flexible Pricing
            </h1>
            <p className="text-lg text-muted-foreground mb-0 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include our commitment to quality and excellence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Pricing Tiers */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingTier
                key={index}
                title={tier.title}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                buttonText={tier.buttonText}
                buttonLink={tier.buttonLink}
                isPopular={tier.isPopular}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-muted-foreground">
              Enhance your project with these additional services and features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive digital marketing strategies including SEO, social media, and Google Ads management.
              </p>
              <p className="font-medium">Starting from <span className="text-primary">Custom</span></p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold mb-3">Branding & UI/UX Design</h3>
              <p className="text-muted-foreground mb-4">
                Professional branding services including logo design, brand identity, and UI/UX design.
              </p>
              <p className="font-medium">Starting from <span className="text-primary">Custom</span></p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-3">Maintenance & Support</h3>
              <p className="text-muted-foreground mb-4">
                Ongoing maintenance, updates, and technical support for your website or application.
              </p>
              <p className="font-medium">Starting from <span className="text-primary">5,000 KSH</span> monthly</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold mb-3">Content Creation</h3>
              <p className="text-muted-foreground mb-4">
                Professional content writing and multimedia creation for your website or marketing campaigns.
              </p>
              <p className="font-medium">Starting from <span className="text-primary">Custom</span></p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold mb-3">E-commerce Integration</h3>
              <p className="text-muted-foreground mb-4">
                Add e-commerce functionality to your website with payment processing and inventory management.
              </p>
              <p className="font-medium">Starting from <span className="text-primary">45,000 KSH</span></p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-semibold mb-3">Training & Workshops</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive training sessions and workshops for your team to manage your digital assets.
              </p>
              <p className="font-medium">Starting from <span className="text-primary">15,000 KSH</span> per session</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Have questions? We've got answers to help you make the right decision.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Quote Section */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us for a custom quote tailored to your specific business requirements and goals.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-primary/20 inline-block"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Pricing;
