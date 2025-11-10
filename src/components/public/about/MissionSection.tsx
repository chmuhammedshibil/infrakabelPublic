import React from 'react';
import { Zap } from 'lucide-react'; 

const MissionSection: React.FC = () => {
  return (
    <section className="bg-[#f5f3ef] py-16 sm:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="pr-0 lg:pr-12">
            <h2 className="text-3xl font-serif font-semibold text-gray-800 tracking-wide uppercase">
              Our Mission
            </h2>
            <div className="w-20 h-0.5 bg-yellow-600 my-6"></div>
            <p className="text-base text-gray-600 leading-relaxed">
              Our mission is to build the digital infrastructure of tomorrow. We source the highest-grade fiber optic materials, blending proven engineering with innovation to create networks that evoke reliability, speed, and timeless connectivity.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mt-4">
              Every cable we lay and every connection we make is a testament to our commitment to excellence and our passion for the art of engineering.
            </p>
          </div>

          <div className="w-full">
            <div className="bg-white rounded-xl shadow-lg p-10 text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-[1.02]">
              <div className="text-yellow-600 mb-6">
                <Zap size={44} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                Engineered with Precision
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Each fragrance is meticulously composed by our master perfumers, using
                only the finest ingredients sourced from the most prestigious suppliers
                worldwide.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;