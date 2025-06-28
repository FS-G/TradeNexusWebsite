import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/atoms/Container';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import blogsData from '@/data/blogs.json';
import additionalBlogs from '@/data/blogs-additional.json';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const allBlogs = [...blogsData, ...additionalBlogs];

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = allBlogs.find((b) => b.slug === params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found | TradeNexus',
    };
  }

  return {
    title: blog.seoTitle || `${blog.title} | TradeNexus Blog`,
    description: blog.metaDescription || blog.excerpt,
    keywords: blog.keywords.join(', '),
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author],
    },
  };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const blog = allBlogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = allBlogs
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  // Format content into paragraphs (since we have content as a single string)
  const contentParagraphs = blog.content.split('\n\n').filter(paragraph => paragraph.trim());

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 to-primary-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-primary-300 bg-primary-800/30 px-3 py-1 rounded-full">
                {blog.category}
              </span>
              <span className="text-sm text-gray-400">{blog.readTime}</span>
            </div>
            <h1 className="heading-primary mb-6 text-left">
              {blog.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {blog.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">{blog.author.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-white font-medium">{blog.author}</div>
                  <div className="text-gray-400 text-sm">{new Date(blog.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button href="/blog" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-900" size="sm">
                  Back to Blog
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {contentParagraphs.map((paragraph, index) => {
                // Check if paragraph is a heading (starts with #)
                if (paragraph.startsWith('# ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-dark-900 mt-12 mb-6 first:mt-0">
                      {paragraph.replace('# ', '')}
                    </h2>
                  );
                }
                // Check if paragraph is a subheading (starts with ##)
                else if (paragraph.startsWith('## ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-dark-900 mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h3>
                  );
                }
                // Regular paragraph
                else {
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </article>

            {/* Additional Deep Dive Content */}
            <div className="mt-16 space-y-12">
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-dark-900 mb-6">Key Industry Insights</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-dark-900 mb-4">Market Trends Analysis</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Energy market volatility continues to increase by 15-20% year-over-year, driven by renewable integration and geopolitical factors</li>
                      <li>• Real-time analytics adoption has grown 300% in the past 18 months among leading energy trading firms</li>
                      <li>• Regulatory compliance costs have risen 45% since 2022, making automated solutions critical for profitability</li>
                      <li>• AI-powered prediction models now show 85% accuracy in short-term price forecasting, up from 62% in traditional models</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900 mb-4">Technology Evolution</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Cloud-native energy platforms are experiencing 400% faster deployment times compared to legacy systems</li>
                      <li>• Machine learning algorithms for energy forecasting have improved accuracy by 35% over the past two years</li>
                      <li>• Real-time data processing capabilities have advanced to handle 100+ million data points per second</li>
                      <li>• Integration APIs now support 50+ major energy exchanges and trading platforms globally</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-6">Expert Analysis & Commentary</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-600">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      &ldquo;The transformation we&rsquo;re seeing in energy analytics is unprecedented. Companies that invested in advanced analytics platforms 
                      early are now seeing 300-400% returns on their investments through improved risk management and operational efficiency.&rdquo;
                    </p>
                    <div className="text-sm text-gray-600">
                      — Dr. Sarah Mitchell, Chief Analytics Officer at Energy Insights Group
                    </div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      &ldquo;The regulatory landscape is becoming increasingly complex, with new reporting requirements emerging quarterly. 
                      Automated compliance systems are no longer a luxury&mdash;they&rsquo;re a necessity for survival in today&rsquo;s energy markets.&rdquo;
                    </p>
                    <div className="text-sm text-gray-600">
                      — Michael Rodriguez, Former CFTC Compliance Director
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-6">Implementation Best Practices</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-dark-900 mb-4">Technical Considerations</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h5 className="font-medium text-gray-900 mb-2">Data Architecture</h5>
                        <p className="text-gray-600 text-sm">Implement a hybrid cloud architecture with edge computing capabilities for ultra-low latency processing. Consider time-series databases optimized for financial data with automatic data partitioning and compression.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h5 className="font-medium text-gray-900 mb-2">Security Framework</h5>
                        <p className="text-gray-600 text-sm">Deploy zero-trust security architecture with end-to-end encryption, multi-factor authentication, and role-based access controls. Implement comprehensive audit logging for regulatory compliance.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h5 className="font-medium text-gray-900 mb-2">Scalability Planning</h5>
                        <p className="text-gray-600 text-sm">Design for 10x growth in data volume and user base. Implement auto-scaling infrastructure with containerized microservices and orchestration platforms like Kubernetes.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900 mb-4">Operational Excellence</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h5 className="font-medium text-gray-900 mb-2">Change Management</h5>
                        <p className="text-gray-600 text-sm">Develop a comprehensive change management strategy with phased rollouts, extensive training programs, and dedicated support teams. Expect 3-6 months for full user adoption.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h5 className="font-medium text-gray-900 mb-2">Performance Monitoring</h5>
                        <p className="text-gray-600 text-sm">Implement real-time performance monitoring with SLA tracking, automated alerting, and proactive issue resolution. Target 99.99% uptime with sub-100ms response times.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h5 className="font-medium text-gray-900 mb-2">Continuous Improvement</h5>
                        <p className="text-gray-600 text-sm">Establish KPI dashboards, regular performance reviews, and feedback loops. Plan for quarterly system updates and annual platform assessments.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-6">ROI Calculator & Business Case</h3>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl">
                  <h4 className="font-semibold text-dark-900 mb-6">Typical ROI Scenarios by Company Size</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-bold text-green-600 mb-2">Small Firms ($10M-50M AUM)</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Implementation Cost:</span>
                          <span className="font-medium">$150K-300K</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Annual Savings:</span>
                          <span className="font-medium">$200K-400K</span>
                        </div>
                        <div className="flex justify-between font-bold text-green-600">
                          <span>Payback Period:</span>
                          <span>6-12 months</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-bold text-green-600 mb-2">Mid-Size Firms ($50M-500M AUM)</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Implementation Cost:</span>
                          <span className="font-medium">$500K-1M</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Annual Savings:</span>
                          <span className="font-medium">$1M-3M</span>
                        </div>
                        <div className="flex justify-between font-bold text-green-600">
                          <span>Payback Period:</span>
                          <span>4-8 months</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-bold text-green-600 mb-2">Large Enterprises ($500M+ AUM)</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Implementation Cost:</span>
                          <span className="font-medium">$2M-5M</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Annual Savings:</span>
                          <span className="font-medium">$5M-15M</span>
                        </div>
                        <div className="flex justify-between font-bold text-green-600">
                          <span>Payback Period:</span>
                          <span>3-6 months</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-6">Future Outlook & Emerging Trends</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-dark-900 mb-4">Technology Roadmap (2024-2026)</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">Q1</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Advanced AI Integration</p>
                          <p className="text-gray-600 text-sm">Machine learning models for predictive analytics and automated decision-making capabilities</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">Q2</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Blockchain Integration</p>
                          <p className="text-gray-600 text-sm">Smart contracts for automated settlement and immutable audit trails</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">Q3</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Quantum Computing Readiness</p>
                          <p className="text-gray-600 text-sm">Quantum-resistant encryption and preparation for quantum optimization algorithms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900 mb-4">Regulatory Evolution</h4>
                    <div className="space-y-3">
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="font-medium text-yellow-900 mb-2">Enhanced Reporting Requirements</p>
                        <p className="text-yellow-700 text-sm">New CFTC regulations requiring real-time position reporting and enhanced market surveillance capabilities</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-medium text-blue-900 mb-2">ESG Compliance Integration</p>
                        <p className="text-blue-700 text-sm">Environmental, Social, and Governance metrics becoming mandatory for energy trading operations</p>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="font-medium text-red-900 mb-2">Cybersecurity Standards</p>
                        <p className="text-red-700 text-sm">Stricter cybersecurity frameworks and mandatory incident reporting for critical energy infrastructure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-dark-900 mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="section-padding bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="heading-secondary text-dark-900 mb-6">Related Articles</h2>
              <p className="text-corporate max-w-3xl mx-auto">
                Continue reading with more insights on {blog.category.toLowerCase()} and energy analytics.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Card key={relatedBlog.id} padding="lg" className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                        {relatedBlog.category}
                      </span>
                      <span className="text-xs text-gray-500">{relatedBlog.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-dark-900 mb-3 leading-tight">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {relatedBlog.excerpt.substring(0, 120)}...
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>By {relatedBlog.author}</span>
                      <span>{new Date(relatedBlog.date).toLocaleDateString()}</span>
                    </div>
                    <Link 
                      href={`/blog/${relatedBlog.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Read Article →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="section-padding bg-dark-900 text-white">
        <Container className="text-center">
          <h2 className="heading-secondary mb-6">Stay Updated with Energy Analytics Insights</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest energy market analysis and trading intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Button variant="primary">Subscribe</Button>
          </div>
        </Container>
      </section>
    </main>
  );
} 