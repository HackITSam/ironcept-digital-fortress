import { Link } from "react-router-dom";
import { 
  Shield, 
  Search, 
  FileSearch, 
  HardDrive, 
  ClipboardCheck,
  ArrowRight,
  Bug,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Vulnerability Assessment & Penetration Testing",
    description: "Comprehensive security testing for web apps, mobile apps, APIs, networks, cloud infrastructure, and IoT/OT systems.",
    href: "/services#vapt",
  },
  {
    icon: Bug,
    title: "Red Teaming & Adversary Simulation",
    description: "Advanced attack simulations to test your organization's detection and response capabilities against real-world threats.",
    href: "/services#red-teaming",
  },
  {
    icon: FileSearch,
    title: "Digital Forensics & Incident Response",
    description: "Expert forensic analysis across all platforms, malware analysis, ransomware investigation, and breach handling.",
    href: "/services#forensics",
  },
  {
    icon: HardDrive,
    title: "Data Recovery Services",
    description: "Professional recovery solutions for HDD, SSD, RAID systems, smartphones, and cloud environments.",
    href: "/services#data-recovery",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Security Consulting",
    description: "ISO 27001, PCI-DSS, SOC 2 readiness assessments, cyber audits, and policy development.",
    href: "/services#compliance",
  },
  {
    icon: Activity,
    title: "Threat Hunting & Security Monitoring",
    description: "Proactive threat detection, security monitoring setup, and configuration reviews for your infrastructure.",
    href: "/services#threat-hunting",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Security <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From proactive security assessments to incident response, Ironcept delivers 
            end-to-end cybersecurity solutions tailored to your organization's needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center text-primary font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cyber-outline" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
