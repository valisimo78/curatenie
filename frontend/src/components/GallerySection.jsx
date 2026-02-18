import React, { useState } from 'react';
import { Images, X } from 'lucide-react';
import { gallery } from '../mock';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Curățenie case', 'Birouri', 'Grădină', 'Echipă'];
  
  const filteredGallery = filter === 'all' 
    ? gallery 
    : gallery.filter(item => item.category.includes(filter));

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-600 rounded-full px-4 py-2 mb-4">
            <Images className="w-4 h-4" />
            <span className="text-sm font-semibold">Galerie Foto</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proiectele Noastre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Peste 23 de proiecte finalizate cu succes. Vezi rezultatele muncii noastre
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat === 'all' ? 'Toate' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-sm text-emerald-300 font-medium mb-1">{item.category}</div>
                  <div className="text-white font-semibold text-lg">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-5xl w-full">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="text-center mt-6">
                <div className="text-emerald-400 font-medium mb-2">{selectedImage.category}</div>
                <div className="text-white text-xl font-semibold">{selectedImage.title}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
