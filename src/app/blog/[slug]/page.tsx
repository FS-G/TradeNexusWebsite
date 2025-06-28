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