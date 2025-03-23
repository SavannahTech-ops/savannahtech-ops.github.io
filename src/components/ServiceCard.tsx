
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
  isAnimated?: boolean;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link,
  className,
  isAnimated = true,
  delay = 0
}) => {
  return (
    <div 
      className={cn(
        "group rounded-lg p-6 bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/5 hover:border-primary/20 relative overflow-hidden",
        isAnimated && "fade-up stagger-item", 
        className
      )}
      style={{ animationDelay: isAnimated ? `${delay * 0.1}s` : '0s' }}
    >
      <div className="absolute h-1 w-0 bg-primary top-0 left-0 transition-all duration-300 group-hover:w-full"></div>
      
      <div className="p-3 rounded-md bg-primary/10 w-fit mb-4 text-primary">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      
      <Link 
        to={link} 
        className="inline-flex items-center text-primary font-medium group/link"
      >
        Learn more
        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
