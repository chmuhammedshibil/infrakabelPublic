import React, { useEffect, useRef, useState } from 'react';

const TeamSection: React.FC = () => {
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
    <section 
      ref={sectionRef} 
      className="bg-gray-50 py-16 sm:py-24 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          <div 
            className={`w-full lg:w-1/2 transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight uppercase">
              MEET THE EXPERTS AT<br />
              INFRAKABEL GMBH
            </h2>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-900 text-base font-medium rounded-full text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white transition-all duration-300 group"
              >
                Get In Touch
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

          <div 
            className={`w-full lg:w-1/2 transition-all duration-1000 ease-out delay-300 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="prose prose-lg text-gray-500">
              <p className="text-lg sm:text-xl leading-relaxed mb-6">
                Our team at Infrakabel GmbH is our greatest asset. We are a dedicated group of engineers, technicians, and project managers passionate about building the future of connectivity.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed">
                With decades of combined experience in the fiber optic industry, we bring unparalleled expertise, precision, and a commitment to quality to every project, from large-scale municipal networks to private enterprise solutions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;