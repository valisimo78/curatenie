import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title, 
  description, 
  keywords,
  ogImage,
  ogType = 'website',
  canonicalUrl,
  schema
}) => {
  const siteName = 'General Fresh Cleaning';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Servicii Profesionale de Curățenie Târgu Mureș`;
  const baseUrl = 'https://curatenie.vali-handyman.com';
  const defaultImage = `${baseUrl}/og-image.jpg`;
  const canonical = canonicalUrl || baseUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Servicii profesionale de curățenie în Târgu Mureș'} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'Servicii profesionale de curățenie în Târgu Mureș'} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ro_RO" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || 'Servicii profesionale de curățenie în Târgu Mureș'} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Romanian" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="General Fresh Cleaning" />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
