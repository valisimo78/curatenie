import React from 'react';
import { Sparkles, Users, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Despre Noi</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experți în Curățenie Profesională
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            General Fresh Cleaning oferă servicii profesionale de curățenie de înaltă calitate pentru locuințe, 
            birouri și spații exterioare în Târgu Mureș și județul Mureș.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1647381518264-97ff1835026f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGNsZWFuaW5nfGVufDB8fHx8MTc3MTQxNzQ0M3ww&ixlib=rb-4.1.0&q=85"
                alt="Curățenie profesională"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg"
                alt="Echipă profesională"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85"
                alt="Birouri curate"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1724556295135-ff92b9aa0a55"
                alt="Grădină îngrijită"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Profesionalism, Seriozitate și Atenție la Detalii
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Cu peste 5 ani de experiență în domeniul curățeniei profesionale, ne-am construit o reputație 
              solidă bazată pe calitatea serviciilor noastre și satisfacția clienților. Ne adresăm atât 
              persoanelor fizice, cât și asociațiilor de proprietari și companiilor.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Echipa noastră este formată din profesioniști calificați, care utilizează echipamente moderne 
              și produse certificate pentru a asigura cele mai bune rezultate. Fiecare proiect este tratat 
              cu aceeași atenție la detalii, indiferent de mărime.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Clienți Mulțumiți</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">5.0</div>
                <div className="text-sm text-gray-600">Rating Mediu</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-cyan-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Ani Experiență</div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
              <h4 className="font-semibold text-gray-900 mb-3">Valorile Noastre</h4>
              <ul className="space-y-2">
                {[
                  'Profesionalism în fiecare detaliu',
                  'Respect față de clienți și proprietatea lor',
                  'Transparență în servicii și prețuri',
                  'Inovație și utilizare tehnologii moderne'
                ].map((value, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
