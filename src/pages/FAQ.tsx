import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, ArrowRight, Clock, Users, Settings, DollarSign } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      category: "General Questions",
      icon: <HelpCircle className="h-5 w-5" />,
      faqs: [
        {
          question: "What is CRM implementation and why do I need it?",
          answer: "CRM implementation is the process of setting up, configuring, and optimizing a Customer Relationship Management system for your business. It involves data migration, workflow setup, user training, and integration with existing tools. Proper implementation ensures your CRM drives growth rather than becoming a burden on your team."
        },
        {
          question: "How long does a typical CRM implementation take?",
          answer: "Implementation timelines vary based on complexity. Our Starter package takes 2-4 weeks, Professional takes 4-8 weeks, and Enterprise implementations take 8-16 weeks. We provide detailed project timelines during the planning phase to set clear expectations."
        },
        {
          question: "What CRM platforms do you work with?",
          answer: "We specialize in all major CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho CRM, Microsoft Dynamics 365, and custom CRM solutions. Our team is certified across multiple platforms to recommend the best fit for your needs."
        },
        {
          question: "Do you provide training for our team?",
          answer: "Yes! Training is included in all our packages. We provide hands-on training sessions, user guides, and ongoing support to ensure high user adoption rates. Our goal is 95%+ team adoption within 30 days of go-live."
        }
      ]
    },
    {
      category: "Implementation Process",
      icon: <Settings className="h-5 w-5" />,
      faqs: [
        {
          question: "What happens during the discovery phase?",
          answer: "During discovery, we analyze your current sales processes, data sources, team structure, and business goals. We identify pain points, optimization opportunities, and create a custom implementation roadmap tailored to your needs."
        },
        {
          question: "How do you handle data migration?",
          answer: "We use proven data migration methodologies to ensure zero data loss. This includes data mapping, cleaning, validation, and testing. We migrate contacts, deals, activities, and custom fields while maintaining data integrity throughout the process."
        },
        {
          question: "Can you integrate our CRM with existing tools?",
          answer: "Absolutely! We integrate CRMs with popular tools like email platforms, accounting software, marketing automation, calendar apps, and custom applications. Our team handles API connections and workflow automation for seamless operations."
        },
        {
          question: "What if we need changes during implementation?",
          answer: "Minor adjustments are included in your package. For significant scope changes, we'll discuss options and provide transparent pricing before proceeding. Our agile approach allows for flexibility while maintaining project timelines."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      icon: <DollarSign className="h-5 w-5" />,
      faqs: [
        {
          question: "What's included in the implementation cost?",
          answer: "Our pricing includes CRM setup, data migration, integrations, custom workflows, reporting dashboards, team training, and post-implementation support. No hidden fees or surprise charges - everything is clearly outlined in your proposal."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment options including milestone-based payments for larger projects. Professional and Enterprise clients can split payments across project phases. Contact us to discuss payment terms that work for your budget."
        },
        {
          question: "What if the implementation doesn't meet our expectations?",
          answer: "We offer a satisfaction guarantee. If you're not satisfied with our implementation, we'll work to address concerns at no additional cost. For Enterprise clients, we provide ROI guarantees based on agreed-upon metrics."
        },
        {
          question: "Are there ongoing costs after implementation?",
          answer: "Implementation is a one-time cost. However, you'll need to pay for your CRM platform's monthly/annual subscription directly to the provider (Salesforce, HubSpot, etc.). We can help you choose the most cost-effective plan for your needs."
        }
      ]
    },
    {
      category: "Support & Maintenance",
      icon: <Users className="h-5 w-5" />,
      faqs: [
        {
          question: "What support do you provide after implementation?",
          answer: "All packages include post-implementation support. Starter includes 30 days, Professional includes 90 days, and Enterprise includes 1 year. Support covers bug fixes, minor adjustments, user questions, and optimization recommendations."
        },
        {
          question: "Can you help with ongoing CRM optimization?",
          answer: "Yes! We offer ongoing optimization services to help you get even more value from your CRM. This includes advanced automation, new feature implementation, additional integrations, and performance tuning as your business grows."
        },
        {
          question: "What if we need to add more users or features later?",
          answer: "We can easily scale your CRM setup to accommodate growth. Whether you need more user licenses, additional features, or new integrations, we'll help you expand your system efficiently without disrupting current operations."
        },
        {
          question: "Do you provide emergency support?",
          answer: "Yes, Enterprise clients receive 24/7 emergency support during implementation and the first year. Professional clients can access priority support during business hours. We also offer emergency support packages for urgent issues."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Frequently Asked
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get answers to common questions about CRM implementation, our process, 
            pricing, and support services.
          </p>
          <Button variant="cta" asChild>
            <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
              Still Have Questions? Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4-8</div>
              <div className="text-sm text-muted-foreground">Weeks Average Implementation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">User Adoption Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Successful Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers organized by topic to quickly get the information you need
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-lg shadow-card hover:shadow-elegant transition-all duration-300"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                        <span className="font-medium text-foreground pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need More Help?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our CRM experts are ready to answer your specific questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Live Chat Support</CardTitle>
                <CardDescription>
                  Get instant answers during business hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://salescentri.com/contact/support-request/live-chat" target="_blank" rel="noopener noreferrer">
                    Start Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Schedule Consultation</CardTitle>
                <CardDescription>
                  Book a free 30-minute consultation with our experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="cta" className="w-full" asChild>
                  <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                    Book Meeting
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Contact Support Team</CardTitle>
                <CardDescription>
                  Submit a detailed question for our technical team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://salescentri.com/contact/support-request" target="_blank" rel="noopener noreferrer">
                    Submit Request
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Popular Resources
            </h2>
            <p className="text-lg text-muted-foreground">
              Additional resources to help you succeed with CRM implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle>CRM Implementation Checklist</CardTitle>
                <CardDescription>
                  Complete checklist to ensure nothing is missed during your CRM implementation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://salescentri.com/resources/whitepapers-ebooks" target="_blank" rel="noopener noreferrer">
                    Download Checklist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle>ROI Calculator</CardTitle>
                <CardDescription>
                  Calculate the potential return on investment for your CRM implementation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://salescentri.com/solutions/use-case-navigator" target="_blank" rel="noopener noreferrer">
                    Calculate ROI
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't let CRM implementation challenges hold back your business growth. 
            Our experts are here to ensure your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Schedule Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
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

export default FAQ;