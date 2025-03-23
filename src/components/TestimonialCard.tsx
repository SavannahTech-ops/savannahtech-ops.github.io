
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  rating: number;
  profileImage?: string;
  className?: string;
  isAnimated?: boolean;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  company,
  rating,
  profileImage,
  className,
  isAnimated = true,
  delay = 0
}) => {
  return (
    <div
      className={cn(
        "glass-card rounded-lg p-6 relative",
        isAnimated && "fade-up stagger-item",
        className
      )}
      style={{ animationDelay: isAnimated ? `${delay * 0.1}s` : '0s' }}
    >
      {/* Quotation mark */}
      <div className="absolute top-4 right-4 text-5xl leading-none text-primary/10 font-serif">
        "
      </div>
      
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "text-primary fill-primary" : "text-muted-foreground"
            )}
          />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-foreground/90 mb-6 relative z-10">"{quote}"</p>
      
      {/* Author info */}
      <div className="flex items-center">
        {profileImage ? (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-border">
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 font-semibold">
            {name.charAt(0)}
          </div>
        )}
        
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
