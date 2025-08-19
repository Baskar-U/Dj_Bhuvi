export function Music() {
  const genres = [
    "🎵 Bollywood Hits & Remixes",
    "🎵 Tamil, Telugu & Malayalam Superhits",
    "🎵 Punjabi & Bhangra Beats",
    "🎵 Hip-Hop, R&B & Pop",
    "🎵 EDM, House & Dance Music",
    "🎵 Old-School Classics with Modern Twists"
  ];

  const features = [
    "Custom Playlists",
    "Open to Requests",
    "Fusion of Cultures"
  ];

  return (
    <section id="music" className="py-20 bg-dj-card-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="music-title">
            Her Style & Music
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="music-subtitle">
            DJ Ananya is known for her ability to blend genres seamlessly, creating a unique fusion that gets everyone dancing
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Indian wedding celebration with vibrant colors and dancing" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-music-celebration"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white" data-testid="genres-title">
                Music Genres
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {genres.map((genre, index) => (
                  <div 
                    key={index}
                    className={`bg-dj-dark p-4 rounded-xl border-l-4 ${
                      index % 2 === 0 ? 'border-dj-primary' : 'border-dj-secondary'
                    }`}
                    data-testid={`genre-${index}`}
                  >
                    <span className="text-white font-medium">{genre}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <span 
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold ${
                    index === 0 ? 'bg-dj-primary text-white' :
                    index === 1 ? 'bg-dj-secondary text-dj-dark' :
                    'bg-gradient-to-r from-dj-primary to-dj-secondary text-white'
                  }`}
                  data-testid={`feature-${index}`}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
