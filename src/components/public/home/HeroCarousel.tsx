import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '../../../assets/hero1.jpg'
import hero2 from '../../../assets/hero2.jpg'

const SLIDE_DATA = [
  {
    id: 1,
    image: hero1,
    title: 'G&K Fiber Optic Technology',
    subtitle: 'Fast. Precise. Adapted to your wishes.',
    ctaPrimary: 'CONTACT US',
    ctaSecondary: 'SERVICES',
  },
  {
    id: 2,
    image: hero2,
    title: 'Connecting the Future',
    subtitle: 'Reliable high-speed internet solutions for everyone.',
    ctaPrimary: 'LEARN MORE',
    ctaSecondary: 'OUR PROJECTS',
  },
    
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === SLIDE_DATA.length - 1 ? 0 : prev + 1));
    }, 6000); 
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDE_DATA.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDE_DATA.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {SLIDE_DATA.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-105 animate-slow-zoom" 
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-12">
            <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-5xl transition-all duration-700 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {slide.title}
            </h1>
            <p className={`text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl text-gray-200 transition-all delay-200 duration-700 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {slide.subtitle}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 transition-all delay-300 duration-700 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button className="bg-[#0066CC] hover:bg-[#0052a3] text-white font-semibold py-3.5 px-10 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm">
                {slide.ctaPrimary}
              </button>
              <button className="bg-transparent hover:bg-white hover:text-black text-white font-semibold py-3.5 px-10 border-2 border-white rounded-sm transition-all duration-300 uppercase tracking-wider text-sm">
                {slide.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all hidden sm:block"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all hidden sm:block"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {SLIDE_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-0.5 transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-white' : 'w-4 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;