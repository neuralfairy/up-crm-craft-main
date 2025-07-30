import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, TrendingUp, Clock } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "The Complete Guide to CRM Implementation Success in 2024",
    excerpt: "Everything you need to know about implementing a CRM system that drives real business results. From planning to execution and beyond.",
    author: "David Martinez",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Implementation Guide",
    image: "bg-gradient-primary",
    href: "https://salescentri.com/resources/case-studies"
  };

  const blogPosts = [
    {
      title: "Top 5 CRM Integration Mistakes That Kill ROI",
      excerpt: "Learn from common integration pitfalls and how to avoid them for maximum CRM success.",
      author: "Sarah Kim",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Best Practices",
      href: "https://salescentri.com/resources/whitepapers-ebooks"
    },
    {
      title: "Salesforce vs HubSpot vs Pipedrive: 2024 Comparison",
      excerpt: "Comprehensive comparison of the top CRM platforms to help you make the right choice.",
      author: "Michael Johnson",
      date: "December 8, 2024", 
      readTime: "10 min read",
      category: "Platform Review",
      href: "https://salescentri.com/resources/case-studies"
    },
    {
      title: "How to Calculate True CRM ROI: A Step-by-Step Guide",
      excerpt: "Measure the real impact of your CRM investment with our proven ROI calculation framework.",
      author: "David Martinez",
      date: "December 5, 2024",
      readTime: "7 min read", 
      category: "ROI & Analytics",
      href: "https://salescentri.com/resources/whitepapers-ebooks"
    },
    {
      title: "CRM Data Migration: Ensuring Zero Data Loss",
      excerpt: "Best practices for migrating your existing data to a new CRM system safely and efficiently.",
      author: "Sarah Kim", 
      date: "December 1, 2024",
      readTime: "6 min read",
      category: "Technical Guide",
      href: "https://salescentri.com/resources/case-studies"
    },
    {
      title: "Building a Sales Process That Converts: CRM Edition",
      excerpt: "Design and implement sales processes within your CRM that consistently drive conversions.",
      author: "Michael Johnson",
      date: "November 28, 2024",
      readTime: "9 min read",
      category: "Sales Strategy",
      href: "https://salescentri.com/resources/whitepapers-ebooks"
    },
    {
      title: "CRM Training: Getting 95%+ User Adoption",
      excerpt: "Proven strategies for ensuring your team actually uses the CRM system you've implemented.",
      author: "David Martinez",
      date: "November 25, 2024", 
      readTime: "5 min read",
      category: "Training & Adoption",
      href: "https://salescentri.com/resources/case-studies"
    }
  ];

  const categories = [
    "All Posts", "Implementation Guide", "Best Practices", "Platform Review", 
    "ROI & Analytics", "Technical Guide", "Sales Strategy", "Training & Adoption"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            CRM Implementation
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Insights & Best Practices
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Expert insights, implementation guides, and thought leadership to help you 
            succeed with your CRM initiatives.
          </p>
          <Button variant="cta" asChild>
            <a href="https://salescentri.com/resources/whitepapers-ebooks" target="_blank" rel="noopener noreferrer">
              Download Free Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Article</h2>
            <div className="flex items-center text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 mr-2" />
              Most Popular This Week
            </div>
          </div>

          <Card className="shadow-elegant overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className={`${featuredPost.image} p-8 flex items-center justify-center`}>
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">Featured Guide</h3>
                  <p className="text-white/90">Comprehensive CRM implementation strategies that drive real results</p>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <User className="h-4 w-4 mr-2" />
                  {featuredPost.author}
                  <Calendar className="h-4 w-4 ml-4 mr-2" />
                  {featuredPost.date}
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  {featuredPost.readTime}
                </div>
                <Button variant="cta" asChild>
                  <a href={featuredPost.href} target="_blank" rel="noopener noreferrer">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest CRM implementation strategies and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 h-full">
                <CardHeader>
                  <div className="mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 mt-auto">
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={post.href} target="_blank" rel="noopener noreferrer">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with CRM Insights
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest CRM implementation tips, case studies, and best practices delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button variant="secondary" size="lg" asChild>
              <a href="https://salescentri.com/resources/whitepapers-ebooks" target="_blank" rel="noopener noreferrer">
                Subscribe to Newsletter
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Case Studies</CardTitle>
                <CardDescription>
                  Real-world CRM implementation success stories and measurable results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://salescentri.com/resources/case-studies" target="_blank" rel="noopener noreferrer">
                    View Case Studies
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Whitepapers & eBooks</CardTitle>
                <CardDescription>
                  In-depth guides and research on CRM implementation best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://salescentri.com/resources/whitepapers-ebooks" target="_blank" rel="noopener noreferrer">
                    Download Resources
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Webinars & Tutorials</CardTitle>
                <CardDescription>
                  Live and recorded training sessions on CRM implementation topics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://salescentri.com/resources/tutorials-webinars" target="_blank" rel="noopener noreferrer">
                    Watch Tutorials
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;