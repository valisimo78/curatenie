import React from 'react';
import { Phone, Mail, MapPin, Clock, Star, Facebook, Instagram } from 'lucide-react';
import { companyInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">GF</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">General Fresh</h3>
                <p className="text-sm text-emerald-400">Servicii de Curățenie</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Servicii profesionale de curățenie pentru locuințe, birouri și spații verzi în Târgu Mureș și județul Mureș.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold">{companyInfo.rating}</span>
              <span className="text-gray-400 text-sm">({companyInfo.reviewCount} recenzii)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Servicii
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Despre Noi
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Galerie
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Recenzii
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`tel:${companyInfo.phone}`} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    {companyInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`mailto:${companyInfo.email}`} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    {companyInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">{companyInfo.location}</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">{companyInfo.schedule}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Urmărește-ne</h3>
            <div className="flex space-x-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Solicită Ofertă
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {companyInfo.name}. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
