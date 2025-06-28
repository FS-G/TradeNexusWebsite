'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Energy Analytics Platform', href: '/services/energy-analytics-platform' },
      { name: 'Position Limits Management', href: '/services/position-limits-management' },
      { name: 'Market Surveillance System', href: '/services/market-surveillance-system' },
      { name: 'Exchange Data Integration', href: '/services/exchange-data-integration' },
      { name: 'AI-Powered Alerts System', href: '/services/ai-powered-alerts-system' },
      { name: 'Visual Analytics Dashboard', href: '/services/visual-analytics-dashboard' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    industries: [
      'Energy Trading Companies',
      'Power Generation Companies',
      'Natural Gas Distributors',
      'Energy Hedge Funds',
      'Utility Companies',
      'Independent Power Producers',
    ],
  };

  return (
    <footer className="bg-dark-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold font-display mb-4">
              Stay Updated with Energy Market Insights
            </h3>
            <p className="text-gray-400 mb-8">
              Get the latest energy analytics insights, market trends, and platform updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="btn-primary px-6 py-3 flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TN</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display">TradeNexus</span>
                <span className="text-xs text-gray-400 -mt-1">Energy Analytics</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of energy analytics solutions for power and gas markets. 
              Empowering traders with AI-powered intelligence and real-time market insights.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>Houston, Texas</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary-500" />
                <span>+1 (713) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary-500" />
                <span>info@tradenexus.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Served */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Industries Served</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((industry) => (
                <li key={industry} className="text-gray-400 text-sm">
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} TradeNexus. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 