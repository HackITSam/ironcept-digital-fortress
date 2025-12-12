import { Link } from "react-router-dom";
import { ArrowRight, Shield, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-secondary/10" />
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
            <Shield className="w-10 h-10 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Secure Your <span className="gradient-text">Digital Assets?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Don't wait for a breach to happen. Get a comprehensive security assessment 
            from Ironcept's expert team and protect your organization today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="cyber" size="xl" asChild>
              <Link to="/contact">
                Request Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="cyber-outline" size="xl" asChild>
              <a href="tel:+1234567890">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <a href="mailto:security@ironcept.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>security@ironcept.com</span>
            </a>
            <span className="hidden sm:block">|</span>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
