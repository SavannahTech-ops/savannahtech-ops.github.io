
import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface BookingButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const BookingButton = ({ variant = "default", size = "default", className }: BookingButtonProps) => {
  const [showCalendly, setShowCalendly] = useState(false);
  const isMobile = useIsMobile();

  const toggleCalendly = () => {
    setShowCalendly(!showCalendly);
  };

  return (
    <>
      <Button 
        onClick={toggleCalendly}
        variant={variant}
        size={size}
        className={cn("gap-2", className)}
      >
        <Calendar className="h-4 w-4" />
        {isMobile ? "Book" : "Book a Consultation"}
      </Button>

      {showCalendly && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-lg overflow-hidden w-full max-w-4xl animate-fade-in">
            <div className="p-4 bg-primary/5 border-b border-border flex justify-between items-center">
              <h3 className="text-lg font-semibold">Schedule a 30-minute consultation</h3>
              <Button 
                onClick={toggleCalendly} 
                variant="ghost" 
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </Button>
            </div>
            <div className="calendly-container" style={{ height: isMobile ? '580px' : '680px' }}>
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
      )}
    </>
  );
};

export default BookingButton;
