export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://curatenie.vali-handyman.com/#organization",
  "name": "General Fresh Cleaning",
  "legalName": "General Fresh Cleaning Servicii Profesionale de Curățenie",
  "url": "https://curatenie.vali-handyman.com",
  "logo": "https://curatenie.vali-handyman.com/logo.png",
  "image": "https://curatenie.vali-handyman.com/og-image.jpg",
  "description": "Servicii profesionale de curățenie pentru locuințe, birouri și spații verzi în Târgu Mureș și județul Mureș. Peste 5 ani experiență, rating 5.0/5.",
  "telephone": "+40745525426",
  "email": "contact@generalfreshcleaning.ro",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Târgu Mureș",
    "addressRegion": "Mureș",
    "addressCountry": "RO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "46.5427",
    "longitude": "24.5574"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "08:00",
    "closes": "20:00"
  },
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "4",
    "bestRating": "5",
    "worstRating": "1"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Târgu Mureș"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Județul Mureș"
    }
  ],
  "serviceType": [
    "Curățenie Case și Apartamente",
    "Curățenie Birouri",
    "Curățenie Scări de Bloc",
    "Întreținere Grădini",
    "Cosit Iarbă",
    "Tuns Gard Viu"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicii de Curățenie",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Curățenie Case și Apartamente",
          "description": "Servicii complete de curățenie pentru locuințe"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Curățenie Birouri",
          "description": "Servicii profesionale de curățenie pentru spații comerciale"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Întreținere Grădini",
          "description": "Servicii complete de întreținere și îngrijire grădini"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/generalfreshcleaning",
    "https://www.instagram.com/generalfreshcleaning"
  ]
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const serviceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.name,
  "provider": {
    "@type": "LocalBusiness",
    "name": "General Fresh Cleaning",
    "url": "https://curatenie.vali-handyman.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Târgu Mureș"
  },
  "description": service.description,
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "RON"
    }
  }
});

export const reviewSchema = (reviews) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "General Fresh Cleaning",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": reviews.length.toString(),
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.name
    },
    "datePublished": review.date,
    "reviewBody": review.text,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  }))
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
