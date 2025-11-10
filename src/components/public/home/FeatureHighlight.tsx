import React from 'react';
import { Network, Zap, ShieldCheck, Globe } from 'lucide-react';

interface FeatureItemProps {
  icon: React.ElementType; 
  title: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, title }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gray-300 text-gray-800 transition-all duration-300 hover:border-gray-900 hover:text-gray-900 mb-6">
        <Icon size={40} strokeWidth={1} />
      </div>
      <h3 className="text-base font-semibold text-gray-900 uppercase tracking-wide">
        {title}
      </h3>
    </div>
  );
};

const FeatureHighlight: React.FC = () => {
  const features = [
    { icon: Network, title: 'ULTRA-HIGH BANDWIDTH' },
    { icon: Zap, title: 'LIGHTNING-FAST SPEED' },
    { icon: ShieldCheck, title: 'ENHANCED SECURITY' },
    { icon: Globe, title: 'GLOBAL CONNECTIVITY' },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} title={feature.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;