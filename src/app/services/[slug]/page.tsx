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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

          {/* Detailed Technical Specifications */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-900 mb-8 text-center">Comprehensive Technical Details</h3>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold text-dark-900 mb-6">Infrastructure & Performance</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">Data Processing Capacity</h5>
                    <p className="text-gray-600 text-sm">• 100+ million data points per second<br/>• 99.99% uptime SLA guarantee<br/>• Sub-100ms response times<br/>• Auto-scaling to handle peak loads</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">Cloud Infrastructure</h5>
                    <p className="text-gray-600 text-sm">• Multi-cloud deployment (AWS, Azure, GCP)<br/>• Kubernetes orchestration<br/>• Redundant data centers globally<br/>• Edge computing capabilities</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">Database Technology</h5>
                    <p className="text-gray-600 text-sm">• Time-series databases for market data<br/>• Real-time analytics with Apache Kafka<br/>• Data lake architecture for historical analysis<br/>• In-memory computing for low latency</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-dark-900 mb-6">Security & Compliance</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">Data Security</h5>
                    <p className="text-gray-600 text-sm">• AES-256 encryption at rest and in transit<br/>• Zero-trust security architecture<br/>• Multi-factor authentication<br/>• Role-based access controls</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">Regulatory Compliance</h5>
                    <p className="text-gray-600 text-sm">• SOC 2 Type II certified<br/>• GDPR and CCPA compliant<br/>• FINRA and CFTC reporting ready<br/>• ISO 27001 security standards</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-2">Audit & Monitoring</h5>
                    <p className="text-gray-600 text-sm">• Comprehensive audit trails<br/>• Real-time security monitoring<br/>• Automated threat detection<br/>• 24/7 security operations center</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Implementation Methodology */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-dark-900 mb-6">Implementation Methodology</h2>
            <p className="text-corporate max-w-3xl mx-auto">
              Our proven implementation approach ensures rapid deployment with minimal business disruption and maximum ROI.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-xl font-semibold text-dark-900 mb-6">Phase 1: Discovery & Assessment</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Business Requirements Analysis</h4>
                      <p className="text-gray-600 text-sm">• Stakeholder interviews and workflow mapping<br/>• Current system architecture review<br/>• Performance baseline establishment<br/>• Risk assessment and mitigation planning</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Technical Environment Audit</h4>
                      <p className="text-gray-600 text-sm">• Infrastructure capacity evaluation<br/>• Network performance testing<br/>• Security posture assessment<br/>• Integration point identification</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Compliance & Regulatory Review</h4>
                      <p className="text-gray-600 text-sm">• Regulatory requirement mapping<br/>• Compliance gap analysis<br/>• Audit trail requirements<br/>• Reporting obligations assessment</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-900 mb-6">Phase 2: Design & Planning</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Solution Architecture Design</h4>
                      <p className="text-gray-600 text-sm">• Custom configuration planning<br/>• Data flow architecture<br/>• Integration design patterns<br/>• Scalability and performance optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Security Implementation Plan</h4>
                      <p className="text-gray-600 text-sm">• Access control matrix<br/>• Encryption key management<br/>• Network security configuration<br/>• Monitoring and alerting setup</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Training & Change Management</h4>
                      <p className="text-gray-600 text-sm">• User training curriculum development<br/>• Change management strategy<br/>• Support documentation creation<br/>• Go-live readiness checklist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-900 mb-6 text-center">Phase 3: Development & Testing</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">DEV</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">Development Environment</h4>
                  <p className="text-gray-600 text-sm">• Agile development methodology<br/>• Continuous integration/deployment<br/>• Code quality assurance<br/>• Version control and documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">TEST</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">Testing & Validation</h4>
                  <p className="text-gray-600 text-sm">• Unit and integration testing<br/>• Performance and load testing<br/>• Security penetration testing<br/>• User acceptance testing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">UAT</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">User Acceptance</h4>
                  <p className="text-gray-600 text-sm">• Business scenario validation<br/>• Performance benchmarking<br/>• Compliance verification<br/>• Go-live approval process</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ROI Analysis */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-dark-900 mb-6">Return on Investment Analysis</h2>
            <p className="text-corporate max-w-3xl mx-auto">
              Quantifiable business value and measurable returns from implementing {service.title}.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card padding="lg">
                <h3 className="text-xl font-semibold text-dark-900 mb-6">Financial Benefits</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">Risk Reduction Savings</span>
                    <span className="font-bold text-green-600">$2.5M - $5M annually</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">Operational Efficiency Gains</span>
                    <span className="font-bold text-green-600">35% - 50% cost reduction</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">Compliance Cost Avoidance</span>
                    <span className="font-bold text-green-600">$500K - $1.2M annually</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">Revenue Enhancement</span>
                    <span className="font-bold text-green-600">15% - 25% increase</span>
                  </div>
                  <div className="flex justify-between items-center py-3 font-bold text-lg">
                    <span className="text-gray-900">Total Annual Value</span>
                    <span className="text-green-600">$3M - $7.2M</span>
                  </div>
                </div>
              </Card>
              <Card padding="lg">
                <h3 className="text-xl font-semibold text-dark-900 mb-6">Operational Improvements</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Time Savings</h4>
                    <p className="text-blue-700 text-sm">• 80% reduction in manual reporting<br/>• 90% faster compliance audits<br/>• 60% decrease in data preparation time<br/>• Real-time decision making capability</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Quality Improvements</h4>
                    <p className="text-green-700 text-sm">• 99.9% data accuracy guarantee<br/>• Automated error detection and correction<br/>• Standardized reporting formats<br/>• Enhanced audit trail completeness</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Strategic Advantages</h4>
                    <p className="text-purple-700 text-sm">• Competitive market intelligence<br/>• Proactive risk management<br/>• Scalable infrastructure for growth<br/>• Enhanced regulatory compliance</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-dark-900 mb-6 text-center">Payback Period Analysis</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">6-12</div>
                  <div className="text-sm text-gray-600">Months to ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">300%</div>
                  <div className="text-sm text-gray-600">3-Year ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">$15M</div>
                  <div className="text-sm text-gray-600">5-Year Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">450%</div>
                  <div className="text-sm text-gray-600">5-Year ROI</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Integration Capabilities */}
      <section className="section-padding bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-dark-900 mb-6">Integration Capabilities</h2>
            <p className="text-corporate max-w-3xl mx-auto">
              Seamless connectivity with your existing systems and third-party platforms for unified operations.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <Card padding="lg" className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">API</span>
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-4">RESTful APIs</h3>
                <p className="text-gray-600 text-sm mb-4">Modern REST API architecture with comprehensive documentation and SDK support.</p>
                <ul className="text-left text-gray-600 text-xs space-y-1">
                  <li>• Real-time data streaming</li>
                  <li>• Batch data processing</li>
                  <li>• Webhook notifications</li>
                  <li>• Rate limiting and throttling</li>
                  <li>• OAuth 2.0 authentication</li>
                </ul>
              </Card>
              <Card padding="lg" className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">FTP</span>
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-4">File Transfer</h3>
                <p className="text-gray-600 text-sm mb-4">Secure file transfer protocols for bulk data exchange and legacy system integration.</p>
                <ul className="text-left text-gray-600 text-xs space-y-1">
                  <li>• SFTP/FTPS secure protocols</li>
                  <li>• Automated file processing</li>
                  <li>• Error handling and retry logic</li>
                  <li>• File format validation</li>
                  <li>• Scheduled batch transfers</li>
                </ul>
              </Card>
              <Card padding="lg" className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">MQ</span>
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-4">Message Queues</h3>
                <p className="text-gray-600 text-sm mb-4">Enterprise message queuing for reliable, asynchronous communication.</p>
                <ul className="text-left text-gray-600 text-xs space-y-1">
                  <li>• Apache Kafka streaming</li>
                  <li>• RabbitMQ messaging</li>
                  <li>• IBM MQ integration</li>
                  <li>• Message persistence</li>
                  <li>• Dead letter queue handling</li>
                </ul>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-dark-900 mb-8 text-center">Supported Exchange Connections</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  'ICE (Intercontinental Exchange)',
                  'NYMEX (New York Mercantile Exchange)',
                  'CME Group',
                  'EEX (European Energy Exchange)',
                  'Nord Pool',
                  'EPEX SPOT',
                  'PJM Interconnection',
                  'ERCOT (Electric Reliability Council of Texas)'
                ].map((exchange, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 text-sm font-medium">{exchange}</p>
                  </div>
                ))}
              </div>
            </div>
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