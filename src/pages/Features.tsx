import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Settings, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Workflow,
  CheckCircle,
  ArrowRight,
  Clock,
  Globe,
  Database
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "CRM Setup & Configuration",
      description: "Complete CRM implementation from initial setup to custom configurations tailored to your business needs.",
      benefits: ["Custom field configuration", "Workflow automation setup", "User permission management", "Integration planning"]
    },
    {
      icon: <Workflow className="h-8 w-8 text-primary" />,
      title: "Sales Process Optimization",
      description: "Streamline your sales pipeline with optimized processes that convert more leads into customers.",
      benefits: ["Pipeline stage optimization", "Lead scoring automation", "Follow-up automation", "Performance tracking"]
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Data Migration & Integration",
      description: "Seamlessly migrate your existing data and integrate with your current tools and systems.",
      benefits: ["Zero data loss migration", "API integrations", "Third-party app connections", "Data cleaning & optimization"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Analytics & Reporting",
      description: "Comprehensive reporting and analytics to track performance and make data-driven decisions.",
      benefits: ["Custom dashboard creation", "Automated report generation", "KPI tracking", "ROI measurement"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Training & Support",
      description: "Comprehensive training programs to ensure your team maximizes CRM adoption and efficiency.",
      benefits: ["User training sessions", "Best practice guidelines", "Ongoing support", "Change management"]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance features to protect your sensitive business data.",
      benefits: ["Data encryption", "GDPR compliance", "Role-based access", "Audit trails"]
    }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Microsoft Dynamics", 
    "Slack", "Microsoft Teams", "Gmail", "Outlook", "QuickBooks", 
    "Mailchimp", "Zapier", "LinkedIn", "DocuSign", "Calendly"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Powerful CRM Implementation
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Features & Capabilities
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your sales operations with our comprehensive CRM implementation services. 
            From setup to optimization, we provide everything you need for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
                Interactive Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete CRM Implementation Suite
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to successfully implement and optimize your CRM system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full shadow-card hover:shadow-elegant transition-all duration-300 border-border">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful CRM implementation and adoption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We analyze your current processes and identify optimization opportunities.",
                time: "Week 1-2"
              },
              {
                step: "02", 
                title: "Design & Planning",
                description: "Custom CRM configuration design and implementation roadmap creation.",
                time: "Week 3-4"
              },
              {
                step: "03",
                title: "Implementation & Setup",
                description: "CRM configuration, data migration, and integration with existing systems.",
                time: "Week 5-8"
              },
              {
                step: "04",
                title: "Training & Launch",
                description: "Team training, testing, and go-live support with ongoing optimization.",
                time: "Week 9-12"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{phase.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-border -z-10"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{phase.description}</p>
                <div className="flex items-center justify-center text-sm text-primary">
                  <Clock className="h-4 w-4 mr-1" />
                  {phase.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Seamless Integrations
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We integrate with all major CRM platforms and business tools to create a unified ecosystem
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                {integration}
              </div>
            ))}
          </div>

          <Button variant="cta" size="lg" asChild>
            <a href="https://salescentri.com/solutions/psa-suite/integrations" target="_self" rel="noopener noreferrer">
              View All Integrations
              <Globe className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our CRM implementation services can drive growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="https://salescentri.com/get-started/book-demo" target="_self" rel="noopener noreferrer">
                Schedule Free Consultation
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-primary hover:bg-white hover:text-primary" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_self" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
