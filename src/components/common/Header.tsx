import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import logo from '../../assets/logoh.png'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    'Home',
    'About',
    'Service',
    'Contact',
    'Blog',
    'FAQ'
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-transparent font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold tracking-wider text-black flex items-center">
               <div className="h-[10px] w-[180px]  rounded-full flex items-center justify-center mr-2">
                 <img src={logo} alt="" className='text-white' />
               </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 items-center justify-center flex-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveLink(link)}
                className={`relative text-sm uppercase tracking-widest font-medium transition-colors duration-300 py-2
                  ${activeLink === link ? 'text-white/70' : 'text-white hover:text-black'}
                  group`
                }
              >
                {link}
                <span className={`absolute bottom-0 left-1/2 h-[2px] bg-black transition-all duration-300 ease-out -translate-x-1/2
                  ${activeLink === link ? 'w-full' : 'w-0 group-hover:w-1/2'}`}
                />
              </button>
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

            <div className="flex items-center space-x-4 text-white">
              <button className="hover:scale-110 transition-transform"><User size={20} /></button>
              <button className="hover:scale-110 transition-transform"><Heart size={20} /></button>
              <button className="relative hover:scale-110 transition-transform">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
             <button className="text-white"><ShoppingBag size={20} /></button>
             <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
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
            <button
              key={link}
              onClick={() => {
                setActiveLink(link);
                setIsMobileMenuOpen(false);
              }}
              className={`text-lg uppercase tracking-widest font-medium py-2 relative w-fit
                 ${activeLink === link ? 'text-black' : 'text-gray-600'}`
              }
            >
              {link}
               <span className={`absolute bottom-0 left-1/2 h-[2px] bg-black transition-all duration-300 ease-out -translate-x-1/2
                  ${activeLink === link ? 'w-full' : 'w-0'}`}
                />
            </button>
          ))}
          <div className="flex space-x-8 pt-4 mt-4 border-t border-gray-200 w-full justify-center">
             <button className="flex flex-col items-center text-gray-700"><User size={24} /><span className="text-xs mt-1">Account</span></button>
             <button className="flex flex-col items-center text-gray-700"><Heart size={24} /><span className="text-xs mt-1">Wishlist</span></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;