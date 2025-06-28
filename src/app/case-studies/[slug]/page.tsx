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
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.results.slice(4).map((result, index) => (
                  <Card key={index + 4} padding="md" className="text-center">
                    <p className="text-gray-700 font-medium">{result}</p>
                  </Card>
                ))}
              </div>
            )}
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