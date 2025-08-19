import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Events } from "@/components/events";
import { Music } from "@/components/music";
import { WhyChoose } from "@/components/why-choose";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dj-dark text-white font-poppins overflow-x-hidden">
      <Navigation />
      <Hero />
      <Events />
      <Music />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
