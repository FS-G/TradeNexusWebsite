import type { Metadata } from 'next';
import Link from 'next/link';
import caseStudiesData from '@/data/case-studies.json';

export const metadata: Metadata = {
  title: 'Case Studies - Energy Analytics Success Stories | TradeNexus',
  description: 'Discover how TradeNexus energy analytics solutions helped companies reduce risk, improve compliance, and optimize trading performance.',
  keywords: 'energy analytics case studies, trading success stories, position limits case study, market surveillance results',
};

export default function CaseStudiesPage() {
  const industries = Array.from(new Set(caseStudiesData.map(study => study.industry)));

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 to-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-primary mb-6">Success Stories</h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover how leading energy companies transformed their operations with TradeNexus analytics solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">{caseStudiesData.length}</div>
                <div className="text-sm text-gray-400">Case Studies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">40%</div>
                <div className="text-sm text-gray-400">Avg Risk Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Uptime Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">$2M+</div>
                <div className="text-sm text-gray-400">Revenue Protected</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-dark-900 mb-6">Industries We Serve</h2>
            <p className="text-corporate max-w-3xl mx-auto">
              Our solutions have proven successful across various energy industry segments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const industryStudies = caseStudiesData.filter(study => study.industry === industry);
              return (
                <div key={industry} className="card-premium p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{industry.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-900 mb-2">{industry}</h3>
                  <p className="text-gray-600 text-sm">
                    {industryStudies.length} case stud{industryStudies.length === 1 ? 'y' : 'ies'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-dark-900 mb-6">Client Success Stories</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudiesData.map((study) => (
              <article key={study.id} className="card-premium p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-sm text-gray-500">{study.duration}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-dark-900 mb-4 leading-tight">
                  {study.title}
                </h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark-900 mb-2">Challenge</h4>
                  <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-dark-900 mb-2">Solution</h4>
                  <p className="text-gray-600 text-sm mb-4">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark-900 mb-3">Key Results</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {study.results.slice(0, 4).map((result, index) => (
                      <div key={index} className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-sm font-medium text-green-800">{result}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark-900 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href={`/case-studies/${study.slug}`}
                  className="btn-primary"
                >
                  Read Full Case Study
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-secondary mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join these industry leaders and transform your energy trading operations with TradeNexus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Started Today
            </Link>
            <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-dark-900">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 