import type { Metadata } from 'next';
import Container from '@/components/atoms/Container';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import { Mail, Phone, MapPin, Clock, MessageSquare, Users } from 'lucide-react';
import companyData from '@/data/company.json';

export const metadata: Metadata = {
  title: 'Contact TradeNexus - Energy Analytics Experts in Houston, Texas',
  description: 'Contact TradeNexus for energy analytics solutions, position limits management, and market surveillance. Located in Houston, Texas. Get in touch with our expert team today.',
  keywords: 'contact TradeNexus, Houston energy analytics, energy trading consultation, position limits help, market surveillance support',
};

export default function ContactPage() {
  const { contact } = companyData;

  return (
    <main className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-dark-900 to-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-primary mb-6">Contact TradeNexus</h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your energy trading operations? Get in touch with our expert team.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card-premium p-8">
              <h2 className="heading-tertiary text-dark-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">Company *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">Message *</label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us about your energy analytics needs..."
                  />
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>

            <div className="card-premium p-8">
              <h3 className="text-xl font-semibold text-dark-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-dark-900">Address</div>
                  <div className="text-gray-600 text-sm">
                    1600 Smith Street, Suite 3000<br />
                    Houston, Texas 77002
                  </div>
                </div>
                <div>
                  <div className="font-medium text-dark-900">Phone</div>
                  <div className="text-gray-600 text-sm">+1 (713) 555-0123</div>
                </div>
                <div>
                  <div className="font-medium text-dark-900">Email</div>
                  <div className="text-gray-600 text-sm">info@tradenexus.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 