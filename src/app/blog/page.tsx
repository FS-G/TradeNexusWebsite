import type { Metadata } from 'next';
import Link from 'next/link';
import blogsData from '@/data/blogs.json';
import additionalBlogs from '@/data/blogs-additional.json';

export const metadata: Metadata = {
  title: 'Energy Analytics Blog - Insights & Trends | TradeNexus',
  description: 'Latest insights on energy analytics, power market analysis, gas trading, position limits, and market surveillance from TradeNexus energy experts.',
  keywords: 'energy analytics blog, power market insights, gas trading trends, energy market analysis, trading analytics',
};

export default function BlogPage() {
  const allBlogs = [...blogsData, ...additionalBlogs].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const categories = Array.from(new Set(allBlogs.map(blog => blog.category)));
  const featuredBlog = allBlogs[0];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 to-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-primary mb-6">Energy Analytics Insights</h1>
            <p className="text-xl text-gray-300 mb-8">
              Stay informed with the latest trends, analysis, and insights in energy markets, 
              trading analytics, and regulatory developments.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">{allBlogs.length}</div>
                <div className="text-sm text-gray-400">Articles Published</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">{categories.length}</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">Weekly</div>
                <div className="text-sm text-gray-400">New Content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredBlog && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-secondary text-dark-900 mb-6">Featured Article</h2>
            </div>
            <div className="card-premium p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {featuredBlog.category}
                    </span>
                    <span className="text-sm text-gray-500">{featuredBlog.readTime}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-dark-900 mb-4 leading-tight">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      By {featuredBlog.author} • {new Date(featuredBlog.date).toLocaleDateString()}
                    </div>
                    <Link 
                      href={`/blog/${featuredBlog.slug}`}
                      className="btn-primary"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl h-64 lg:h-80 flex items-center justify-center">
                  <div className="text-center text-primary-700">
                    <div className="text-4xl font-bold mb-2">Featured</div>
                    <div className="text-lg">Article</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-dark-900 mb-6">Browse by Category</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const categoryBlogs = allBlogs.filter(blog => blog.category === category);
              return (
                <div key={category} className="card-premium p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{category.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-900 mb-2">{category}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {categoryBlogs.length} article{categoryBlogs.length !== 1 ? 's' : ''}
                  </p>
                  <Link 
                    href={`/blog?category=${encodeURIComponent(category)}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    View All →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-dark-900 mb-6">Latest Articles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogs.slice(1).map((blog) => (
              <article key={blog.id} className="card-premium p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-500">{blog.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-3 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {blog.excerpt.substring(0, 120)}...
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>By {blog.author}</span>
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                <Link 
                  href={`/blog/${blog.slug}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-secondary mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest energy market insights and analytics trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="btn-primary px-6 py-3">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
} 