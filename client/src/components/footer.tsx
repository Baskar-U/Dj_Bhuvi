import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dj-dark border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold gradient-text mb-4" data-testid="footer-title">
            DJ Ananya
          </h3>
          <p className="text-gray-400 mb-6" data-testid="footer-tagline">
            Pittsburgh's Premier Indian & Western Music DJ
          </p>
          <div className="flex justify-center space-x-6 mb-8" data-testid="footer-social">
            <a 
              href="#" 
              className="text-gray-400 hover:text-dj-primary transition-colors"
              data-testid="link-instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-dj-primary transition-colors"
              data-testid="link-facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-dj-primary transition-colors"
              data-testid="link-youtube"
            >
              <Youtube size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm" data-testid="footer-copyright">
            © 2024 DJ Ananya. All rights reserved. | Creating unforgettable moments through music.
          </p>
        </div>
      </div>
    </footer>
  );
}
