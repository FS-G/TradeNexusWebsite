import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/molecules/Navigation';
import Footer from '@/components/molecules/Footer';

export const metadata: Metadata = {
  title: {
    default: 'TradeNexus - Energy Analytics & Trading Intelligence | Houston, Texas',
    template: '%s | TradeNexus'
  },
  description: 'Leading provider of energy analytics solutions for power and gas markets. Specializing in position limits, market surveillance, exchange data integration, and AI-powered trading intelligence in Houston, Texas.',
  keywords: [
    'energy analytics',
    'power market analysis',
    'gas trading',
    'position limits',
    'market surveillance',
    'exchange data',
    'energy trading',
    'Houston energy',
    'trading analytics',
    'AI energy',
    'energy intelligence',
    'power trading',
    'gas analytics',
    'energy compliance',
    'trading technology'
  ],
  authors: [{ name: 'TradeNexus Team' }],
  creator: 'TradeNexus',
  publisher: 'TradeNexus',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.tradenexus.com',
    title: 'TradeNexus - Energy Analytics & Trading Intelligence',
    description: 'Leading provider of energy analytics solutions for power and gas markets. AI-powered trading intelligence in Houston, Texas.',
    siteName: 'TradeNexus',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TradeNexus Energy Analytics Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradeNexus - Energy Analytics & Trading Intelligence',
    description: 'Leading provider of energy analytics solutions for power and gas markets. AI-powered trading intelligence.',
    images: ['/og-image.jpg'],
    creator: '@tradenexus',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.tradenexus.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
      </head>
      <body className="antialiased bg-gradient-to-br from-white to-gray-50 min-h-screen">
        <div id="root">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
} 