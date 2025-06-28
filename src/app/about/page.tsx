import type { Metadata } from 'next';
import Container from '@/components/atoms/Container';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import companyData from '@/data/company.json';

export const metadata: Metadata = {
  title: 'About TradeNexus - Energy Analytics Leaders in Houston, Texas',
  description: 'Learn about TradeNexus, a leading provider of energy analytics solutions in Houston. Our mission, vision, values, and expert team driving innovation in power and gas markets.',
  keywords: 'about TradeNexus, energy analytics company, Houston energy, power market experts, gas trading specialists, energy technology leaders',
};

export default function AboutPage() {
  const { company, team } = companyData;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 to-primary-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-primary mb-6">
              About TradeNexus
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {company.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">{company.statistics.clients_served}</div>
                <div className="text-sm text-gray-400">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">{company.statistics.years_experience}</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">{company.statistics.team_size}</div>
                <div className="text-sm text-gray-400">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">{company.statistics.markets_covered}</div>
                <div className="text-sm text-gray-400">Markets Covered</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card padding="lg">
              <h2 className="heading-tertiary text-dark-900 mb-6">Our Mission</h2>
              <p className="text-corporate">{company.mission}</p>
            </Card>
            <Card padding="lg">
              <h2 className="heading-tertiary text-dark-900 mb-6">Our Vision</h2>
              <p className="text-corporate">{company.vision}</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-dark-900 mb-6">Our Core Values</h2>
            <p className="text-corporate max-w-3xl mx-auto">
              These fundamental principles guide everything we do at TradeNexus and define our commitment to excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {company.values.map((value, index) => (
              <Card key={index} padding="lg" className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">{value.title.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Location & Services */}
      <section className="section-padding bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary text-dark-900 mb-6">
                Serving Energy Markets from Houston
              </h2>
              <p className="text-corporate mb-6">
                Located in the heart of America&apos;s energy capital, TradeNexus is uniquely positioned to understand 
                and serve the complex needs of energy markets. Our Houston headquarters puts us at the center of 
                the energy trading ecosystem.
              </p>
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-dark-900">Industries We Serve:</h3>
                <div className="grid grid-cols-1 gap-2">
                  {company.industries_served.map((industry, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-600">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button href="/contact" variant="primary">
                Get in Touch
              </Button>
            </div>
            <Card padding="lg">
              <h3 className="text-xl font-semibold text-dark-900 mb-6">Our Expertise</h3>
              <div className="space-y-4">
                {company.specializations.map((specialization, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"></div>
                    <span className="text-gray-600">{specialization}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900 text-white">
        <Container className="text-center">
          <h2 className="heading-secondary mb-6">Ready to Transform Your Energy Trading?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with TradeNexus and join the energy companies already leveraging our advanced analytics platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Contact Us Today
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