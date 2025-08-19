import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "DJ Ananya played a perfect mix of Bollywood and Tamil hits at our wedding — everyone was on the floor!",
      client: "Priya & Arjun",
      initials: "P&A"
    },
    {
      quote: "We loved how she balanced Western and Indian tracks. My guests didn't want the night to end!",
      client: "Rahul & Megha",
      initials: "R&M"
    },
    {
      quote: "Professional, energetic, and such a fun vibe! She made our corporate party a huge success.",
      client: "TechCorp Pittsburgh",
      initials: "TC"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-dj-card-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="testimonials-title">
            Client Love
          </h2>
          <p className="text-xl text-gray-300" data-testid="testimonials-subtitle">
            Hear what clients say about their unforgettable experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-dj-dark rounded-2xl p-8 shadow-2xl relative card-hover-effect"
              data-testid={`testimonial-${index}`}
            >
              <div className="text-dj-secondary text-4xl mb-4" data-testid={`quote-mark-${index}`}>
                "
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed" data-testid={`quote-${index}`}>
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-dj-primary to-dj-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold" data-testid={`client-initials-${index}`}>
                    {testimonial.initials}
                  </span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold" data-testid={`client-name-${index}`}>
                    {testimonial.client}
                  </p>
                  <div className="flex text-dj-secondary" data-testid={`rating-${index}`}>
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
