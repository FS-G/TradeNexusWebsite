import type { Metadata } from 'next';
import Container from '@/components/atoms/Container';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import servicesData from '@/data/services.json';

export const metadata: Metadata = {
  title: 'Energy Analytics Services - Position Limits, Market Surveillance | TradeNexus',
  description: 'Comprehensive energy analytics services including position limits management, market surveillance, exchange data integration, and AI-powered alerts for power and gas markets.',
  keywords: 'energy analytics services, position limits management, market surveillance, exchange data integration, AI alerts, visual analytics, energy trading platform',
};

export default function ServicesPage() {
  const categories = Array.from(new Set(servicesData.map(service => service.category)));

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 to-primary-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-primary mb-6">
              Energy Analytics Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive suite of advanced analytics tools designed to optimize energy trading performance, 
              ensure regulatory compliance, and provide real-time market intelligence for power and gas markets.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">{servicesData.length}</div>
                <div className="text-sm text-gray-400">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-dark-900 mb-6">Our Complete Service Portfolio</h2>
            <p className="text-corporate max-w-3xl mx-auto">
              From real-time analytics to compliance management, our integrated platform provides everything 
              you need for successful energy trading operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {servicesData.map((service) => (
              <Card key={service.id} padding="lg" className="h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{service.category.charAt(0)}</span>
                        </div>
                        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-dark-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h4 className="font-semibold text-dark-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-dark-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2 mb-8">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button href={`/services/${service.slug}`} variant="primary" size="sm">
                      Learn More
                    </Button>
                    <Button href="/contact" variant="outline" size="sm">
                      Get Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Categories Overview */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-dark-900 mb-6">Service Categories</h2>
            <p className="text-corporate max-w-3xl mx-auto">
              Our services are organized into key categories to address every aspect of energy trading and analytics.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const categoryServices = servicesData.filter(service => service.category === category);
              return (
                <Card key={category} padding="lg" className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">{category.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-dark-900 mb-4">{category}</h3>
                  <p className="text-gray-600 mb-6">
                    {categoryServices.length} service{categoryServices.length !== 1 ? 's' : ''} available
                  </p>
                  <ul className="space-y-2 text-left">
                    {categoryServices.map((service) => (
                      <li key={service.id} className="text-sm text-gray-600">
                        • {service.title}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Implementation Process */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-dark-900 mb-6">Implementation Process</h2>
            <p className="text-corporate max-w-3xl mx-auto">
              Our streamlined implementation process ensures rapid deployment and seamless integration with your existing systems.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Comprehensive assessment of your current systems and requirements' },
              { step: '02', title: 'Design', description: 'Custom solution design tailored to your specific trading operations' },
              { step: '03', title: 'Deploy', description: 'Rapid deployment with minimal disruption to your trading activities' },
              { step: '04', title: 'Support', description: 'Ongoing support and optimization to ensure maximum performance' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900 text-white">
        <Container className="text-center">
          <h2 className="heading-secondary mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our energy analytics services can transform your trading operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Schedule Consultation
            </Button>
            <Button href="/case-studies" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-900">
              View Case Studies
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
} 