
import { Mail, Phone } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import BookingButton from '@/components/BookingButton';

const Contact = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-primary/5 border-b border-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a project in mind? Contact us and let's discuss how we can help bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+254704062393" className="button-hover-effect px-6 py-3 rounded-md font-medium bg-primary text-white hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                Call Us
              </a>
              <a href="mailto:sales@savannahprimeagency.tech" className="button-hover-effect px-6 py-3 rounded-md font-medium border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
              <BookingButton variant="secondary" size="lg" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <ContactInfo />
        </div>
      </section>
      
      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below, and we'll get back to you as soon as possible.
              </p>
              
              <ContactForm />
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold mb-6">Location</h2>
              <p className="text-muted-foreground mb-8">
                Visit our office in Nairobi, Kenya. We're located in the heart of the city.
              </p>
              
              <div className="rounded-lg overflow-hidden border border-border h-[400px] bg-card shadow-sm">
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
            <div className="flex flex-wrap justify-center gap-4">
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
              <BookingButton variant="secondary" size="lg" />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
