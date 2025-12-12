import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Zero-Day Vulnerabilities: Detection and Prevention",
    excerpt: "Learn about zero-day exploits, how attackers leverage them, and the best strategies to protect your organization from these emerging threats.",
    category: "Threat Intelligence",
    author: "Alex Chen",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "The Complete Guide to Ransomware Incident Response",
    excerpt: "A step-by-step guide on how to respond to a ransomware attack, from initial detection to recovery and post-incident analysis.",
    category: "Incident Response",
    author: "Sarah Mitchell",
    date: "Dec 5, 2024",
    readTime: "12 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Mobile App Security: Common Vulnerabilities in Android & iOS",
    excerpt: "Discover the most common security flaws in mobile applications and how developers can build more secure apps.",
    category: "VAPT",
    author: "David Kumar",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Digital Forensics in the Cloud Era: Challenges and Solutions",
    excerpt: "Explore the unique challenges of conducting digital forensics in cloud environments and modern investigation techniques.",
    category: "Digital Forensics",
    author: "Maria Santos",
    date: "Nov 20, 2024",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 5,
    title: "SOC 2 Compliance: A Practical Implementation Guide",
    excerpt: "Everything you need to know about achieving SOC 2 compliance, from understanding the framework to implementation best practices.",
    category: "Compliance",
    author: "Maria Santos",
    date: "Nov 15, 2024",
    readTime: "15 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Advanced Persistent Threats: How APT Groups Operate",
    excerpt: "An in-depth look at how sophisticated threat actors conduct long-term cyber operations against high-value targets.",
    category: "Threat Intelligence",
    author: "Sarah Mitchell",
    date: "Nov 8, 2024",
    readTime: "11 min read",
    featured: false,
  },
];

const categories = ["All", "Threat Intelligence", "Incident Response", "VAPT", "Digital Forensics", "Compliance"];

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Insights & Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Security <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest cybersecurity insights, threat intelligence, 
              and best practices from Ironcept's security experts.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 cyber-grid opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Tag className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Category */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium mb-3">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-card relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group p-5 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Category */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium mb-3">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="cyber-outline" size="lg">
              Load More Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest security insights and threat intelligence delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button variant="cyber">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
