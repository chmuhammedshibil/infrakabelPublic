import React from 'react';
import { ShieldCheck, Leaf, Lightbulb } from 'lucide-react';

const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Reliability',
      color: 'text-blue-500',
      description:
        'We build networks you can trust. From material selection to final testing, every step is geared towards ensuring maximum uptime and consistent performance for our clients.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      color: 'text-green-500',
      description:
        'We are committed to eco-friendly practices. Our fiber solutions differ from traditional copper by consuming less energy and having a smaller environmental footprint over their lifespan.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      color: 'text-yellow-500',
      description:
        'Connectivity is an evolving art. We continuously integrate the latest advancements in fiber optics to craft future-proof networks that inspire growth and transform businesses.',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif font-semibold text-gray-800 tracking-wide uppercase mb-12">
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#f8f8f8] rounded-lg p-10 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className={`mb-6 ${value.color}`}>
                <value.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;