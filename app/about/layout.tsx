import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Datalake - Technology Consulting for Digital Transformation | Founded 2017',
  description: 'Datalake is a leading technology consulting group founded in Paris in 2017, specializing in digital transformation and data management solutions. Our tech experts help organizations achieve their ambitions through comprehensive expertise.',
  keywords: 'technology consulting, digital transformation, data management, Paris, 2017, tech experts, digital strategy, data solutions',
  openGraph: {
    title: 'About Datalake - Technology Consulting for Digital Transformation',
    description: 'Founded in Paris in 2017, Datalake is a leading technology consulting group specializing in digital transformation and data management solutions.',
    type: 'website',
    url: 'https://datalake.com/about',
  },
  alternates: {
    canonical: 'https://datalake.com/about',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Datalake",
      "description": "Technology consulting group specializing in digital transformation and data management solutions",
      "foundingDate": "2017",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "addressCountry": "FR"
      },
      "url": "https://datalake.com",
      "sameAs": [
        "https://linkedin.com/company/datalake",
        "https://twitter.com/datalake"
      ]
    })
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 