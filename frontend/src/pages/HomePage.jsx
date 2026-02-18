import React from 'react';
import SEOHead from '../components/SEOHead';
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '../utils/seoSchemas';
import { faqs } from '../mock';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BenefitsSection from '../components/BenefitsSection';
import ReviewsSection from '../components/ReviewsSection';
import GallerySection from '../components/GallerySection';
import CoverageSection from '../components/CoverageSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const HomePage = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Acasă', url: 'https://curatenie.vali-handyman.com/' }
  ]);

  const faqStructuredData = faqSchema(faqs);

  // Combine schemas
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema,
      breadcrumbs,
      faqStructuredData
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Servicii Profesionale de Curățenie"
        description="Servicii profesionale de curățenie pentru locuințe, birouri și spații verzi în Târgu Mureș și județul Mureș. Rating 5.0/5, peste 500 clienți mulțumiți, echipă expertă cu 5+ ani experiență. Curățenie case, birouri, scări bloc, întreținere grădini, cosit iarbă. Sună acum: +40 745 525 426"
        keywords="firma curatenie targu mures, servicii curatenie mures, curatenie birouri targu mures, curatenie profesionala, curatenie case apartamente, curatenie scari bloc, intretinere gradini, cosit iarba, tuns gard viu, General Fresh Cleaning, curatenie Mures"
        canonicalUrl="https://curatenie.vali-handyman.com/"
        schema={combinedSchema}
      />
      
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <BenefitsSection />
        <GallerySection />
        <ReviewsSection />
        <CoverageSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
