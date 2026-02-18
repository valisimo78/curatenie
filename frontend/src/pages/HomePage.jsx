import React from 'react';
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

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
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
    </div>
  );
};

export default HomePage;
