import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Target, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "David Martinez",
      role: "Founder & CEO",
      bio: "15+ years in CRM consulting with expertise in Salesforce, HubSpot, and custom implementations.",
      expertise: ["CRM Strategy", "Enterprise Sales", "Digital Transformation"]
    },
    {
      name: "Sarah Kim",
      role: "Head of Implementation",
      bio: "Technical lead with 12+ years specializing in complex CRM integrations and data migration.",
      expertise: ["Technical Implementation", "Data Architecture", "System Integration"]
    },
    {
      name: "Michael Johnson",
      role: "Customer Success Manager",
      bio: "Dedicated to ensuring client success with comprehensive training and ongoing support programs.",
      expertise: ["Training & Support", "Change Management", "User Adoption"]
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Results-Driven",
      description: "Every implementation is measured by tangible business outcomes and ROI."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-Centric",
      description: "We prioritize your success with personalized solutions and dedicated support."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality implementations with proven methodologies."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Staying ahead with the latest CRM technologies and best practices."
    }
  ];

  const certifications = [
    "Salesforce Certified Implementation Expert",
    "HubSpot Solutions Partner",
    "Microsoft Dynamics 365 Certified",
    "Pipedrive Advanced Partner",
    "ISO 27001 Security Certified",
    "GDPR Compliance Specialist"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About UpCompanyMarketing
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We're passionate about helping businesses transform their sales operations through 
            expert CRM implementation and optimization services.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower businesses with properly implemented CRM systems that drive growth, 
                improve efficiency, and create lasting competitive advantages.
              </p>
              <p className="text-muted-foreground mb-8">
                Since our founding, we've helped over 500 companies successfully implement and 
                optimize their CRM systems, resulting in an average 300% ROI increase within 12 months.
              </p>
              <Button variant="cta" asChild>
                <a href="https://salescentri.com/company/about-us" target="_blank" rel="noopener noreferrer">
                  Learn More About Our Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="bg-gradient-primary p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Why We Started</h3>
              <p className="text-white/90 mb-4">
                We saw too many businesses struggling with poorly implemented CRMs that hindered 
                rather than helped their sales processes.
              </p>
              <p className="text-white/90">
                Our team of experts decided to change that by providing world-class implementation 
                services that ensure CRM success from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every client interaction and project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              CRM implementation specialists with decades of combined experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognized expertise across all major CRM platforms and security standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-card border border-border rounded-lg shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Proven results across hundreds of successful implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Successful Implementations" },
              { number: "98%", label: "Client Satisfaction Rate" },
              { number: "300%", label: "Average ROI Increase" },
              { number: "4-8", label: "Weeks to Implementation" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our expertise can transform your sales process with the right CRM implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://salescentri.com/company/about-us/leadership-team" target="_blank" rel="noopener noreferrer">
                Meet Our Leadership
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;