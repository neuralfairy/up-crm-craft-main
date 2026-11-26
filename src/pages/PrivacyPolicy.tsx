import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content:
        'We may collect contact details, company information, CRM requirements, website usage data, and other information you provide when requesting a consultation or using our services. We may also collect limited technical information such as browser type, device information, IP address, and site activity.',
    },
    {
      title: 'How We Use Information',
      content:
        'We use collected information to respond to inquiries, provide and improve CRM implementation services, personalize recommendations, communicate about projects, maintain security, comply with legal obligations, and support service performance and analytics.',
    },
    {
      title: 'CRM and Customer Data',
      content:
        'Customer data processed on behalf of clients is handled according to applicable agreements and project instructions. We apply administrative, technical, and organizational safeguards to protect CRM records, credentials, integrations, and sensitive business information.',
    },
    {
      title: 'Information Sharing',
      content:
        'We do not sell personal information. We may share information with service providers that support our operations, with professional advisers, with authorized partners where a client has requested it, or when required by law or to protect our rights and users.',
    },
    {
      title: 'Data Security',
      content:
        'We use reasonable safeguards designed to protect information against unauthorized access, alteration, disclosure, or destruction. No internet transmission or storage method is completely secure, so we cannot guarantee absolute security.',
    },
    {
      title: 'Retention and Your Choices',
      content:
        'We retain information only as long as reasonably necessary for the purposes described in this policy, legal requirements, contractual obligations, or legitimate business needs. You may request access, correction, deletion, or additional information about our processing practices, subject to applicable law.',
    },
    {
      title: 'Cookies and Analytics',
      content:
        'We may use cookies and similar technologies to operate the website, understand usage, improve content, and maintain performance. Your browser settings may allow you to control or disable some cookies, though certain site features may then be unavailable.',
    },
    {
      title: 'Third-Party Services',
      content:
        'Our website or CRM solutions may link to or integrate with third-party platforms. Those providers have their own privacy practices, and we encourage you to review their policies before submitting information or authorizing an integration.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            This policy explains how UpCompanyMarketing collects, uses, and protects information in connection with our CRM implementation and consulting services.
          </p>

          <p className="text-sm text-muted-foreground mb-8">
            Effective date: November 26, 2026
          </p>

          <div className="space-y-6">
            {sections.map((section) => (
              <Card key={section.title} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  For privacy questions or requests, contact us at{' '}
                  <a
                    href="mailto:info@upcompanymarketing.com"
                    className="text-primary hover:underline"
                  >
                    info@upcompanymarketing.com
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
