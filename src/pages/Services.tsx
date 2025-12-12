import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Shield, Bug, FileSearch, HardDrive, ClipboardCheck, Activity,
  Globe, Smartphone, Cloud, Lock, Server, Wifi, Target, Eye,
  Database, Code, Mail, Brain, AlertTriangle, RefreshCw,
  ArrowRight, CheckCircle
} from "lucide-react";

const vaptServices = [
  { icon: Globe, name: "Web Application VAPT", desc: "Comprehensive security testing for web applications" },
  { icon: Smartphone, name: "Mobile App VAPT", desc: "Android & iOS application security assessment" },
  { icon: Code, name: "API Security Testing", desc: "REST, GraphQL, and SOAP API vulnerability testing" },
  { icon: Wifi, name: "Network VAPT", desc: "Internal and external network penetration testing" },
  { icon: Cloud, name: "Cloud VAPT", desc: "AWS, Azure, GCP security assessments" },
  { icon: Server, name: "IoT/OT Security", desc: "Industrial and IoT device security testing" },
];

const configServices = [
  "Server hardening review",
  "Cloud configuration security",
  "Firewall ruleset review",
  "EDR/XDR configuration assessment",
  "Active Directory security review",
];

const forensicsServices = [
  { icon: Database, name: "Digital Forensics", desc: "Windows, macOS, Linux, and Mobile forensic analysis" },
  { icon: Bug, name: "Malware Analysis", desc: "Static and dynamic malware reverse engineering" },
  { icon: Lock, name: "Ransomware Investigation", desc: "Attack analysis and data recovery support" },
  { icon: Mail, name: "Email Forensics", desc: "Email header analysis and phishing investigation" },
  { icon: Brain, name: "Memory Forensics", desc: "RAM analysis for malware and intrusion detection" },
  { icon: FileSearch, name: "Chain of Custody", desc: "Court-admissible evidence handling" },
];

const dataRecoveryServices = [
  "HDD / SSD Recovery",
  "RAID System Recovery",
  "Smartphone Data Recovery",
  "Cloud Data Recovery",
  "Encrypted Data Recovery",
];

const complianceServices = [
  { name: "ISO 27001", desc: "Information security management system readiness" },
  { name: "PCI-DSS", desc: "Payment card industry data security standard" },
  { name: "SOC 2", desc: "Service organization control compliance" },
  { name: "Cyber Audit", desc: "Comprehensive security audit support" },
  { name: "Policy Development", desc: "Security policies and SOPs creation" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 blur-[150px] rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Complete Security <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From vulnerability assessments to incident response, Ironcept delivers 
              comprehensive cybersecurity and digital forensics services.
            </p>
          </div>
        </div>
      </section>

      {/* VAPT Section */}
      <section id="vapt" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Vulnerability Assessment & Penetration Testing</h2>
              <p className="text-muted-foreground">Comprehensive security testing across all platforms</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {vaptServices.map((service) => (
              <div
                key={service.name}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Teaming Section */}
      <section id="red-teaming" className="py-20 bg-card relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-destructive" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Red Teaming & Adversary Simulation</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our red team operations simulate real-world attack scenarios to test your 
                organization's detection and response capabilities. We emulate advanced 
                persistent threats (APTs) to identify gaps in your security defenses.
              </p>
              <ul className="space-y-3">
                {["Full-scope adversary simulation", "Social engineering assessments", "Physical security testing", "Detection and response evaluation"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-background border border-border">
              <h3 className="text-xl font-semibold mb-4">Configuration Review Services</h3>
              <div className="space-y-3">
                {configServices.map((service) => (
                  <div key={service} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <Settings className="w-5 h-5 text-primary" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Forensics Section */}
      <section id="forensics" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
              <FileSearch className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Digital Forensics & Incident Response</h2>
              <p className="text-muted-foreground">Expert forensic analysis and breach handling</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {forensicsServices.map((service) => (
              <div
                key={service.name}
                className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Incident Response CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-destructive/20 flex items-center justify-center animate-pulse">
                  <AlertTriangle className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Experiencing a Security Incident?</h3>
                  <p className="text-muted-foreground">Our incident response team is available 24/7</p>
                </div>
              </div>
              <Button variant="destructive" size="lg" asChild>
                <Link to="/contact">
                  Emergency Response
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Recovery Section */}
      <section id="data-recovery" className="py-20 bg-card relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-6">
                <HardDrive className="w-7 h-7 text-success" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Data Recovery Services</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Professional data recovery services for all types of storage media and 
                failure scenarios. Our certified engineers use state-of-the-art tools 
                to recover your critical data.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {dataRecoveryServices.map((service) => (
                  <div key={service} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                    <RefreshCw className="w-5 h-5 text-success" />
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-background border border-border text-center">
              <div className="text-6xl font-bold gradient-text mb-4">95%</div>
              <p className="text-xl font-semibold mb-2">Recovery Success Rate</p>
              <p className="text-muted-foreground">
                Industry-leading recovery rates with no-data-no-fee guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-warning/10 flex items-center justify-center">
              <ClipboardCheck className="w-7 h-7 text-warning" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Compliance & Security Consulting</h2>
              <p className="text-muted-foreground">Navigate complex regulatory requirements</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {complianceServices.map((service) => (
              <div
                key={service.name}
                className="p-6 rounded-2xl bg-card border border-border hover:border-warning/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-warning">{service.name}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Hunting Section */}
      <section id="threat-hunting" className="py-20 bg-card relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Activity className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Threat Hunting & Security Monitoring</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Proactive threat detection and continuous security monitoring to identify 
              and neutralize threats before they impact your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Threat Intelligence", "SIEM Setup", "Log Analysis", "Anomaly Detection", "Incident Correlation"].map((item) => (
                <span key={item} className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Strengthen Your <span className="gradient-text">Security Posture?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact our team for a free consultation and learn how Ironcept can 
              protect your organization.
            </p>
            <Button variant="cyber" size="xl" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Settings icon import fix
import { Settings } from "lucide-react";

export default Services;
