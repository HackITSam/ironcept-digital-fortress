import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { 
  Shield, Bug, FileSearch, HardDrive, ClipboardCheck, Activity,
  Globe, Smartphone, Cloud, Lock, Server, Wifi, Target, Eye,
  Database, Code, Mail, Brain, AlertTriangle, RefreshCw,
  ArrowRight, CheckCircle, Settings
} from "lucide-react";

const vaptServices = [
  { 
    icon: Globe, 
    name: "Web Application VAPT", 
    desc: "In-depth security testing of web applications including OWASP Top 10 vulnerabilities, business logic flaws, authentication bypasses, SQL injection, XSS, CSRF, and session management issues. We provide actionable remediation guidance."
  },
  { 
    icon: Smartphone, 
    name: "Mobile App VAPT", 
    desc: "Comprehensive security assessment for Android & iOS applications covering reverse engineering, data storage analysis, network communication testing, authentication mechanisms, and runtime manipulation attacks."
  },
  { 
    icon: Code, 
    name: "API Security Testing", 
    desc: "Thorough testing of REST, GraphQL, and SOAP APIs for authentication flaws, authorization issues, injection vulnerabilities, rate limiting bypasses, and improper data exposure. Includes API documentation review."
  },
  { 
    icon: Wifi, 
    name: "Network VAPT", 
    desc: "Internal and external network penetration testing covering network segmentation, firewall configurations, router/switch security, wireless security, VPN testing, and lateral movement simulations."
  },
  { 
    icon: Cloud, 
    name: "Cloud VAPT", 
    desc: "Security assessments for AWS, Azure, and GCP environments including IAM policy reviews, storage bucket permissions, network security groups, serverless function security, and cloud-native application testing."
  },
  { 
    icon: Server, 
    name: "IoT/OT Security", 
    desc: "Industrial control system and IoT device security testing including firmware analysis, protocol analysis, hardware security, SCADA/ICS assessments, and embedded system vulnerability identification."
  },
];

const configServices = [
  { 
    name: "Server Hardening Review", 
    desc: "Comprehensive review of Windows and Linux server configurations against CIS benchmarks and security best practices." 
  },
  { 
    name: "Cloud Configuration Security", 
    desc: "Assessment of cloud infrastructure configurations for misconfigurations, excessive permissions, and security gaps." 
  },
  { 
    name: "Firewall Ruleset Review", 
    desc: "Analysis of firewall rules for overly permissive access, unused rules, and network segmentation effectiveness." 
  },
  { 
    name: "EDR/XDR Configuration Assessment", 
    desc: "Evaluation of endpoint detection and response tool configurations for optimal threat detection and response." 
  },
  { 
    name: "Active Directory Security Review", 
    desc: "In-depth analysis of AD configurations, GPOs, privileged accounts, Kerberos settings, and attack path identification." 
  },
];

const forensicsServices = [
  { 
    icon: Database, 
    name: "Digital Forensics", 
    desc: "Complete forensic analysis across Windows, macOS, Linux, and mobile platforms. We perform disk imaging, file system analysis, timeline reconstruction, deleted file recovery, and artifact examination to uncover evidence of compromise or malicious activity."
  },
  { 
    icon: Bug, 
    name: "Malware Analysis", 
    desc: "Static and dynamic malware reverse engineering to understand malware behavior, identify indicators of compromise (IOCs), determine attack vectors, and develop detection signatures. Includes sandbox analysis and code disassembly."
  },
  { 
    icon: Lock, 
    name: "Ransomware Investigation", 
    desc: "Comprehensive ransomware attack analysis including initial access vector identification, lateral movement tracking, encryption mechanism analysis, and data recovery feasibility assessment. We help you understand the full scope of the attack."
  },
  { 
    icon: Mail, 
    name: "Email Forensics", 
    desc: "Detailed email header analysis, phishing campaign investigation, business email compromise (BEC) analysis, email authentication verification (SPF/DKIM/DMARC), and email-based threat attribution."
  },
  { 
    icon: Brain, 
    name: "Memory Forensics", 
    desc: "RAM acquisition and analysis for detecting fileless malware, rootkits, process injection, hidden processes, network connections, and encryption keys. Critical for identifying advanced persistent threats."
  },
  { 
    icon: FileSearch, 
    name: "Chain of Custody", 
    desc: "Court-admissible evidence handling with proper documentation, forensic imaging, hash verification, and detailed chain of custody records. We provide expert witness testimony and litigation support when needed."
  },
];

const dataRecoveryServices = [
  { 
    name: "HDD / SSD Recovery", 
    desc: "Professional recovery from mechanical failures, logical corruption, firmware issues, and physical damage using cleanroom facilities."
  },
  { 
    name: "RAID System Recovery", 
    desc: "Complex RAID array recovery including RAID 0, 1, 5, 6, 10 configurations with controller failures and multiple disk issues."
  },
  { 
    name: "Smartphone Data Recovery", 
    desc: "iOS and Android device recovery from water damage, screen failures, software corruption, and accidental deletion."
  },
  { 
    name: "Cloud Data Recovery", 
    desc: "Recovery of accidentally deleted cloud data, ransomware-encrypted cloud storage, and compromised cloud accounts."
  },
  { 
    name: "Encrypted Data Recovery", 
    desc: "Recovery assistance for encrypted drives with forgotten passwords, corrupted encryption headers, or BitLocker/FileVault issues."
  },
];

const complianceServices = [
  { 
    name: "ISO 27001", 
    desc: "Complete ISO 27001 implementation support including gap analysis, risk assessment, ISMS development, policy creation, control implementation, and certification audit preparation. We guide you through the entire certification journey."
  },
  { 
    name: "PCI-DSS", 
    desc: "Payment Card Industry Data Security Standard compliance assistance covering all 12 requirements, SAQ preparation, scope reduction strategies, compensating controls, and QSA audit readiness assessment."
  },
  { 
    name: "SOC 2", 
    desc: "SOC 2 Type I and Type II readiness assessments covering Trust Service Criteria (Security, Availability, Processing Integrity, Confidentiality, Privacy). We help establish controls and prepare for auditor examinations."
  },
  { 
    name: "Cyber Audit", 
    desc: "Comprehensive security audits aligned with industry frameworks (NIST CSF, CIS Controls, COBIT). Includes technical testing, policy review, and executive-level reporting with prioritized recommendations."
  },
  { 
    name: "Policy Development", 
    desc: "Creation of comprehensive security policies, standards, procedures, and guidelines tailored to your organization. Includes information security policy, acceptable use policy, incident response plan, and business continuity procedures."
  },
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

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
              comprehensive cybersecurity and digital forensics services tailored to protect 
              your organization from evolving cyber threats.
            </p>
          </div>
        </div>
      </section>

      {/* VAPT Section */}
      <section id="vapt" className="py-20 relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Vulnerability Assessment & Penetration Testing</h2>
              <p className="text-muted-foreground">Comprehensive security testing across all platforms</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            Our VAPT services go beyond automated scanning. We combine industry-leading tools with manual testing 
            techniques employed by real-world attackers to identify vulnerabilities that automated tools miss. 
            Every assessment includes detailed reporting with risk ratings, proof-of-concept exploits, and 
            step-by-step remediation guidance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {vaptServices.map((service) => (
              <div
                key={service.name}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="cyber" asChild>
              <Link to="/contact">
                Request VAPT Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Red Teaming Section */}
      <section id="red-teaming" className="py-20 bg-card relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-destructive" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Red Teaming & Adversary Simulation</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our red team operations simulate real-world attack scenarios to test your 
                organization's detection and response capabilities. We emulate advanced 
                persistent threats (APTs), nation-state actors, and sophisticated cybercriminal 
                groups to identify gaps in your security defenses that traditional testing might miss.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Unlike standard penetration testing, red teaming takes a goal-oriented approach. 
                We attempt to achieve specific objectives such as accessing sensitive data, 
                compromising critical systems, or exfiltrating intellectual property—just like 
                real attackers would.
              </p>
              <ul className="space-y-3">
                {[
                  "Full-scope adversary simulation with realistic TTPs", 
                  "Social engineering and phishing campaigns", 
                  "Physical security testing and badge cloning", 
                  "Detection and response capability evaluation",
                  "Purple team exercises for collaborative improvement"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-background border border-border">
              <h3 className="text-xl font-semibold mb-6">Configuration Review Services</h3>
              <div className="space-y-4">
                {configServices.map((service) => (
                  <div key={service.name} className="p-4 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3 mb-2">
                      <Settings className="w-5 h-5 text-primary" />
                      <span className="font-medium">{service.name}</span>
                    </div>
                    <p className="text-muted-foreground text-sm pl-8">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Forensics Section */}
      <section id="forensics" className="py-20 relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
              <FileSearch className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Digital Forensics & Incident Response</h2>
              <p className="text-muted-foreground">Expert forensic analysis and breach handling</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            When a security incident occurs, time is critical. Our DFIR team responds rapidly to contain 
            threats, preserve evidence, and conduct thorough investigations. We use industry-standard 
            forensic tools and methodologies to ensure evidence integrity and provide court-admissible 
            documentation when required.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {forensicsServices.map((service) => (
              <div
                key={service.name}
                className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
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
                  <p className="text-muted-foreground">Our incident response team is available 24/7 for emergency situations</p>
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
      <section id="data-recovery" className="py-20 bg-card relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center">
              <HardDrive className="w-7 h-7 text-success" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Data Recovery Services</h2>
              <p className="text-muted-foreground">Professional recovery for all storage media</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            Data loss can be devastating for any organization. Our certified data recovery engineers 
            use state-of-the-art tools and Class 100 cleanroom facilities to recover data from all 
            types of storage media. We offer a no-data-no-fee guarantee and maintain strict 
            confidentiality throughout the recovery process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {dataRecoveryServices.map((service) => (
              <div key={service.name} className="p-6 rounded-2xl bg-background border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-5 h-5 text-success" />
                  <span className="font-semibold">{service.name}</span>
                </div>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-background border border-border text-center">
            <div className="text-6xl font-bold gradient-text mb-4">95%</div>
            <p className="text-xl font-semibold mb-2">Recovery Success Rate</p>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Industry-leading recovery rates with our no-data-no-fee guarantee. 
              Free diagnostic evaluation for all cases.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="py-20 relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-warning/10 flex items-center justify-center">
              <ClipboardCheck className="w-7 h-7 text-warning" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Compliance & Security Consulting</h2>
              <p className="text-muted-foreground">Navigate complex regulatory requirements</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            Achieving and maintaining compliance with industry standards and regulations can be 
            complex and resource-intensive. Our compliance experts help you understand requirements, 
            implement necessary controls, and prepare for certification audits. We take a 
            practical approach that balances security effectiveness with operational efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {complianceServices.map((service) => (
              <div
                key={service.name}
                className="p-6 rounded-2xl bg-card border border-border hover:border-warning/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-warning">{service.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Hunting Section */}
      <section id="threat-hunting" className="py-20 bg-card relative scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Activity className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Threat Hunting & Security Monitoring</h2>
              <p className="text-muted-foreground">Proactive threat detection and continuous monitoring</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            Don't wait for alerts—actively hunt for threats in your environment. Our threat hunting 
            team uses hypothesis-driven methodologies, threat intelligence, and advanced analytics 
            to identify malicious activity that evades traditional security controls. We also help 
            you establish and optimize your security monitoring capabilities.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-2xl bg-background border border-border">
              <h3 className="text-xl font-semibold mb-4">Threat Hunting Services</h3>
              <ul className="space-y-3">
                {[
                  "Hypothesis-driven threat hunts based on latest TTPs",
                  "APT and insider threat detection campaigns",
                  "Compromise assessment and breach discovery",
                  "Threat intelligence integration and analysis",
                  "Custom detection rule development"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-border">
              <h3 className="text-xl font-semibold mb-4">Security Monitoring Setup</h3>
              <ul className="space-y-3">
                {[
                  "SIEM deployment, tuning, and optimization",
                  "Log source integration and normalization",
                  "Alert correlation and false positive reduction",
                  "Security orchestration and automation (SOAR)",
                  "24/7 monitoring and response procedures"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {["Threat Intelligence", "SIEM/SOAR", "Log Analysis", "Anomaly Detection", "Incident Correlation", "Detection Engineering"].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm">
                {item}
              </span>
            ))}
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
              protect your organization from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cyber" size="xl" asChild>
                <Link to="/contact">
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="cyber-outline" size="xl" asChild>
                <Link to="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
