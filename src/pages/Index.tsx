import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Globe, Star } from "lucide-react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Orbs */}
        <div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-30 animate-pulse-glow"
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
          <Star className="w-full h-full text-primary" />
        </div>
        <div
          className="absolute bottom-1/3 left-1/4 w-16 h-16 opacity-20 animate-float-slow"
          style={{ transform: `translateY(${parallaxTransform * 0.4}px)` }}
        >
          <Sparkles className="w-full h-full text-secondary" />
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
            <span className="text-sm text-primary">Divine Experience Awaits</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 animate-fade-in-up">
            <span
              className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 200%",
                animation: "shimmer 3s ease-in-out infinite",
              }}
            >
              Where Dreams
            </span>
            <br />
            <span className="text-foreground">Become Reality</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up opacity-90" style={{ animationDelay: "0.2s" }}>
            Experience the perfect harmony of design and functionality.
            A masterpiece crafted with divine precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-[var(--glow-purple)] transition-all duration-500"
            >
              Explore Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg rounded-2xl border-primary/30 hover:bg-primary/10 backdrop-blur-sm transition-all duration-500"
            >
              Learn More
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

      {/* Features Section */}
      <section ref={featuresRef} className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 observe-fade">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Crafted with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Perfection
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every detail meticulously designed to create an unforgettable experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Divine Design",
                description: "Aesthetics that transcend the ordinary, crafted with celestial inspiration",
                delay: "0s",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Performance so smooth, it feels like magic in motion",
                delay: "0.2s",
              },
              {
                icon: Globe,
                title: "Universal",
                description: "Seamlessly adapts to every device and screen with grace",
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
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Ready to Begin Your{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Journey?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join thousands who have discovered the divine experience
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground px-12 py-7 text-xl rounded-2xl shadow-lg hover:shadow-[var(--glow-purple)] transition-all duration-500 hover:scale-105"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 py-12 px-6 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="text-sm">Crafted with divine inspiration © 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
