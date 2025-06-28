import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/atoms/Container';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import caseStudiesData from '@/data/case-studies.json';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return caseStudiesData.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = caseStudiesData.find((cs) => cs.slug === params.slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | TradeNexus',
    };
  }

  return {
    title: `${caseStudy.title} - Case Study | TradeNexus`,
    description: caseStudy.description,
    keywords: caseStudy.keywords.join(', '),
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudiesData.find((cs) => cs.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedCaseStudies = caseStudiesData
    .filter((cs) => cs.industry === caseStudy.industry && cs.id !== caseStudy.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 to-primary-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-primary-300 bg-primary-800/30 px-3 py-1 rounded-full">
                {caseStudy.industry}
              </span>
              <span className="text-sm text-gray-400">{caseStudy.duration}</span>
            </div>
            <h1 className="heading-primary mb-6 text-left">
              {caseStudy.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {caseStudy.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">{caseStudy.client.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-white font-medium">{caseStudy.client}</div>
                  <div className="text-gray-400 text-sm">{caseStudy.industry} Industry</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button href="/case-studies" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-900" size="sm">
                  All Case Studies
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge & Solution Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="heading-tertiary text-dark-900 mb-6">The Challenge</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {caseStudy.challenge}
                </p>
                
                <h3 className="text-xl font-semibold text-dark-900 mb-4">Key Issues Addressed</h3>
                <ul className="space-y-3">
                  {[
                    'Regulatory compliance requirements',
                    'Risk management limitations',
                    'Data integration challenges',
                    'Real-time monitoring gaps'
                  ].map((issue, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="heading-tertiary text-dark-900 mb-6">Our Solution</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {caseStudy.solution}
                </p>
                
                <h3 className="text-xl font-semibold text-dark-900 mb-4">Technologies Implemented</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full border border-primary-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-secondary text-dark-900 mb-12">Measurable Results</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {caseStudy.results.slice(0, 4).map((result, index) => (
                <Card key={index} padding="lg" className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {result.includes('%') ? result.split(' ')[0] : result.split(' ')[0]}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {result.includes('%') 
                      ? result.split(' ').slice(1).join(' ')
                      : result.split(' ').slice(1).join(' ')
                    }
                  </p>
                </Card>
              ))}
            </div>

            {caseStudy.results.length > 4 && (
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {caseStudy.results.slice(4).map((result, index) => (
                  <Card key={index + 4} padding="md" className="text-center">
                    <p className="text-gray-700 font-medium">{result}</p>
                  </Card>
                ))}
              </div>
            )}

            {/* Detailed Performance Metrics */}
            <div className="mt-16">
              <h3 className="text-xl font-bold text-dark-900 mb-8">Detailed Performance Analysis</h3>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-semibold text-dark-900 mb-6">Financial Impact Breakdown</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Cost Reduction</span>
                        <span className="font-bold text-green-600">$2.3M annually</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        • 65% reduction in manual compliance processes<br/>
                        • 45% decrease in operational overhead<br/>
                        • 30% savings in technology infrastructure costs
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Revenue Enhancement</span>
                        <span className="font-bold text-green-600">$1.8M annually</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        • 25% increase in trading efficiency<br/>
                        • 18% improvement in market timing<br/>
                        • 12% better risk-adjusted returns
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Risk Mitigation Value</span>
                        <span className="font-bold text-green-600">$3.2M protected</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        • 85% reduction in compliance violations<br/>
                        • 90% faster incident response time<br/>
                        • 99.9% system availability achieved
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 mb-6">Operational Excellence Metrics</h4>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-900 mb-3">Process Improvements</h5>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">92%</div>
                          <div className="text-blue-700">Automation Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">78%</div>
                          <div className="text-blue-700">Time Savings</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">99.7%</div>
                          <div className="text-blue-700">Accuracy Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">85%</div>
                          <div className="text-blue-700">User Satisfaction</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-purple-900 mb-3">Technology Performance</h5>
                      <div className="space-y-2 text-xs text-purple-700">
                        <div className="flex justify-between">
                          <span>System Response Time:</span>
                          <span className="font-medium">&lt; 50ms average</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Data Processing Speed:</span>
                          <span className="font-medium">150M records/second</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Uptime Achievement:</span>
                          <span className="font-medium">99.98% SLA</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Concurrent Users:</span>
                          <span className="font-medium">500+ simultaneous</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Implementation Timeline */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-secondary text-dark-900 mb-6">Detailed Implementation Journey</h2>
              <p className="text-corporate max-w-3xl mx-auto">
                A comprehensive timeline of the {caseStudy.duration} implementation process, highlighting key milestones and achievements.
              </p>
            </div>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-dark-900 mb-6">Phase 1: Discovery & Planning (Weeks 1-4)</h3>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-4">Business Assessment</h4>
                    <ul className="space-y-2 text-blue-700 text-sm">
                      <li>• Comprehensive stakeholder interviews</li>
                      <li>• Current system architecture analysis</li>
                      <li>• Workflow mapping and optimization</li>
                      <li>• Risk assessment and mitigation planning</li>
                      <li>• Compliance requirements documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-4">Technical Evaluation</h4>
                    <ul className="space-y-2 text-blue-700 text-sm">
                      <li>• Infrastructure capacity assessment</li>
                      <li>• Network performance testing</li>
                      <li>• Security posture evaluation</li>
                      <li>• Integration point identification</li>
                      <li>• Data quality analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-4">Solution Design</h4>
                    <ul className="space-y-2 text-blue-700 text-sm">
                      <li>• Custom configuration planning</li>
                      <li>• Architecture blueprint creation</li>
                      <li>• Performance optimization strategy</li>
                      <li>• Training curriculum development</li>
                      <li>• Go-live strategy definition</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-dark-900 mb-6">Phase 2: Development & Configuration (Weeks 5-12)</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-green-900 mb-4">Platform Development</h4>
                    <ul className="space-y-2 text-green-700 text-sm">
                      <li>• Core platform installation and configuration</li>
                      <li>• Custom module development for specific requirements</li>
                      <li>• API integration with existing systems</li>
                      <li>• Database migration and optimization</li>
                      <li>• Security framework implementation</li>
                      <li>• Performance tuning and load testing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-4">Quality Assurance</h4>
                    <ul className="space-y-2 text-green-700 text-sm">
                      <li>• Comprehensive unit and integration testing</li>
                      <li>• Security penetration testing</li>
                      <li>• Performance and stress testing</li>
                      <li>• User acceptance testing coordination</li>
                      <li>• Documentation and training materials</li>
                      <li>• Disaster recovery testing</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-dark-900 mb-6">Phase 3: Deployment & Training (Weeks 13-16)</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-4">Production Deployment</h4>
                    <ul className="space-y-2 text-purple-700 text-sm">
                      <li>• Phased production rollout strategy</li>
                      <li>• Data migration and validation</li>
                      <li>• System monitoring and alerting setup</li>
                      <li>• Performance baseline establishment</li>
                      <li>• Backup and recovery procedures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-4">User Enablement</h4>
                    <ul className="space-y-2 text-purple-700 text-sm">
                      <li>• Comprehensive user training programs</li>
                      <li>• Administrator certification courses</li>
                      <li>• Documentation and knowledge base</li>
                      <li>• Change management support</li>
                      <li>• 24/7 go-live support coverage</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-dark-900 mb-6">Phase 4: Optimization & Support (Ongoing)</h3>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-4">Performance Monitoring</h4>
                    <ul className="space-y-2 text-orange-700 text-sm">
                      <li>• Real-time system monitoring</li>
                      <li>• SLA compliance tracking</li>
                      <li>• User adoption analytics</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-4">Continuous Improvement</h4>
                    <ul className="space-y-2 text-orange-700 text-sm">
                      <li>• Regular system updates</li>
                      <li>• Feature enhancement requests</li>
                      <li>• Process optimization</li>
                      <li>• Best practice recommendations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-4">Ongoing Support</h4>
                    <ul className="space-y-2 text-orange-700 text-sm">
                      <li>• 24/7 technical support</li>
                      <li>• Regular health checks</li>
                      <li>• Proactive maintenance</li>
                      <li>• Strategic consulting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Lessons Learned & Best Practices */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-secondary text-dark-900 mb-6">Lessons Learned & Best Practices</h2>
              <p className="text-corporate max-w-3xl mx-auto">
                Key insights and recommendations derived from this successful implementation.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-8">Critical Success Factors</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-3">Strong Executive Sponsorship</h4>
                    <p className="text-green-700 text-sm mb-3">
                      Leadership commitment was essential for driving organizational change and ensuring resource allocation.
                    </p>
                    <ul className="text-green-600 text-xs space-y-1">
                      <li>• Weekly executive steering committee meetings</li>
                      <li>• Clear communication of business objectives</li>
                      <li>• Resource commitment and prioritization</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900 mb-3">Comprehensive Training Program</h4>
                    <p className="text-blue-700 text-sm mb-3">
                      Early and extensive user training significantly accelerated adoption and reduced resistance to change.
                    </p>
                    <ul className="text-blue-600 text-xs space-y-1">
                      <li>• Role-based training curriculum</li>
                      <li>• Hands-on workshops and simulations</li>
                      <li>• Super-user champion network</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-900 mb-3">Phased Implementation Approach</h4>
                    <p className="text-purple-700 text-sm mb-3">
                      Gradual rollout allowed for learning and adjustment, minimizing business disruption.
                    </p>
                    <ul className="text-purple-600 text-xs space-y-1">
                      <li>• Pilot deployment with limited users</li>
                      <li>• Iterative feedback and improvements</li>
                      <li>• Measured expansion to full organization</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-8">Challenges Overcome</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-900 mb-3">Legacy System Integration</h4>
                    <p className="text-red-700 text-sm mb-3">
                      Complex integration with 15+ legacy systems required custom API development and data mapping.
                    </p>
                    <div className="text-red-600 text-xs">
                      <strong>Solution:</strong> Implemented enterprise service bus architecture with standardized data formats
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-yellow-900 mb-3">Regulatory Compliance Complexity</h4>
                    <p className="text-yellow-700 text-sm mb-3">
                      Multiple regulatory frameworks required careful audit trail design and reporting capabilities.
                    </p>
                    <div className="text-yellow-600 text-xs">
                      <strong>Solution:</strong> Built configurable compliance engine with real-time monitoring and automated reporting
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg border-l-4 border-indigo-500">
                    <h4 className="font-semibold text-indigo-900 mb-3">Performance Requirements</h4>
                    <p className="text-indigo-700 text-sm mb-3">
                      Ultra-low latency requirements for real-time trading demanded extensive optimization.
                    </p>
                    <div className="text-indigo-600 text-xs">
                      <strong>Solution:</strong> Implemented in-memory computing with edge caching and optimized algorithms
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900 text-white">
        <Container className="text-center">
          <h2 className="heading-secondary mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results with our energy analytics solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Start Your Project
            </Button>
            <Button href="/services" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-900">
              Explore Our Services
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
} 