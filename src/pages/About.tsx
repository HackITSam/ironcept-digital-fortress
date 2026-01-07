import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Target, Eye, Heart, Shield, 
  CheckCircle, ArrowRight 
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our engagements.",
  },
  {
    icon: Eye,
    title: "Excellence",
    description: "We strive for perfection in every security assessment and investigation.",
  },
  {
    icon: Heart,
    title: "Trust",
    description: "Building lasting relationships through transparency and reliability.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Continuously evolving our methods to stay ahead of emerging threats.",
  },
];

const trustReasons = [
  "ISO 27001 and SOC 2 certified operations",
  "CREST accredited penetration testing team",
  "Court-admissible forensic methodologies",
  "Strict confidentiality and NDA protocols",
  "24/7 incident response capabilities",
  "Proven track record across industries",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[150px] rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              About Ironcept
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Defending Digital <span className="gradient-text">Frontiers</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ironcept is a premier cybersecurity and digital forensics firm dedicated to 
              protecting organizations from evolving cyber threats and uncovering digital truth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations with world-class cybersecurity solutions and digital 
                forensics expertise, enabling them to operate confidently in an increasingly 
                connected world. We protect critical assets, investigate breaches, and build 
                resilient security postures.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in integrated cybersecurity and digital forensics, 
                setting the standard for excellence in threat prevention, detection, and 
                response. We envision a world where every organization can operate securely 
                and with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at Ironcept.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-card relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
                Trust & Credibility
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Organizations <span className="gradient-text">Trust Ironcept</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With over 15 years of experience, certifications from leading bodies, and a 
                proven track record across industries, Ironcept has earned the trust of 
                organizations worldwide.
              </p>
              
              <div className="space-y-4 mb-8">
                {trustReasons.map((reason, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{reason}</span>
                  </div>
                ))}
              </div>

              <Button variant="cyber" size="lg" asChild>
                <Link to="/contact">
                  Work With Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Projects Completed" },
                { value: "99%", label: "Client Satisfaction" },
                { value: "50+", label: "Expert Consultants" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-background border border-border text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
