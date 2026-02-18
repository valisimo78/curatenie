import React, { useState, useEffect } from 'react';
import { companyInfo } from '../mock';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Format phone number for WhatsApp (remove spaces and +)
  const whatsappNumber = companyInfo.phone.replace(/\s+/g, '').replace('+', '');
  const whatsappMessage = encodeURIComponent('Bună ziua! Sunt interessat de serviciile dumneavoastră de curățenie.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-[9999] group transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      aria-label="Contactează-ne pe WhatsApp"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Scrie-ne pe WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
      </div>

      {/* Button */}
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
        
        {/* Main button */}
        <div className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110">
          {/* WhatsApp Icon SVG */}
          <svg
            viewBox="0 0 32 32"
            className="w-9 h-9 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.002 3.2c-7.067 0-12.8 5.733-12.8 12.8 0 2.267 0.6 4.4 1.633 6.267l-1.7 6.267 6.533-1.667c1.8 0.933 3.867 1.467 6.067 1.467 7.067 0 12.8-5.733 12.8-12.8s-5.733-12.8-12.8-12.8zM16.002 26.533c-1.933 0-3.8-0.533-5.4-1.467l-0.4-0.2-3.8 1 1.033-3.667-0.267-0.4c-1.067-1.667-1.633-3.6-1.633-5.6 0-5.867 4.8-10.667 10.667-10.667s10.667 4.8 10.667 10.667-4.8 10.667-10.667 10.667zM21.802 18.8c-0.333-0.167-1.933-0.933-2.233-1.067-0.3-0.133-0.533-0.2-0.733 0.2s-0.867 1.067-1.067 1.267c-0.2 0.2-0.4 0.233-0.733 0.067s-1.4-0.533-2.667-1.667c-1-0.867-1.667-1.933-1.867-2.267s-0.033-0.533 0.133-0.7c0.167-0.167 0.333-0.4 0.5-0.6s0.2-0.333 0.333-0.533c0.133-0.2 0.067-0.4-0.033-0.533s-0.733-1.8-1-2.467c-0.267-0.667-0.533-0.567-0.733-0.567s-0.4-0.033-0.6-0.033-0.533 0.067-0.8 0.4-1.067 1.067-1.067 2.6 1.1 3 1.233 3.2c0.133 0.2 2.067 3.2 5.067 4.467 0.7 0.3 1.267 0.5 1.7 0.633 0.7 0.233 1.333 0.2 1.833 0.133 0.567-0.1 1.933-0.767 2.2-1.533s0.267-1.4 0.2-1.533c-0.067-0.133-0.267-0.2-0.6-0.367z"/>
          </svg>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
