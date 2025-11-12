import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoh.png';
import ukFlag from '../../assets/english.png';
import deFlag from '../../assets/germen flag.webp';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
];

const languages = [
  { code: 'en', name: 'English', flag: ukFlag },
  { code: 'de', name: 'Deutsch', flag: deFlag },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 🧠 Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setIsScrolled(currentScroll > 50);

      if (currentScroll > lastScrollY && currentScroll > 200) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`
        fixed w-full top-0 z-50 transition-all duration-500 ease-in-out
        ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}
      `}
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center ${isScrolled ? 'py-3' : 'py-5'
              } transition-all duration-300`}
          >
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/"
                onClick={() => setActiveLink('Home')}
                className={`text-2xl font-bold tracking-wider flex items-center ${isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
              >
                <div
                  className={`flex items-center justify-center mr-2 transition-all duration-300 ${isScrolled ? 'h-[60px] w-[110px]' : 'h-[80px] w-[130px]'
                    }`}
                >
                  <img src={logo} alt="Logo" className="object-contain" />
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8 items-center justify-center flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setActiveLink(link.name)}
                  className={`relative text-sm uppercase tracking-widest font-medium transition-colors duration-300 py-2
                  ${activeLink === link.name
                      ? isScrolled
                        ? 'text-black'
                        : 'text-white'
                      : isScrolled
                        ? 'text-gray-700 hover:text-black'
                        : 'text-gray-300 hover:text-white'
                    }
                  group`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-1/2 h-[2px] transition-all duration-300 ease-out -translate-x-1/2
                  ${activeLink === link.name
                        ? isScrolled
                          ? 'bg-black w-full'
                          : 'bg-white w-full'
                        : 'w-0 group-hover:w-1/2 ' +
                        (isScrolled ? 'bg-black' : 'bg-white')
                      }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="hidden md:flex items-center space-x-5 justify-end">
              {/* Search */}
              <div className="relative hidden lg:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`pl-4 pr-10 py-1.5 rounded-full border text-sm w-56 transition-all
                  ${isScrolled
                      ? 'border-gray-300 bg-white text-gray-800 focus:border-black'
                      : 'border-white/50 bg-white/20 text-white placeholder-gray-200'
                    }`}
                />
                <Search
                  className={`absolute right-3 top-2 h-4 w-4 ${isScrolled ? 'text-gray-600' : 'text-white'
                    }`}
                />
              </div>

              {/* Language Switcher (Desktop simplified) */}
              <div className="flex items-center">
                <button
                  onClick={() =>
                    setCurrentLang(
                      currentLang.code === 'en' ? languages[1] : languages[0]
                    )
                  }
                  className={`flex items-center space-x-2 focus:outline-none transition-all border border-transparent hover:border-gray-300 rounded-full px-2 py-1 ${isScrolled ? 'text-gray-800' : 'text-white'
                    }`}
                >
                  <img
                    src={currentLang.code === 'en' ? deFlag : ukFlag}
                    alt={currentLang.code === 'en' ? 'Deutsch' : 'English'}
                    className="h-5 w-7 object-cover rounded-sm"
                  />
                  <span className="text-sm font-medium uppercase">
                    {currentLang.code === 'en' ? 'DE' : 'EN'}
                  </span>
                </button>
              </div>


              {/* User / Wishlist / Cart */}
              <div
                className={`flex items-center space-x-4 ${isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
              >
                <Link to="/auth" className="hover:scale-110 transition-transform">
                  <User size={18} />
                </Link>
                <button className="hover:scale-110 transition-transform">
                  <Heart size={18} />
                </button>
                <button className="relative hover:scale-110 transition-transform">
                  <ShoppingBag size={18} />
                  <span className="absolute -top-1 -right-1 bg-black text-white text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full">
                    0
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <button className={isScrolled ? 'text-gray-700' : 'text-white'}>
                <ShoppingBag size={20} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`focus:outline-none ${isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Full-Screen Mobile Sidebar */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* White background overlay */}
          <div className="absolute inset-0 bg-white h-screen w-screen flex flex-col p-6 overflow-y-auto">

            {/* Header Row inside the mobile sidebar */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-[60px] w-auto" />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-black transition-colors"
              >
                <X size={30} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-4 pr-10 py-3 rounded-full border border-gray-300 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-600" />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-6 mb-10 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-lg uppercase tracking-widest font-semibold transition-all duration-200 ${activeLink === link.name
                    ? 'text-black border-b-2 border-black pb-1'
                    : 'text-gray-700 hover:text-black'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Language Selector */}
            <div className="flex justify-center items-center gap-5 mb-10">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang)}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border transition ${currentLang.code === lang.code
                    ? 'border-black bg-gray-100 text-black'
                    : 'border-transparent text-gray-600 hover:text-black'
                    }`}
                >
                  <img
                    src={lang.flag}
                    alt={lang.name}
                    className="h-5 w-7 object-cover rounded-sm"
                  />
                  <span className="text-sm font-medium uppercase">{lang.code}</span>
                </button>
              ))}
            </div>


          </div>
        </div>



      </header>

      {/* ✅ Mobile Bottom Navigation (MUST be outside header but inside return) */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-t z-50 md:hidden">
        <div className="flex justify-around items-center py-2 border-t border-gray-200">
          {/* Home */}
          <Link
            to="/"
            className="flex flex-col items-center text-gray-700 hover:text-black transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125a.375.375 0 00.375.375h4.125a.375.375 0 00.375-.375V15a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.875a.375.375 0 00.375.375h4.125a.375.375 0 00.375-.375V9.75"
              />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="flex flex-col items-center text-gray-700 hover:text-black transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.878 0-3.5 1.002-4.5 2.5C10.5 4.752 8.878 3.75 7 3.75c-2.761 0-5 2.015-5 4.5 0 4.28 9 10.5 9 10.5s9-6.22 9-10.5z"
              />
            </svg>
            <span className="text-xs mt-1">Wishlist</span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="flex flex-col items-center text-gray-700 hover:text-black transition-colors relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 2.25h1.386c.51 0 .955.343 1.08.835L5.88 8.25m0 0h12.72l1.11-4.5H6.99M5.88 8.25L4.5 14.25m0 0a2.25 2.25 0 104.5 0m-4.5 0h4.5m10.5 0a2.25 2.25 0 104.5 0m-4.5 0h4.5M10.125 20.625a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z"
              />
            </svg>
            <span className="text-xs mt-1">Cart</span>
            <span className="absolute top-0 right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>

          {/* Profile */}
          <Link
            to="/auth"
            className="flex flex-col items-center text-gray-700 hover:text-black transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a9 9 0 1115 0v.75H4.5v-.75z"
              />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

