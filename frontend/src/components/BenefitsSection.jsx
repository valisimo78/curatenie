import React from 'react';
import { Award, Users, BadgeCheck, Clock, Zap, Sparkles } from 'lucide-react';
import { benefits } from '../mock';

const iconMap = {
  Award,
  Users,
  BadgeCheck,
  Clock,
  Zap,
  Sparkles
};

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-50 text-teal-600 rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold">De Ce Să Ne Alegi</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Avantajele Serviciilor Noastre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alegem să livrăm excelență în fiecare proiect de curățenie
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon];
            const colors = [
              { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-100' },
              { bg: 'bg-teal-50', icon: 'text-teal-600', border: 'border-teal-100' },
              { bg: 'bg-cyan-50', icon: 'text-cyan-600', border: 'border-cyan-100' },
              { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-100' },
              { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-100' },
              { bg: 'bg-teal-50', icon: 'text-teal-600', border: 'border-teal-100' }
            ];
            const color = colors[index % colors.length];

            return (
              <div
                key={index}
                className={`group bg-white border ${color.border} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-16 h-16 ${color.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${color.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Clienți Mulțumiți' },
              { number: '5.0', label: 'Rating Mediu' },
              { number: '23+', label: 'Proiecte Finalizate' },
              { number: '7/7', label: 'Disponibilitate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
