import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import { coverageAreas } from '../mock';

const CoverageSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-semibold">Zone Deservite</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unde Activăm
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferim servicii de curățenie profesională în Târgu Mureș și în toate localitățile din județul Mureș
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-24 h-24 text-emerald-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Târgu Mureș</h3>
                <p className="text-gray-600 mb-6">și județul Mureș</p>
                <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-gray-900">Disponibil Acum</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Areas List */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Localități Deservite
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Activăm în Târgu Mureș și în toate localitățile din județul Mureș, precum și în zonele apropiate. 
              Echipa noastră se deplasează rapid pentru a vă oferi servicii de curățenie profesională oriunde 
              aveți nevoie.
            </p>

            {/* Areas Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {coverageAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-gray-50 hover:bg-emerald-50 p-4 rounded-xl transition-colors duration-200 border border-gray-100"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
              <p className="text-gray-700 mb-4">
                <strong>Nu vezi localitatea ta pe listă?</strong> Contactează-ne! 
                Ne deplasăm și în zonele învecinate pentru proiecte mai mari.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
              >
                Verifică Disponibilitatea
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
