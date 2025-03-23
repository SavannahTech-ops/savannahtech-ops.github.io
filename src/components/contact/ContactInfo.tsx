
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import BookingButton from '../BookingButton';

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in-up">
      <div className="p-6 rounded-lg bg-card border border-border flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
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
      
      <div className="p-6 rounded-lg bg-card border border-border flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Mail className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Email</h3>
        <p className="text-muted-foreground mb-3">Send us an email</p>
        <a href="mailto:sales@savannahprimeagency.tech" className="text-primary hover:underline transition-colors">
          sales@savannahprimeagency.tech
        </a>
      </div>
      
      <div className="p-6 rounded-lg bg-card border border-border flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <MapPin className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Location</h3>
        <p className="text-muted-foreground mb-3">Visit our office</p>
        <p>Nairobi, Kenya</p>
      </div>
      
      <div className="p-6 rounded-lg bg-card border border-border flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Calendar className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Book a Call</h3>
        <p className="text-muted-foreground mb-3">Schedule a meeting</p>
        <BookingButton variant="link" className="text-primary hover:underline transition-colors" />
      </div>
    </div>
  );
};

export default ContactInfo;
