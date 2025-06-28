import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/atoms/Container';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import servicesData from '@/data/services.json';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found | TradeNexus',
    };
  }

  return {
    title: `${service.title} - Energy Analytics Service | TradeNexus`,
    description: service.description,
    keywords: service.keywords.join(', '),
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 to-primary-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">{service.category.charAt(0)}</span>
              </div>
              <span className="text-lg font-medium text-primary-300 bg-primary-800/30 px-4 py-2 rounded-full">
                {service.category}
              </span>
            </div>
            <h1 className="heading-primary mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Request Demo
              </Button>
              <Button href="/case-studies" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-900">
                View Success Stories
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="heading-secondary text-dark-900 mb-8">Key Features</h2>
              <div className="space-y-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-gray-700 text-lg leading-relaxed">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="heading-secondary text-dark-900 mb-8">Benefits</h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-gray-700 text-lg leading-relaxed">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>          
        </Container>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-dark-900 mb-6">Technical Specifications</h2>
            <p className="text-corporate max-w-3xl mx-auto">
              Advanced technology stack designed for enterprise-grade energy analytics and trading operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Real-Time Processing', description: 'Sub-millisecond data processing with high-frequency market data ingestion' },
              { title: 'Scalable Architecture', description: 'Cloud-native infrastructure that scales with your trading volume' },
              { title: 'Enterprise Security', description: 'Bank-grade security with end-to-end encryption and compliance' },
              { title: '24/7 Monitoring', description: 'Continuous system monitoring with proactive alerting and support' }
            ].map((spec, index) => (
              <Card key={index} padding="lg" className="text-center h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-3">{spec.title}</h3>
                <p className="text-gray-600 text-sm">{spec.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="heading-secondary text-dark-900 mb-6">Related Services</h2>
              <p className="text-corporate max-w-3xl mx-auto">
                Explore other services in the {service.category} category to build a comprehensive energy analytics solution.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <Card key={relatedService.id} padding="lg" className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{relatedService.category.charAt(0)}</span>
                      </div>
                      <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                        {relatedService.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-dark-900 mb-3">{relatedService.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">{relatedService.shortDescription}</p>
                    <Button href={`/services/${relatedService.slug}`} variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-dark-900 text-white">
        <Container className="text-center">
          <h2 className="heading-secondary mb-6">Ready to Get Started with {service.title}?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our experts to learn how this service can transform your energy trading operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Schedule Consultation
            </Button>
            <Button href="/services" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-900">
              View All Services
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
} 