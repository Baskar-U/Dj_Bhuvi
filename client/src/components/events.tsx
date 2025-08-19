export function Events() {
  const events = [
    {
      icon: "🎉",
      title: "Birthday Parties",
      description: "Customized playlists that match the theme and mood of your celebration."
    },
    {
      icon: "💍",
      title: "Weddings & Receptions",
      description: "From baraat beats to reception anthems, she sets the tone for your big day."
    },
    {
      icon: "👯",
      title: "Ladies' Day Out / Girls' Night",
      description: "Fun, upbeat, and unforgettable vibes with a mix of global hits."
    },
    {
      icon: "🎊",
      title: "Cultural Events & Festivals",
      description: "South Indian beats, Bollywood hits, and fusion tracks to celebrate tradition in style."
    },
    {
      icon: "🎶",
      title: "Corporate & Private Parties",
      description: "A professional yet vibrant atmosphere tailored to your guests."
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-dj-dark to-dj-card-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="events-title">
            Events She Rocks
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="events-subtitle">
            From intimate celebrations to grand festivities, DJ Ananya brings the perfect energy to every occasion
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-dj-card-dark rounded-2xl p-8 shadow-2xl card-hover-effect"
              data-testid={`card-event-${index}`}
            >
              <div className="text-5xl mb-4" data-testid={`icon-event-${index}`}>
                {event.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white" data-testid={`title-event-${index}`}>
                {event.title}
              </h3>
              <p className="text-gray-300 leading-relaxed" data-testid={`description-event-${index}`}>
                {event.description}
              </p>
            </div>
          ))}
          
          {/* Special Custom Events Card */}
          <div className="bg-gradient-to-br from-dj-primary to-dj-secondary rounded-2xl p-8 shadow-2xl card-hover-effect text-center" data-testid="card-custom-events">
            <div className="text-5xl mb-4" data-testid="icon-custom-events">✨</div>
            <h3 className="text-2xl font-bold mb-4 text-dj-dark" data-testid="title-custom-events">
              Custom Events
            </h3>
            <p className="text-dj-dark leading-relaxed font-medium" data-testid="description-custom-events">
              Have something special in mind? Let's create the perfect soundtrack for your unique celebration!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
