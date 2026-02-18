import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { companyInfo } from '../mock';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    preferredDate: '',
    preferredTime: '',
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
    // Mock submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        address: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Contactează-ne
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suntem aici pentru a răspunde întrebărilor tale și pentru a-ți oferi o ofertă personalizată pentru serviciile de curățenie
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <a
              href={`tel:${companyInfo.phone}`}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-200 border border-gray-100 hover:border-emerald-200 group"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sună-ne</h3>
              <p className="text-emerald-600 font-medium text-lg">{companyInfo.phone}</p>
              <p className="text-sm text-gray-500 mt-2">Luni - Duminică</p>
            </a>

            <a
              href={`mailto:${companyInfo.email}`}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-200 border border-gray-100 hover:border-teal-200 group"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-teal-600 font-medium break-all">{companyInfo.email}</p>
              <p className="text-sm text-gray-500 mt-2">Răspundem în 24h</p>
            </a>

            <a
              href={`https://wa.me/${companyInfo.phone.replace(/\s+/g, '').replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-200 border border-gray-100 hover:border-green-200 group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-green-600 font-medium">Mesaj Direct</p>
              <p className="text-sm text-gray-500 mt-2">Răspuns rapid</p>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Solicită o Ofertă Personalizată
              </h2>
              <p className="text-gray-600 mb-8">
                Completează formularul de mai jos și vei primi o ofertă personalizată în cel mai scurt timp posibil.
              </p>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mesaj Trimis cu Succes!</h3>
                  <p className="text-gray-600">
                    Mulțumim pentru mesaj. Vă vom contacta în cel mai scurt timp posibil pentru a discuta detaliile.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
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
                      <option value="altele">Altele</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Adresa locației
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Str. Exemplu, nr. 10, Târgu Mureș"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Data preferată
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Ora preferată
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      >
                        <option value="">Selectează ora</option>
                        <option value="08:00-10:00">08:00 - 10:00</option>
                        <option value="10:00-12:00">10:00 - 12:00</option>
                        <option value="12:00-14:00">12:00 - 14:00</option>
                        <option value="14:00-16:00">14:00 - 16:00</option>
                        <option value="16:00-18:00">16:00 - 18:00</option>
                        <option value="18:00-20:00">18:00 - 20:00</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj / Detalii suplimentare *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Descrie nevoile tale de curățenie, suprafața, frecvența dorită, etc."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Trimite Solicitarea</span>
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Răspundem în maxim 24 de ore la toate solicitările
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informații de Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Telefon</div>
                      <a href={`tel:${companyInfo.phone}`} className="text-emerald-600 hover:text-emerald-700 font-medium">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Email</div>
                      <a href={`mailto:${companyInfo.email}`} className="text-teal-600 hover:text-teal-700 font-medium break-all">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Locație</div>
                      <p className="text-gray-600">{companyInfo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Program</div>
                      <p className="text-gray-600">{companyInfo.schedule}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Locație</h3>
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl h-80 flex items-center justify-center border border-emerald-200">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium">Târgu Mureș</p>
                    <p className="text-gray-600 text-sm">Județul Mureș</p>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-3">Consultație Gratuită</h4>
                <p className="text-emerald-100 mb-6">
                  Primești o evaluare gratuită și o ofertă personalizată pentru nevoile tale de curățenie
                </p>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-block w-full bg-white text-emerald-600 text-center px-6 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-200 shadow-lg"
                >
                  Sună Acum: {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
