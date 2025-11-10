import React from 'react'; 
import { ChevronRight } from 'lucide-react';

const filterLinks = [
  "ALL",
  "CABLES",
  "CONNECTORS",
  "TOOLS",
  "NETWORKING",
  "ENCLOSURES"
];

interface ShopHeroProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ShopHero: React.FC<ShopHeroProps> = ({ activeFilter, onFilterChange }) => {

  return (
    <section className="relative h-[60vh] min-h-[450px] flex flex-col justify-center text-white bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">
      
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center pt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Shop
        </h1>
        <nav className="flex items-center space-x-2 text-sm sm:text-base text-gray-300">
          <a 
            href="/" 
            className="hover:text-white transition-colors duration-200"
          >
            Homepage
          </a>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-white font-medium">
            Shop
          </span>
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-6 sm:space-x-10 py-6 overflow-x-auto whitespace-nowrap">
            {filterLinks.map((link) => (
              <button
                key={link}
                onClick={() => onFilterChange(link)}
                className={`relative text-sm uppercase tracking-widest font-medium transition-colors duration-300 pb-2
                  {/* 6. Use the activeFilter prop for styling */}
                  ${activeFilter === link ? 'text-white' : 'text-gray-300 hover:text-white'}
                `}
              >
                {link}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-transform duration-300 ease-out
                    ${activeFilter === link ? 'scale-x-100' : 'scale-x-0'}`}
                />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;