import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

/**
 * Footer Component
 * 
 * Design Philosophy: Dynamic Energy & Innovation
 * - Dark background with orange accents
 * - Multiple columns with organized information
 * - Social media links with hover effects
 * - Copyright and legal information
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    Services: [
      { label: 'Innovation', href: '#' },
      { label: 'Technology', href: '#' },
      { label: 'Partnerships', href: '#' },
      { label: 'Solutions', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Suryojasvi Group"
                className="h-10 w-auto object-contain"
              />
              <div>
                <h3 className="text-lg font-bold font-poppins">Suryojasvi</h3>
                <p className="text-xs text-orange-400">Group</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-inter">
              Redefining excellence across industries through innovation, technology, and strategic partnerships.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-orange-500/20 hover:bg-orange-500 text-orange-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-bold text-white mb-4 font-poppins">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 font-inter text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-8"></div>

        {/* Bottom Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <p className="text-gray-400 text-sm font-inter">
            © {currentYear} The Suryojasvi Group. All rights reserved.
          </p>
          <div className="flex gap-6 md:justify-end">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm font-inter">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm font-inter">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm font-inter">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="border-t border-gray-800 py-6">
        <div className="container flex justify-between items-center">
          <p className="text-gray-500 text-xs font-inter">
            Made with <span className="text-orange-500">❤</span> for innovation
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 rounded-lg bg-orange-500/20 hover:bg-orange-500 text-orange-400 hover:text-white transition-all duration-300 text-sm font-semibold font-poppins"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
