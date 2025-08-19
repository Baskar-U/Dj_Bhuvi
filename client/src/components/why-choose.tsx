import { Globe, Volume2, ListMusic, Zap, Handshake, Heart } from "lucide-react";

export function WhyChoose() {
  const reasons = [
    {
      icon: Globe,
      title: "Cultural Fusion Expert",
      description: "Fluent in Bollywood, South Indian, Punjabi, and Western genres for any crowd."
    },
    {
      icon: Volume2,
      title: "Professional Equipment",
      description: "Crystal-clear sound with dazzling lighting setups."
    },
    {
      icon: ListMusic,
      title: "Customized Playlists",
      description: "Tailored to your theme, traditions, and preferences."
    },
    {
      icon: Zap,
      title: "Energy & Passion",
      description: "Keeps the vibe alive and the dance floor full."
    },
    {
      icon: Handshake,
      title: "Stress-Free Experience",
      description: "Professional, friendly, and easy to work with."
    },
    {
      icon: Heart,
      title: "Pittsburgh Local",
      description: "Deep understanding of the local scene and community."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dj-card-dark to-dj-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="why-choose-title">
            Why Choose DJ Ananya?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="text-center p-8" data-testid={`reason-${index}`}>
                <div className="w-20 h-20 bg-gradient-to-br from-dj-primary to-dj-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-3xl text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4" data-testid={`reason-title-${index}`}>
                  {reason.title}
                </h3>
                <p className="text-gray-300" data-testid={`reason-description-${index}`}>
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
