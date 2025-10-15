import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Map, Shield, Clock, Star, Users, Globe, Plane, MapPin, Heart } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import mountainsImage from "@/assets/destination-mountains.jpg";
import templesImage from "@/assets/destination-temples.jpg";
import coastalImage from "@/assets/destination-coastal.jpg";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".observe-fade");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const parallaxTransform = scrollY * 0.5;
  const parallaxOpacity = Math.max(1 - scrollY / 500, 0);

  const destinations = [
    {
      image: mountainsImage,
      title: "Alpine Adventures",
      location: "Swiss Alps, Europe",
      description: "Conquer majestic peaks and experience breathtaking mountain vistas",
      price: "From $2,499",
    },
    {
      image: templesImage,
      title: "Ancient Wonders",
      location: "Southeast Asia",
      description: "Explore mystical temples and immerse in rich cultural heritage",
      price: "From $1,899",
    },
    {
      image: coastalImage,
      title: "Coastal Paradise",
      location: "Mediterranean Coast",
      description: "Discover charming villages and pristine azure waters",
      price: "From $2,199",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "New York, USA",
      text: "The most incredible journey of my life! Every detail was perfectly planned, and the experiences were absolutely unforgettable.",
      rating: 5,
    },
    {
      name: "James Chen",
      location: "Singapore",
      text: "From booking to return, everything was seamless. The destinations exceeded all expectations. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      text: "A dream come true! The guides were knowledgeable, accommodations stunning, and memories priceless.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "150+", label: "Destinations" },
    { number: "50K+", label: "Happy Travelers" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Hero Background Image with Parallax */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <img
            src={heroImage}
            alt="Travel destination paradise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        {/* Animated Background Orbs */}
        <div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20 animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, hsl(270 70% 65% / 0.4), transparent)",
            transform: `translateY(${parallaxTransform * 0.3}px)`,
          }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-[32rem] h-[32rem] rounded-full opacity-20 animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, hsl(195 70% 55% / 0.4), transparent)",
            transform: `translateY(${parallaxTransform * 0.5}px)`,
            animationDelay: "2s",
          }}
        />

        {/* Floating Elements */}
        <div
          className="absolute top-1/4 right-1/3 w-20 h-20 opacity-20 animate-float"
          style={{ transform: `translateY(${parallaxTransform * 0.2}px)` }}
        >
          <Plane className="w-full h-full text-primary" />
        </div>
        <div
          className="absolute bottom-1/3 left-1/4 w-16 h-16 opacity-20 animate-float-slow"
          style={{ transform: `translateY(${parallaxTransform * 0.4}px)` }}
        >
          <MapPin className="w-full h-full text-secondary" />
        </div>

        {/* Hero Content */}
        <div
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          style={{
            transform: `translateY(${parallaxTransform}px)`,
            opacity: parallaxOpacity,
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8 animate-scale-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Your Adventure Awaits</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 animate-fade-in-up">
            <span
              className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 200%",
                animation: "shimmer 3s ease-in-out infinite",
              }}
            >
              Explore the World
            </span>
            <br />
            <span className="text-foreground">Like Never Before</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up opacity-90" style={{ animationDelay: "0.2s" }}>
            Discover breathtaking destinations, create unforgettable memories,
            and embark on the journey of a lifetime with expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-[var(--glow-purple)] transition-all duration-500"
            >
              Explore Destinations
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-2xl border-primary/30 hover:bg-primary/10 backdrop-blur-sm transition-all duration-500"
            >
              Plan Your Trip
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float"
          style={{ opacity: parallaxOpacity }}
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="observe-fade text-center p-6 rounded-2xl backdrop-blur-sm border border-primary/10"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  background: "var(--gradient-glass)",
                }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 observe-fade">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why Travel{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                With Us?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of adventure, comfort, and unforgettable moments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Map,
                title: "Expert Planning",
                description: "Meticulously crafted itineraries designed by travel experts with decades of experience",
                delay: "0s",
              },
              {
                icon: Shield,
                title: "Safe & Secure",
                description: "Your safety is our priority with 24/7 support and comprehensive travel insurance",
                delay: "0.2s",
              },
              {
                icon: Heart,
                title: "Unforgettable Experiences",
                description: "Create memories that last a lifetime with authentic local experiences",
                delay: "0.4s",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="observe-fade group relative p-8 rounded-3xl border border-primary/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/40 hover:scale-105"
                style={{
                  background: "var(--gradient-glass)",
                  animationDelay: feature.delay,
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>

                {/* Shine Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                  style={{
                    background: "var(--gradient-shine)",
                    backgroundSize: "200% 200%",
                    animation: "shimmer 2s ease-in-out infinite",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 observe-fade">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Popular{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Destinations
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked destinations that will take your breath away
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="observe-fade group relative rounded-3xl overflow-hidden border border-primary/20 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-primary/40"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  
                  {/* Location Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full backdrop-blur-md border border-primary/20 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">{destination.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6" style={{ background: "var(--gradient-glass)" }}>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{destination.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{destination.price}</span>
                    <Button
                      size="sm"
                      className="bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 rounded-xl transition-all duration-300"
                    >
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 observe-fade">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Traveler{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our amazing community of explorers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="observe-fade p-8 rounded-3xl border border-primary/20 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-primary/40"
                style={{
                  background: "var(--gradient-glass)",
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center observe-fade">
          <div
            className="p-16 rounded-[3rem] border border-primary/20 backdrop-blur-sm relative overflow-hidden"
            style={{ background: "var(--gradient-glass)" }}
          >
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
            </div>

            <div className="relative z-10">
              <Globe className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Ready to Start Your{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Adventure?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join thousands of travelers who have discovered the world with us.
                Your dream destination is just one click away.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground px-12 py-7 text-xl rounded-2xl shadow-lg hover:shadow-[var(--glow-purple)] transition-all duration-500 hover:scale-105"
              >
                Book Your Journey
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 py-12 px-6 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Wanderlust Travels</h3>
              <p className="text-sm text-muted-foreground">
                Creating unforgettable journeys since 2010
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Destinations</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Europe</li>
                <li>Asia</li>
                <li>Americas</li>
                <li>Africa</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>FAQ</li>
                <li>Travel Insurance</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-muted-foreground text-sm pt-8 border-t border-primary/10">
            <p>© 2025 Wanderlust Travels. Crafted with passion for adventure.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
