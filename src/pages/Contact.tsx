import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, Phone, MapPin, Clock, Send, 
  MessageSquare, Shield, ArrowRight 
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@ironcept.com",
    link: "mailto:info@ironcept.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+971 556022188",
    link: "tel:+971556022188",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "Global Operations",
    link: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "24/7 Emergency Support",
    link: null,
  },
];

const serviceOptions = [
  "Vulnerability Assessment & Penetration Testing",
  "Red Teaming & Adversary Simulation",
  "Digital Forensics & Incident Response",
  "Data Recovery Services",
  "Compliance & Security Consulting",
  "Security Monitoring & Threat Hunting",
  "Emergency Incident Response",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Request Submitted",
      description: "Our security team will contact you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[150px] rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="gradient-text">Ironcept</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to strengthen your security posture? Reach out to our team for 
              a free consultation or emergency support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-primary text-sm hover:underline">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Request Security Assessment</h2>
                  <p className="text-muted-foreground text-sm">Fill out the form and we'll get back to you</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Inc."
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 556022188"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Required *</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your security needs..."
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cyber" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Request
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              {/* Emergency CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/20">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-destructive" />
                  Emergency Incident?
                </h3>
                <p className="text-muted-foreground mb-4">
                  If you're experiencing an active security incident, our 24/7 emergency 
                  response team is ready to help.
                </p>
                <Button variant="destructive" size="lg" className="w-full" asChild>
                  <a href="tel:+971556022188">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Hotline
                  </a>
                </Button>
              </div>

              {/* WhatsApp */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-bold mb-3">Quick Contact</h3>
                <p className="text-muted-foreground mb-4">
                  Prefer instant messaging? Reach us on WhatsApp for quick inquiries.
                </p>
                <Button variant="glow" size="lg" className="w-full" asChild>
                  <a 
                    href="https://wa.me/971556022188" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-square rounded-2xl bg-card border border-border overflow-hidden relative">
                <div className="absolute inset-0 cyber-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Global Offices</h3>
                    <p className="text-muted-foreground text-sm">
                      Operations across North America, Europe, and Asia Pacific
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
