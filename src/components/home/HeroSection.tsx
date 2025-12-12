import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowRight, Lock, Eye, Fingerprint, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cybersecurity.jpg";

const securityBadges = [
  { icon: Lock, label: "ISO 27001" },
  { icon: Fingerprint, label: "CREST Certified" },
  { icon: Eye, label: "24/7 Monitoring" },
  { icon: Server, label: "SOC 2 Compliant" },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cybersecurity background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 cyber-grid opacity-30" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float animation-delay-400" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Security Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Enterprise-Grade Security Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="text-foreground">Advanced Cybersecurity &</span>
            <br />
            <span className="gradient-text">Digital Forensics Solutions</span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Protect your digital assets with Ironcept's cutting-edge security services. 
            From vulnerability assessments to incident response, we safeguard your business 
            against evolving cyber threats.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Button variant="cyber" size="xl" asChild>
              <Link to="/contact">
                Request Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="cyber-outline" size="xl" asChild>
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Certification Badges */}
          <div 
            className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {securityBadges.map((badge, index) => (
              <div 
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 border border-border/50 backdrop-blur-sm"
              >
                <badge.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
