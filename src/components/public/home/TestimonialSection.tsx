import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonialData = [
  {
    id: 1,
    quote: "The fiber optic installation for our office building was flawless. Internet speeds have increased tenfold, and our team couldn't be happier with the stability.",
    author: "MICHAEL S.",
    role: "IT Director, TechCorp"
  },
  {
    id: 2,
    quote: "Outstanding service from start to finish. The team was professional, knowledgeable, and completed the project ahead of schedule. Highly recommended!",
    author: "SARAH L.",
    role: "Operations Manager"
  },
  {
    id: 3,
    quote: "Switching to your fiber network was the best decision we made this year. Our cloud applications run seamlessly now, boosting our overall productivity.",
    author: "DAVID B.",
    role: "Small Business Owner"
  },
  {
    id: 4,
    quote: "We needed a custom fiber solution for our remote facility, and they delivered exactly what we needed. Reliable connectivity in a challenging location.",
    author: "EMILY R.",
    role: "Facility Manager"
  },
  {
    id: 5,
    quote: "Their customer support is as impressive as their technology. Any questions we had were answered immediately by knowledgeable experts.",
    author: "JAMES K.",
    role: "Network Administrator"
  },
  {
    id: 6,
    quote: "A true partner in our digital transformation. The high-speed infrastructure they built is the foundation of our new smart factory initiatives.",
    author: "ANNA M.",
    role: "CTO, Future MFG"
  }
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-900 to-blue-900 py-20 sm:py-32 text-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="mb-8 flex justify-center opacity-50">
          <Quote size={48} fill="currentColor" />
        </div>

        <div className="relative h-64 sm:h-48">
          {testimonialData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out transform ${
                index === currentIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 pointer-events-none'
              }`}
            >
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div className="font-bold tracking-wider text-sm sm:text-base">
                {testimonial.author}
              </div>
              <div className="text-blue-200 text-xs sm:text-sm mt-1">
                {testimonial.role}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-3 mt-12">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
      
      
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default TestimonialSection;