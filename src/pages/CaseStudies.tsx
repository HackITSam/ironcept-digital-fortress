import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Building, FileSearch, TrendingUp } from "lucide-react";

import caseStudyFinance from "@/assets/case-study-finance.jpg";
import caseStudyHealthcare from "@/assets/case-study-healthcare.jpg";
import caseStudyCloud from "@/assets/case-study-cloud.jpg";
import caseStudyForensics from "@/assets/case-study-forensics.jpg";

const caseStudies = [
  {
    id: 1,
    title: "Financial Institution Security Overhaul",
    category: "VAPT & Compliance",
    industry: "Banking & Finance",
    icon: Building,
    challenge: "A major financial institution faced multiple security vulnerabilities across their digital banking platform, exposing customer data to potential breaches.",
    solution: "Ironcept conducted comprehensive VAPT across web and mobile applications, implemented security hardening, and achieved PCI-DSS compliance.",
    results: [
      "150+ critical vulnerabilities identified and remediated",
      "PCI-DSS certification achieved within 3 months",
      "Zero security incidents in 12 months post-engagement",
      "40% reduction in security operational costs",
    ],
    image: caseStudyFinance,
  },
  {
    id: 2,
    title: "Ransomware Attack Investigation & Recovery",
    category: "Incident Response",
    industry: "Healthcare",
    icon: FileSearch,
    challenge: "A healthcare provider suffered a ransomware attack that encrypted critical patient data and disrupted operations across multiple facilities.",
    solution: "Our incident response team contained the attack, conducted forensic analysis to identify attack vectors, and recovered 98% of encrypted data without paying ransom.",
    results: [
      "Attack contained within 4 hours of engagement",
      "98% of encrypted data recovered successfully",
      "Attack vector identified and remediated",
      "Security posture strengthened to prevent recurrence",
    ],
    image: caseStudyHealthcare,
  },
  {
    id: 3,
    title: "Enterprise Cloud Security Assessment",
    category: "Cloud Security",
    industry: "Technology",
    icon: Shield,
    challenge: "A fast-growing tech company needed to assess and secure their multi-cloud infrastructure spanning AWS, Azure, and GCP before an IPO.",
    solution: "Ironcept performed comprehensive cloud security assessments, implemented security controls, and established continuous monitoring across all cloud platforms.",
    results: [
      "Multi-cloud environment secured across 3 platforms",
      "SOC 2 Type II certification achieved",
      "Automated security monitoring implemented",
      "Successful IPO security due diligence completed",
    ],
    image: caseStudyCloud,
  },
  {
    id: 4,
    title: "Corporate Espionage Investigation",
    category: "Digital Forensics",
    industry: "Manufacturing",
    icon: FileSearch,
    challenge: "A manufacturing company suspected intellectual property theft by a former employee who had joined a competitor.",
    solution: "Our forensics team conducted comprehensive digital investigation, recovered deleted files, analyzed email communications, and provided court-admissible evidence.",
    results: [
      "Evidence of IP theft confirmed and documented",
      "Court-admissible forensic report delivered",
      "Legal action supported with expert testimony",
      "Security controls implemented to prevent future incidents",
    ],
    image: caseStudyForensics,
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[150px] rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Success Stories
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Case <span className="gradient-text">Studies</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world examples of how Ironcept has helped organizations strengthen 
              their security posture and respond to cyber incidents.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "24/7", label: "Response Time" },
              { value: "150+", label: "Enterprise Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-video rounded-2xl border border-border overflow-hidden relative group">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2">
                        <study.icon className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-primary">{study.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
                      {study.industry}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                      {study.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Challenge</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Solution</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-card border border-border mb-6">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-success" />
                      Key Results
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your <span className="gradient-text">Success Story?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Let Ironcept help you strengthen your security posture and protect 
              your organization from cyber threats.
            </p>
            <Button variant="cyber" size="xl" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
