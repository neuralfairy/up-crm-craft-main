import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Calendar,
  Users,
  FileText,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Support",
      description: "Speak directly with our CRM experts",
      detail: "+1 (555) 012-3456",
      availability: "Mon-Fri, 9AM-6PM CST",
      cta: "Call Now",
      href: "tel:+1-555-0123"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Support",
      description: "Get detailed responses to your questions",
      detail: "info@upcompanymarketing.com",
      availability: "24/7 - Response within 4 hours",
      cta: "Send Email",
      href: "mailto:info@upcompanymarketing.com"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      title: "Live Chat",
      description: "Instant support during business hours",
      detail: "Available on our website",
      availability: "Mon-Fri, 9AM-6PM CST",
      cta: "Start Chat",
      href: "https://salescentri.com/contact/support-request/live-chat"
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Schedule Meeting",
      description: "Book a consultation with our team",
      detail: "Free 30-minute consultation",
      availability: "Available Mon-Fri",
      cta: "Book Meeting",
      href: "https://salescentri.com/get-started/calendly"
    }
  ];

  const officeInfo = {
    address: "123 Business District, Houston, TX 77002",
    hours: [
      "Monday - Friday: 9:00 AM - 6:00 PM CST",
      "Saturday: 10:00 AM - 2:00 PM CST", 
      "Sunday: Closed"
    ]
  };

  const quickActions = [
    {
      title: "Book Free Demo",
      description: "See our CRM implementation process in action",
      icon: <Users className="h-6 w-6" />,
      href: "https://salescentri.com/get-started/book-demo",
      variant: "cta" as const
    },
    {
      title: "Request Quote",
      description: "Get custom pricing for your CRM project",
      icon: <FileText className="h-6 w-6" />,
      href: "https://salescentri.com/contact/sales-inquiry/request-quote",
      variant: "default" as const
    },
    {
      title: "Submit Support Ticket",
      description: "Get help with existing implementations",
      icon: <MessageCircle className="h-6 w-6" />,
      href: "https://salescentri.com/contact/support-request/submit-ticket",
      variant: "outline" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Get in Touch with Our
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              CRM Experts
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to transform your sales process? Our team is here to help you succeed 
            with expert CRM implementation and optimization services.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                    {action.icon}
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant={action.variant} className="w-full" asChild>
                    <a href={action.href} target="_blank" rel="noopener noreferrer">
                      {action.title}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-medium text-foreground mb-2">{method.detail}</p>
                  <p className="text-sm text-muted-foreground mb-4">{method.availability}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      {method.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <form className="space-y-6" action="https://salescentri.com/get-started/contact" method="post">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" required className="mt-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" name="company" required className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" name="subject" required className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={5} 
                    className="mt-2"
                    placeholder="Tell us about your CRM implementation needs..."
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" variant="cta" size="lg" className="w-full md:w-auto">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Visit Our Houston Office
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">{officeInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <div className="text-muted-foreground">
                      {officeInfo.hours.map((hour, index) => (
                        <p key={index}>{hour}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-primary p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Serving Houston & Beyond</h3>
              <p className="text-white/90 mb-6">
                While we're based in Houston, we serve clients nationwide with remote and on-site 
                CRM implementation services. Our team travels to client locations when needed for 
                complex implementations.
              </p>
              <Button variant="secondary" asChild>
                <a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer">
                  Find Other Locations
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need Urgent CRM Support?
          </h3>
          <p className="text-muted-foreground mb-6">
            For existing clients experiencing critical CRM issues, our emergency support line is available 24/7.
          </p>
          <Button variant="destructive" size="lg" asChild>
            <a href="https://salescentri.com/contact/support-request" target="_blank" rel="noopener noreferrer">
              Emergency Support
              <Phone className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;