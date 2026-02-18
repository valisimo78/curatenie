import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { companyInfo } from '../mock';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - în frontend only mode
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-semibold">Contact</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hai să Discutăm
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suntem aici pentru a răspunde întrebărilor tale și pentru a-ți oferi o ofertă personalizată
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Informații de Contact
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ne poți contacta telefonic, prin email sau poți completa formularul de contact. 
              Răspundem prompt tuturor solicitărilor.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-start space-x-4 p-6 bg-white hover:bg-emerald-50 rounded-2xl border border-gray-200 hover:border-emerald-200 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Telefon</div>
                  <div className="text-emerald-600 font-medium">{companyInfo.phone}</div>
                  <div className="text-sm text-gray-500 mt-1">Sună acum pentru o ofertă rapidă</div>
                </div>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-start space-x-4 p-6 bg-white hover:bg-teal-50 rounded-2xl border border-gray-200 hover:border-teal-200 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <div className="text-teal-600 font-medium">{companyInfo.email}</div>
                  <div className="text-sm text-gray-500 mt-1">Scrie-ne pentru detalii</div>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Locație</div>
                  <div className="text-gray-600">{companyInfo.location}</div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Program</div>
                  <div className="text-gray-600">{companyInfo.schedule}</div>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-3">Consultație Gratuită</h4>
              <p className="text-emerald-100 mb-6">
                Primește o evaluare gratuită și o ofertă personalizată pentru nevoile tale de curățenie
              </p>
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-block w-full bg-white text-emerald-600 text-center px-6 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-200 shadow-lg"
              >
                Sună Acum: {companyInfo.phone}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Trimite-ne un Mesaj
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Mesaj Trimis!</h4>
                  <p className="text-gray-600">
                    Vă mulțumim pentru mesaj. Vă vom contacta în cel mai scurt timp posibil.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Ion Popescu"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="ion@email.ro"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="+40 7XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Serviciu dorit *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    >
                      <option value="">Selectează un serviciu</option>
                      <option value="case">Curățenie Case și Apartamente</option>
                      <option value="birouri">Curățenie Birouri</option>
                      <option value="scari">Curățenie Scări de Bloc</option>
                      <option value="gradini">Întreținere Grădini</option>
                      <option value="cosit">Cosit Iarbă</option>
                      <option value="gard">Tuns Gard Viu</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Descrie nevoile tale de curățenie..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Trimite Mesajul</span>
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Răspundem în maxim 24 de ore
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
