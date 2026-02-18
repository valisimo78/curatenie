import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { companyInfo } from '../mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path, sectionId = null) => {
    setIsMobileMenuOpen(false);
    
    if (path) {
      navigate(path);
    } else if (sectionId) {
      if (isHomePage) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const navItems = [
    { id: 'home', label: 'Acasă', path: '/' },
    { id: 'services', label: 'Servicii', sectionId: 'services' },
    { id: 'about', label: 'Despre Noi', sectionId: 'about' },
    { id: 'gallery', label: 'Galerie', path: '/galerie' },
    { id: 'reviews', label: 'Recenzii', sectionId: 'reviews' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavigation('/')}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">GF</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">General Fresh</h1>
                <p className="text-xs text-emerald-600">Servicii de Curățenie</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path, item.sectionId)}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call Button */}
          <a
            href={`tel:${companyInfo.phone}`}
            className="hidden md:flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>{companyInfo.phone}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path, item.sectionId)}
                  className="text-left text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 mt-2"
              >
                <Phone className="w-5 h-5" />
                <span>{companyInfo.phone}</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">GF</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">General Fresh</h1>
                <p className="text-xs text-emerald-600">Servicii de Curățenie</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path, item.sectionId)}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call Button */}
          <a
            href={`tel:${companyInfo.phone}`}
            className="hidden md:flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>{companyInfo.phone}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path, item.sectionId)}
                  className="text-left text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 mt-2"
              >
                <Phone className="w-5 h-5" />
                <span>{companyInfo.phone}</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
