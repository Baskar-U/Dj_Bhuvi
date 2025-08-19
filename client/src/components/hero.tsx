import { ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlayDemo = () => {
    // TODO: Implement demo audio player
    alert('Demo player would open here');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="DJ mixing music at energetic party with colorful lights" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dj-dark/90 via-dj-dark/60 to-dj-primary/30"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Where Indian & Western 
            <span className="gradient-text block" data-testid="hero-title-gradient">Beats Come Alive!</span>
          </h1>
        </div>
        
        <div className="animate-fadeIn" style={{animationDelay: '0.3s'}}>
          <p 
            className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed"
            data-testid="hero-subtitle"
          >
            High-energy DJ blending Bollywood, South Indian, Punjabi & Western hits for unforgettable parties.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-bounce-gentle" style={{animationDelay: '0.6s'}}>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-dj-primary hover:bg-dj-primary-hover text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            data-testid="button-book-hero"
          >
            Book Now
          </Button>
          <Button 
            onClick={handlePlayDemo}
            variant="outline"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 border border-white/20"
            data-testid="button-demo"
          >
            <Play className="mr-2 h-5 w-5" />
            Listen Demo Mix
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white text-2xl" data-testid="scroll-indicator" />
      </div>
    </section>
  );
}
