import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoh.png';
import ukFlag from '../../assets/english.png';
import deFlag from '../../assets/germen flag.webp';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'shop', path: '/shop' },
  { name: 'About', path: '/about' },
  // { name: 'Service', path: '/service' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' }
];

const languages = [
  { code: 'en', name: 'English', flag: ukFlag }, 
  { code: 'de', name: 'Deutsch', flag: deFlag }  
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  return (
    <header className="fixed w-full top-0 z-50 bg-transparent font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              onClick={() => setActiveLink('Home')}
              className="text-2xl font-bold tracking-wider text-black flex items-center"
            >
              <div className="h-[100px] w-[150px] flex items-center justify-center mr-2">
                <img src={logo} alt="Logo" />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center justify-center flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setActiveLink(link.name)}
                className={`relative text-sm uppercase tracking-widest font-medium transition-colors duration-300 py-2
                  ${activeLink === link.name ? 'text-white' : 'text-gray-300 hover:text-white'}
                  group`
                }
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 h-[2px] bg-white transition-all duration-300 ease-out -translate-x-1/2
                  ${activeLink === link.name ? 'w-full' : 'w-0 group-hover:w-1/2'}`}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6 justify-end">
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="pl-4 pr-10 py-2 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm focus:outline-none focus:border-black text-sm w-64 transition-all"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
            </div>

            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors focus:outline-none"
              >
                <img src={currentLang.flag} alt={currentLang.name} className="h-4 w-6 object-cover rounded-sm" />
                <span className="text-sm font-medium uppercase">{currentLang.code}</span>
                <ChevronDown size={14} />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang);
                        setIsLangMenuOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <img src={lang.flag} alt={lang.name} className="h-4 w-6 object-cover rounded-sm mr-3" />
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4 text-white">
              <Link to='/auth' className="hover:scale-110 transition-transform"><User size={20} /></Link>
              <button className="hover:scale-110 transition-transform"><Heart size={20} /></button>
              <button className="relative hover:scale-110 transition-transform">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button className="text-gray-500"><ShoppingBag size={20} /></button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100 border-b border-gray-200' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
          <div className="relative w-full mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-4 pr-10 py-3 rounded-full border border-gray-300 bg-gray-50 focus:outline-none"
            />
            <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-500" />
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => {
                setActiveLink(link.name);
                setIsMobileMenuOpen(false);
              }}
              className={`text-lg uppercase tracking-widest font-medium py-2 relative w-fit
                 ${activeLink === link.name ? 'text-black' : 'text-gray-600'}`
              }
            >
              {link.name}
              <span className={`absolute bottom-0 left-1/2 h-[2px] bg-black transition-all duration-300 ease-out -translate-x-1/2
                  ${activeLink === link.name ? 'w-full' : 'w-0'}`}
              />
            </Link>
          ))}

          <div className="flex items-center space-x-4 py-4 border-t border-b border-gray-200 w-full justify-center">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setCurrentLang(lang)}
                className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${currentLang.code === lang.code ? 'border-black bg-gray-100' : 'border-transparent'}`}
              >
                <img src={lang.flag} alt={lang.name} className="h-5 w-7 object-cover rounded-sm" />
                <span className={`text-sm font-medium ${currentLang.code === lang.code ? 'text-black' : 'text-gray-500'}`}>{lang.code.toUpperCase()}</span>
              </button>
            ))}
          </div>

          <div className="flex space-x-8 pt-4 mt-4 w-full justify-center">
            <button className="flex flex-col items-center text-gray-700"><User size={24} /><span className="text-xs mt-1">Account</span></button>
            <button className="flex flex-col items-center text-gray-700"><Heart size={24} /><span className="text-xs mt-1">Wishlist</span></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;