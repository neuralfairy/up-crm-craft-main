import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Star, ArrowRight, Users, Clock, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "one-time",
      description: "Perfect for small businesses starting their CRM journey",
      features: [
        "Basic CRM setup and configuration",
        "Data migration (up to 1,000 contacts)",
        "2 integrations included",
        "5 hours of training",
        "Email support for 30 days",
        "Standard reporting dashboard"
      ],
      ideal: "Small teams (1-10 users)",
      timeline: "2-4 weeks",
      popular: false,
      cta: "Get Started",
      href: "https://salescentri.com/pricing/plans-overview"
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "one-time",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Advanced CRM configuration",
        "Unlimited data migration",
        "5 integrations included",
        "15 hours of training & support",
        "Custom workflow automation",
        "Advanced reporting & analytics",
        "Priority email & phone support",
        "90 days of optimization support"
      ],
      ideal: "Medium teams (10-50 users)",
      timeline: "4-8 weeks",
      popular: true,
      cta: "Start Professional",
      href: "https://salescentri.com/pricing/plans-overview"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solution for large organizations",
      features: [
        "Complete CRM ecosystem design",
        "Unlimited integrations",
        "Custom development work",
        "Dedicated project manager",
        "Unlimited training & support",
        "Advanced security implementation",
        "24/7 support during implementation",
        "1 year of ongoing optimization",
        "ROI guarantee"
      ],
      ideal: "Large teams (50+ users)",
      timeline: "8-16 weeks",
      popular: false,
      cta: "Contact Sales",
      href: "https://salescentri.com/pricing/enterprise-custom"
    }
  ];

  const addOns = [
    {
      title: "Additional Integrations",
      price: "$500",
      description: "per additional integration beyond plan limits"
    },
    {
      title: "Extended Training",
      price: "$150",
      description: "per hour of additional training sessions"
    },
    {
      title: "Custom Development",
      price: "$200",
      description: "per hour for custom features and workflows"
    },
    {
      title: "Data Cleanup",
      price: "$1,000",
      description: "comprehensive data cleaning and optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Transparent CRM Implementation
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Choose the perfect implementation package for your business. No hidden fees, 
            clear deliverables, and guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://salescentri.com/contact/sales-inquiry/request-quote" target="_blank" rel="noopener noreferrer">
                Get Custom Quote
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

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative h-full shadow-card hover:shadow-elegant transition-all duration-300 ${
                  plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-1">/{plan.period}</span>
                    )}
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 mb-8 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 text-primary mr-2" />
                      <span className="text-muted-foreground">{plan.ideal}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 text-primary mr-2" />
                      <span className="text-muted-foreground">Implementation: {plan.timeline}</span>
                    </div>
                  </div>

                  <Button 
                    variant={plan.popular ? "hero" : "default"} 
                    className="w-full" 
                    size="lg"
                    asChild
                  >
                    <a href={plan.href} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services & Add-ons
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your CRM implementation with these optional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground mb-2">
                    {addon.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary">{addon.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Calculate Your CRM ROI
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              See how much revenue growth and cost savings you can achieve with proper CRM implementation
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">300%</div>
                <div className="text-white/80">Average ROI within 12 months</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">40%</div>
                <div className="text-white/80">Increase in sales productivity</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">25%</div>
                <div className="text-white/80">Reduction in admin time</div>
              </div>
            </div>

            <Button variant="secondary" size="lg" asChild>
              <a href="https://salescentri.com/solutions/use-case-navigator" target="_blank" rel="noopener noreferrer">
                Calculate Your ROI
                <Zap className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pricing FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's included in the implementation price?",
                answer: "Our pricing includes complete CRM setup, data migration, integrations, training, and support as outlined in each plan. No hidden fees or surprise charges."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, we offer flexible payment options including milestone-based payments for Professional and Enterprise plans. Contact us to discuss payment terms."
              },
              {
                question: "What if we need changes during implementation?",
                answer: "Minor adjustments are included in your plan. Significant scope changes will be discussed and quoted separately before implementation."
              },
              {
                question: "Is ongoing support included?",
                answer: "Yes, all plans include post-implementation support. Starter includes 30 days, Professional includes 90 days, and Enterprise includes 1 year of optimization support."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Choose your plan or schedule a consultation to discuss custom requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Schedule Consultation
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;