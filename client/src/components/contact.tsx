import { useState } from "react";
import { Phone, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    eventType: "",
    details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.contact.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and contact information.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/booking', formData);
      toast({
        title: "Booking Request Sent!",
        description: "Thank you for your interest! We'll get back to you soon.",
      });
      setFormData({ name: "", contact: "", eventType: "", details: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send booking request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dj-card-dark to-dj-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="contact-title">
            Let's Get the Party Started!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="contact-subtitle">
            Book DJ Ananya today and let her turn your event into an unforgettable celebration.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Professional corporate event party with elegant lighting and dancing" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-contact-party"
            />
            
            <div className="space-y-6">
              <div className="flex items-center" data-testid="contact-phone">
                <div className="w-12 h-12 bg-dj-primary rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call or Text</p>
                  <p className="text-white font-semibold">+1-412-555-1234</p>
                </div>
              </div>
              
              <div className="flex items-center" data-testid="contact-email">
                <div className="w-12 h-12 bg-dj-secondary rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-dj-dark" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">dj.ananya@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center" data-testid="contact-instagram">
                <div className="w-12 h-12 bg-gradient-to-br from-dj-primary to-dj-secondary rounded-full flex items-center justify-center mr-4">
                  <Instagram className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Follow on Instagram</p>
                  <p className="text-white font-semibold">@dj.ananya</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-dj-card-dark rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-white" data-testid="form-title">
              Book Your Event
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Your Name *
                </Label>
                <Input 
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-dj-dark border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-dj-primary focus:outline-none focus:ring-2 focus:ring-dj-primary/20 transition-colors"
                  placeholder="Enter your full name"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="contact" className="block text-gray-300 text-sm font-medium mb-2">
                  Email or Phone *
                </Label>
                <Input 
                  id="contact"
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                  className="w-full bg-dj-dark border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-dj-primary focus:outline-none focus:ring-2 focus:ring-dj-primary/20 transition-colors"
                  placeholder="Your best contact method"
                  data-testid="input-contact"
                />
              </div>
              
              <div>
                <Label htmlFor="eventType" className="block text-gray-300 text-sm font-medium mb-2">
                  Event Type
                </Label>
                <Select 
                  value={formData.eventType} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, eventType: value }))}
                >
                  <SelectTrigger 
                    className="w-full bg-dj-dark border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-dj-primary focus:outline-none focus:ring-2 focus:ring-dj-primary/20 transition-colors"
                    data-testid="select-event-type"
                  >
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding/Reception</SelectItem>
                    <SelectItem value="birthday">Birthday Party</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="cultural">Cultural Event</SelectItem>
                    <SelectItem value="ladies">Ladies' Night</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="details" className="block text-gray-300 text-sm font-medium mb-2">
                  Event Details
                </Label>
                <Textarea 
                  id="details"
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                  className="w-full bg-dj-dark border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-dj-primary focus:outline-none focus:ring-2 focus:ring-dj-primary/20 transition-colors resize-none"
                  placeholder="Tell us about your event - date, venue, guest count, music preferences, etc."
                  data-testid="textarea-details"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-dj-secondary hover:bg-dj-secondary-hover text-dj-dark font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-submit"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
