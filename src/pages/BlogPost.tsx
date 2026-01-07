import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react";
import { blogPosts } from "@/data/blogData";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link to="/blog">
              <Button variant="cyber">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="aspect-video rounded-2xl overflow-hidden border border-border">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="prose prose-lg prose-invert max-w-none">
              <div
                className="text-foreground leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split("\n")
                    .map((line) => {
                      if (line.startsWith("## ")) {
                        return `<h2 class="text-2xl font-bold mt-10 mb-4 text-foreground">${line.slice(3)}</h2>`;
                      }
                      if (line.startsWith("### ")) {
                        return `<h3 class="text-xl font-semibold mt-8 mb-3 text-foreground">${line.slice(4)}</h3>`;
                      }
                      if (line.startsWith("- ")) {
                        return `<li class="ml-6 text-muted-foreground">${line.slice(2)}</li>`;
                      }
                      if (line.match(/^\d+\./)) {
                        return `<li class="ml-6 text-muted-foreground list-decimal">${line.slice(line.indexOf(".") + 2)}</li>`;
                      }
                      if (line.startsWith("**") && line.endsWith("**")) {
                        return `<p class="font-semibold text-foreground">${line.slice(2, -2)}</p>`;
                      }
                      if (line.trim() === "") {
                        return "";
                      }
                      return `<p class="text-muted-foreground">${line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')}</p>`;
                    })
                    .join("\n"),
                }}
              />
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Category:</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm">
                    {post.category}
                  </span>
                </div>
                <Button variant="cyber-outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group p-5 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-video rounded-xl overflow-hidden mb-4">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Category */}
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium mb-3">
                    {relatedPost.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{relatedPost.author}</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Need Security Expertise?</h2>
            <p className="text-muted-foreground mb-6">
              Our team of security professionals can help protect your organization from emerging threats.
            </p>
            <Link to="/contact">
              <Button variant="cyber" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
