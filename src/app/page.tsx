import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Energy Analytics & Trading Intelligence Platform | TradeNexus Houston',
  description: 'Advanced energy analytics platform for power and gas markets. AI-powered position limits, market surveillance, exchange data integration, and trading intelligence in Houston, Texas.',
  keywords: 'energy analytics, power trading, gas markets, position limits, market surveillance, Houston energy, trading platform',
  openGraph: {
    title: 'TradeNexus - Energy Analytics & Trading Intelligence Platform',
    description: 'Advanced energy analytics for power and gas markets with AI-powered intelligence.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-4000"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 text-balance">
              Empowering Energy Analytics with AI Intelligence
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Advanced analytics solutions for power and gas markets. Position limits management, market surveillance, and real-time trading intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Started Today
              </a>
              <a href="/services" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-dark-900">
                Explore Services
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">250+</div>
                <div className="text-sm text-gray-400">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">10B+</div>
                <div className="text-sm text-gray-400">Data Points Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-dark-900 mb-6">
              Comprehensive Energy Analytics Solutions
            </h2>
            <p className="text-corporate max-w-3xl mx-auto">
              Our suite of advanced analytics tools empowers energy traders with real-time insights and AI-powered intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-premium p-8">
              <h3 className="text-xl font-semibold text-dark-900 mb-4">Energy Analytics Platform</h3>
              <p className="text-gray-600 mb-6">
                Real-time market analysis with predictive analytics for power and gas markets.
              </p>
              <a href="/services" className="text-primary-600 font-medium">Learn More →</a>
            </div>
            
            <div className="card-premium p-8">
              <h3 className="text-xl font-semibold text-dark-900 mb-4">Position Limits Management</h3>
              <p className="text-gray-600 mb-6">
                Automated monitoring and compliance management with real-time alerts.
              </p>
              <a href="/services" className="text-primary-600 font-medium">Learn More →</a>
            </div>
            
            <div className="card-premium p-8">
              <h3 className="text-xl font-semibold text-dark-900 mb-4">Market Surveillance</h3>
              <p className="text-gray-600 mb-6">
                AI-powered anomaly detection and market integrity monitoring.
              </p>
              <a href="/services" className="text-primary-600 font-medium">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary text-dark-900 mb-6">
                Leading Energy Analytics Innovation in Houston
              </h2>
              <p className="text-corporate mb-6">
                Based in Houston, Texas, TradeNexus is at the forefront of energy analytics innovation. 
                We specialize in providing cutting-edge solutions for power and gas markets, helping 
                traders make informed decisions with our AI-powered platform.
              </p>
              <p className="text-corporate mb-8">
                Our comprehensive suite includes position limits management, market surveillance, 
                exchange data integration, and advanced visual analytics—all designed to optimize 
                trading performance and ensure regulatory compliance.
              </p>
              <a href="/about" className="btn-outline">
                Learn About Us
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary-600 mb-4">5+</div>
                  <div className="text-lg text-primary-800 font-medium mb-2">Years of Excellence</div>
                  <div className="text-primary-700">Serving the energy industry</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-secondary mb-6">
            Ready to Transform Your Energy Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 250+ energy companies already using TradeNexus to optimize their trading operations 
            and achieve superior market performance.
          </p>
          <a href="/contact" className="btn-primary mr-4">
            Get Started
          </a>
          <a href="/case-studies" className="btn-outline border-white text-white hover:bg-white hover:text-dark-900">
            View Case Studies
          </a>
        </div>
      </section>
    </main>
  );
} 