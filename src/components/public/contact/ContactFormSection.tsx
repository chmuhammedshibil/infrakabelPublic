import React, { useState, useEffect, useRef } from 'react';

const ContactFormSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.message) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      alert('Please fill in all required fields');
    }
  };

  const storeDetails = {
    address: [
      "Infrakabel GmbH",
      "Musterstraße 123",
      "12345 Musterstadt, Germany"
    ],
    phone: "+49 123 456 7890",
    email: "info@infrakabel.de",
    hours: {
      weekdays: "Mon - Fri: 8:00am - 6:00pm",
      saturday: "Saturday: 9:00am - 2:00pm",
      sunday: "Sunday: Closed"
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="bg-white py-16 sm:py-24 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div 
            className={`transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
              Drop Us A Line
            </h2>
            <p className="text-gray-500 mb-8">
              Use the form below to get in touch with the sales team
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name *"
                    required
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email *"
                    required
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="sr-only">Your Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone *"
                  required
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Your Message *</label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message *"
                  required
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:ring-1 focus:ring-black transition-colors resize-y"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-900 text-sm font-bold uppercase tracking-widest rounded-md text-gray-900 bg-white hover:bg-gray-900 hover:text-white transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div 
            className={`lg:pl-12 transition-all duration-1000 ease-out delay-300 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            } lg:ml-[250px]`} // <--- UPDATED HERE: lg:ml-[250px] instead of inline style
          >
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
                Our Office
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  {storeDetails.address.map((line, index) => (
                    <React.Fragment key={index}>
                      {line}<br />
                    </React.Fragment>
                  ))}
                </p>
                <p>Phone: {storeDetails.phone}</p>
                <p>Email: {storeDetails.email}</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
                Open Hours
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>{storeDetails.hours.weekdays}</p>
                <p>{storeDetails.hours.saturday}</p>
                <p>{storeDetails.hours.sunday}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;