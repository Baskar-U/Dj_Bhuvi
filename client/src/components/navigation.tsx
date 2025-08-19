import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-dj-dark/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 
              className="text-2xl font-bold gradient-text cursor-pointer" 
              onClick={() => scrollToSection('hero')}
              data-testid="nav-logo"
            >
              DJ Ananya
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="hover:text-dj-primary transition-colors"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('events')} 
                className="hover:text-dj-primary transition-colors"
                data-testid="nav-events"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('music')} 
                className="hover:text-dj-primary transition-colors"
                data-testid="nav-music"
              >
                Music
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="hover:text-dj-primary transition-colors"
                data-testid="nav-testimonials"
              >
                Reviews
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-dj-primary hover:bg-dj-primary-hover px-4 py-2 rounded-full transition-colors"
                data-testid="nav-book"
              >
                Book Now
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="nav-mobile-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dj-dark/95 backdrop-blur-md">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="block w-full text-left px-3 py-2 hover:text-dj-primary transition-colors"
                data-testid="nav-mobile-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('events')} 
                className="block w-full text-left px-3 py-2 hover:text-dj-primary transition-colors"
                data-testid="nav-mobile-events"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('music')} 
                className="block w-full text-left px-3 py-2 hover:text-dj-primary transition-colors"
                data-testid="nav-mobile-music"
              >
                Music
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="block w-full text-left px-3 py-2 hover:text-dj-primary transition-colors"
                data-testid="nav-mobile-testimonials"
              >
                Reviews
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-dj-primary hover:bg-dj-primary-hover mt-2"
                data-testid="nav-mobile-book"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
