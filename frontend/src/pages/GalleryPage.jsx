import React, { useState } from 'react';
import { Images, X, Download, ZoomIn, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { gallery } from '../mock';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'Curățenie case', 'Birouri', 'Grădină', 'Echipă', 'Curățenie comercială'];
  
  const filteredGallery = gallery.filter(item => {
    const matchesFilter = filter === 'all' || item.category.includes(filter);
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getCategoryCount = (cat) => {
    if (cat === 'all') return gallery.length;
    return gallery.filter(item => item.category.includes(cat)).length;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-600 rounded-full px-4 py-2 mb-4">
              <Images className="w-4 h-4" />
              <span className="text-sm font-semibold">Galerie Foto</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Proiectele Noastre
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Peste {gallery.length} fotografii din lucrările noastre. Vezi rezultatele profesionale pe care le oferim clienților noștri
            </p>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-emerald-600 mb-2">{gallery.length}+</div>
              <div className="text-gray-600 font-medium">Fotografii</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Proiecte Finalizate</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-cyan-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Clienți Mulțumiți</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Caută în galerie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'bg-emerald-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat === 'all' ? 'Toate' : cat}
                <span className="ml-2 text-sm opacity-75">({getCategoryCount(cat)})</span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Se afișează <span className="font-semibold text-emerald-600">{filteredGallery.length}</span> {filteredGallery.length === 1 ? 'fotografie' : 'fotografii'}
            </p>
          </div>

          {/* Gallery Grid */}
          {filteredGallery.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-square bg-gray-100"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="inline-block bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-2">
                        {item.category}
                      </div>
                      <div className="text-white font-semibold text-lg">{item.title}</div>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Images className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Nu au fost găsite imagini pentru această căutare</p>
              <button
                onClick={() => {
                  setFilter('all');
                  setSearchQuery('');
                }}
                className="mt-4 text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                Resetează filtrele
              </button>
            </div>
          )}

          {/* Lightbox Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Download Button */}
              <a
                href={selectedImage.url}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <Download className="w-6 h-6" />
              </a>

              {/* Navigation */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredGallery.findIndex(img => img.id === selectedImage.id);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredGallery.length - 1;
                  setSelectedImage(filteredGallery[prevIndex]);
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredGallery.findIndex(img => img.id === selectedImage.id);
                  const nextIndex = currentIndex < filteredGallery.length - 1 ? currentIndex + 1 : 0;
                  setSelectedImage(filteredGallery[nextIndex]);
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image */}
              <div className="max-w-6xl w-full">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="text-center mt-6">
                  <div className="inline-block bg-emerald-500 text-white text-sm font-medium px-4 py-2 rounded-full mb-2">
                    {selectedImage.category}
                  </div>
                  <div className="text-white text-xl font-semibold">{selectedImage.title}</div>
                  <div className="text-gray-400 text-sm mt-2">
                    {filteredGallery.findIndex(img => img.id === selectedImage.id) + 1} / {filteredGallery.length}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Vrei și tu rezultate de genul acesta?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Contactează-ne astăzi pentru o consultație gratuită și o ofertă personalizată
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Solicită Ofertă
            </a>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-block bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-all duration-200 border-2 border-white/30"
            >
              Sună Acum
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
