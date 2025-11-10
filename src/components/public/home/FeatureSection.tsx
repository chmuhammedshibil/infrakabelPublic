import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const FeatureSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          <div 
            className={`w-full lg:w-1/2 transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight uppercase">
              EXPERIENCE THE FUTURE<br />
              WITH OUR ADVANCED<br />
              FIBER OPTIC TECHNOLOGY
            </h2>
            <div className="mt-10">
              <Link to='/'
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-900 text-base font-medium rounded-full text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white transition-all duration-300 group"
              >
                Explore Our Services
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

          <div 
            className={`w-full lg:w-1/2 transition-all duration-1000 ease-out delay-300 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="prose prose-lg text-gray-500">
              <p className="text-lg sm:text-xl leading-relaxed mb-6">
                Fiber optics is more than just a fast internet connection. It's the backbone of modern digital communication, connecting businesses and homes to the world.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed">
                Whether for data-intensive applications, seamless streaming, or reliable cloud services, our custom fiber solutions provide the speed, stability, and security you need to succeed today and in the future.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;