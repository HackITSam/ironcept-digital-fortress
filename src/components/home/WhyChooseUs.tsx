import { Check, Shield, Clock, Users, Zap, Lock, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Enterprise-level protection using the latest security technologies and methodologies.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with years of experience in cybersecurity and digital forensics.",
  },
  {
    icon: Clock,
    title: "24/7 Response",
    description: "Round-the-clock incident response and monitoring to protect your business.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Quick implementation of security solutions tailored to your specific needs.",
  },
  {
    icon: Lock,
    title: "Confidentiality First",
    description: "Strict NDAs and security protocols to protect your sensitive information.",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "ISO 27001, CREST, PCI-DSS certified with proven track record.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              Why Ironcept
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Trusted by Organizations <span className="gradient-text">Worldwide</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Ironcept combines cutting-edge technology with deep expertise to deliver 
              security solutions that truly protect. Our team of certified professionals 
              has helped organizations across industries strengthen their security posture.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                "Comprehensive security assessments and penetration testing",
                "Rapid incident response with 24/7 availability",
                "Court-admissible digital forensics expertise",
                "Compliance consulting for major frameworks",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group ${
                  index === 0 ? 'col-span-2' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
