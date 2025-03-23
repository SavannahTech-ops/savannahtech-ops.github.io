
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import BookingButton from './BookingButton';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-3 blur-backdrop shadow-sm' : 'py-4 md:py-6'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-bold relative z-10 group"
        >
          <span className="text-foreground/80 pr-1">Savannah</span>
          <span className="text-primary">Prime</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'relative font-medium transition-colors hover:text-primary text-sm lg:text-base',
                'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full',
                location.pathname === item.path 
                  ? 'text-primary after:w-full' 
                  : 'text-foreground/80'
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <Link
              to="/register"
              className="button-hover-effect bg-primary text-white px-3 py-2 lg:px-4 lg:py-2.5 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-primary/20 text-sm"
            >
              Register
            </Link>
            <BookingButton variant="outline" size="default" />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/register"
            className="button-hover-effect bg-primary text-white px-3 py-2 rounded-md font-medium transition-all text-sm"
          >
            Register
          </Link>
          <BookingButton variant="outline" size="sm" />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-10 focus:outline-none"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-0 md:hidden pt-20">
            <nav className="flex flex-col items-center justify-start h-full space-y-5 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    'text-lg font-medium transition-colors duration-300 py-2',
                    location.pathname === item.path 
                      ? 'text-primary' 
                      : 'text-foreground/80 hover:text-primary'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
