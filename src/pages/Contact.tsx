
import { useState } from 'react';
import { Mail, Phone, MapPin, Check, Calendar } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showCalendly, setShowCalendly] = useState(false);
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
          });
        }, 5000);
      }, 1500);
    }
  };

  const toggleCalendly = () => {
    setShowCalendly(!showCalendly);
  };
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-primary/5 border-b border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground mb-0 max-w-2xl mx-auto">
              Have a project in mind? Contact us and let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in-up">
            <div className="p-6 rounded-lg bg-card border border-border flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground mb-3">Give us a call</p>
              <a href="tel:+254704062393" className="text-primary hover:underline transition-colors block">
                +254 704 062 393
              </a>
              <a href="tel:+254702964334" className="text-primary hover:underline transition-colors block mt-1">
                +254 702 964 334
              </a>
            </div>
            
            <div className="p-6 rounded-lg bg-card border border-border flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground mb-3">Send us an email</p>
              <a href="mailto:sales@savannahprimeagency.tech" className="text-primary hover:underline transition-colors">
                sales@savannahprimeagency.tech
              </a>
            </div>
            
            <div className="p-6 rounded-lg bg-card border border-border flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground mb-3">Visit our office</p>
              <p>Nairobi, Kenya</p>
            </div>
            
            <div className="p-6 rounded-lg bg-card border border-border flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Book a Call</h3>
              <p className="text-muted-foreground mb-3">Schedule a meeting</p>
              <button 
                onClick={toggleCalendly}
                className="text-primary hover:underline transition-colors flex items-center"
              >
                Book a 30-min consultation
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Calendly Integration */}
      {showCalendly && (
        <section className="py-8 bg-background">
          <div className="container-custom">
            <div className="bg-card border border-border rounded-lg overflow-hidden animate-fade-in-up">
              <div className="p-4 bg-primary/5 border-b border-border flex justify-between items-center">
                <h3 className="text-lg font-semibold">Schedule a 30-minute consultation</h3>
                <button 
                  onClick={toggleCalendly} 
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>
              <div className="calendly-container" style={{ height: '680px' }}>
                <iframe
                  src="https://calendly.com/savannahprimeagency/30min"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Calendly Scheduling"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below, and we'll get back to you as soon as possible.
              </p>
              
              {isSubmitted ? (
                <div className="p-6 rounded-lg bg-primary/10 border border-primary/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary mx-auto flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
                        errors.name ? "border-red-500" : "border-border"
                      )}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
                          errors.email ? "border-red-500" : "border-border"
                        )}
                        placeholder="email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="cms">CMS Development</option>
                      <option value="ai">AI Automation</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="design">Branding & UI/UX Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={cn(
                        "w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
                        errors.message ? "border-red-500" : "border-border"
                      )}
                      placeholder="Tell us about your project..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full px-6 py-3 rounded-md font-medium text-white bg-primary transition-all",
                      isSubmitting 
                        ? "opacity-70 cursor-not-allowed" 
                        : "hover:shadow-lg hover:shadow-primary/20"
                    )}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold mb-6">Location</h2>
              <p className="text-muted-foreground mb-8">
                Visit our office in Nairobi, Kenya. We're located in the heart of the city.
              </p>
              
              <div className="rounded-lg overflow-hidden border border-border h-[400px] bg-card">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853900206!2d36.68258348796465!3d-1.3028602793235246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1629901387656!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              From concept to launch, we're here to help bring your vision to life with our expertise in web development and AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254704062393"
                className="button-hover-effect px-6 py-3 rounded-md font-medium bg-primary text-white hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Us
              </a>
              <a
                href="mailto:sales@savannahprimeagency.tech"
                className="button-hover-effect px-6 py-3 rounded-md font-medium border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
