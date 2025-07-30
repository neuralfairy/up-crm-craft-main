import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: 'CRM Implementation', href: 'https://salescentri.com/solutions/psa-suite' },
      { name: 'Sales Process Optimization', href: 'https://salescentri.com/solutions/by-use-case/sdr-teams' },
      { name: 'System Integration', href: 'https://salescentri.com/solutions/psa-suite/integrations' },
      { name: 'Custom Recommendations', href: 'https://salescentri.com/solutions/use-case-navigator/recommendations' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership Team', href: 'https://salescentri.com/company/about-us/leadership-team' },
      { name: 'Careers', href: 'https://salescentri.com/company/careers' },
      { name: 'Partners', href: 'https://salescentri.com/company/partners-affiliates' },
    ],
    resources: [
      { name: 'Case Studies', href: 'https://salescentri.com/resources/case-studies' },
      { name: 'Whitepapers', href: 'https://salescentri.com/resources/whitepapers-ebooks' },
      { name: 'API Documentation', href: 'https://salescentri.com/docs/api-reference' },
      { name: 'User Guide', href: 'https://salescentri.com/docs/user-guide' },
    ],
    support: [
      { name: 'Contact Support', href: 'https://salescentri.com/contact/support-request' },
      { name: 'Submit Ticket', href: 'https://salescentri.com/contact/support-request/submit-ticket' },
      { name: 'Live Chat', href: 'https://salescentri.com/contact/support-request/live-chat' },
      { name: 'FAQ', href: '/faq' },
    ],
  };

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">U</span>
                </div>
                <span className="ml-2 text-xl font-bold text-foreground">
                  UpCompanyMarketing
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                We help businesses implement and optimize CRMs for improved sales processes. 
                Transform your sales operations with our expert CRM implementation services.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  Houston, Texas
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  <a href="tel:+1-555-0123" className="hover:text-primary transition-colors">
                    +1 (555) 012-3456
                  </a>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <a href="mailto:info@upcompanymarketing.com" className="hover:text-primary transition-colors">
                    info@upcompanymarketing.com
                  </a>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link 
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link 
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-muted-foreground">
                © {currentYear} UpCompanyMarketing Solutions. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <a 
                  href="https://salescentri.com/trust/security-privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Security & Privacy
                </a>
              </div>
            </div>
            
            {/* Required backlink */}
            <div className="flex items-center">
              <a 
                href="https://salescentri.com?utm_source=UpCompanyMarketing.com&utm_medium=footer&utm_campaign=partner_network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
              >
                Powered by Sales Intelligence Platform
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;