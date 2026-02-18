import React from 'react';
import { Phone, Star, CheckCircle2, Sparkles } from 'lucide-react';
import { companyInfo } from '../mock';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1761689502577-0013be84f1bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMHNlcnZpY2VzfGVufDB8fHx8MTc3MTQxNzQ0MHww&ixlib=rb-4.1.0&q=85"
          alt="Professional Cleaning Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-teal-900/90 to-cyan-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">{companyInfo.rating} din 5 • {companyInfo.reviewCount} Recenzii</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Curățenie Profesională în
              <span className="block text-emerald-300">Târgu Mureș</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Servicii complete de curățenie pentru locuințe, birouri și spații verzi. 
              Echipă profesionistă, produse certificate, rezultate garantate.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                'Personal calificat și verificat',
                'Produse profesionale eco',
                'Program flexibil 7/7',
                'Satisfacție garantată'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Sună Acum</span>
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200"
              >
                <Sparkles className="w-5 h-5" />
                <span>Solicită Ofertă</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 mt-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-emerald-300">{companyInfo.experience}</div>
                <div className="text-sm text-gray-300">Experiență</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">{companyInfo.photoCount}+</div>
                <div className="text-sm text-gray-300">Proiecte</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">100%</div>
                <div className="text-sm text-gray-300">Satisfacție</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features Cards */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🏠', title: 'Curățenie Case', desc: 'Locuințe impecabile' },
                { icon: '🏢', title: 'Curățenie Birouri', desc: 'Spații profesionale' },
                { icon: '🌿', title: 'Întreținere Grădini', desc: 'Spații verzi îngrijite' },
                { icon: '✨', title: 'Servicii Complete', desc: 'Tot ce ai nevoie' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-200"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
