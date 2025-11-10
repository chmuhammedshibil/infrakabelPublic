import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: 'What is fiber optic internet?',
    answer:
      'Fiber optic internet is a high-speed broadband connection that uses fiber-optic cables to send data. These cables are made of thin strands of glass and transmit data as pulses of light, resulting in much faster and more reliable speeds than traditional copper (DSL) or coaxial (cable) internet.',
  },
  {
    id: 2,
    question: 'How is fiber optic different from regular cable internet?',
    answer:
      'The main difference is the material and method of data transfer. Cable internet uses copper coaxial cables, which transmit data via electricity. Fiber optics use glass strands and transmit data via light, which is significantly faster, more stable, and less prone to interference or slowdowns during peak usage times.',
  },
  {
    id: 3,
    question: 'What does "symmetrical speed" mean?',
    answer:
      'Symmetrical speed means your upload speed is the same as your download speed. This is a common feature of fiber optic internet. Traditional cable or DSL often has very fast download speeds but much slower upload speeds, which can be a bottleneck for video calls, large file uploads, and online gaming.',
  },
  {
    id: 4,
    question: 'Is fiber optic cable installation difficult?',
    answer:
      'Installation is typically handled by our professional technicians. It involves running a fiber optic line from the nearest network point to your home or business. While it can be more involved than a simple cable setup, our team ensures a clean and efficient installation with minimal disruption.',
  },
  {
    id: 5,
    question: 'How durable are fiber optic cables?',
    answer:
      'Fiber optic cables are surprisingly durable. They are not susceptible to electromagnetic interference, are resistant to fire, and are not affected by water or most weather conditions in the same way copper cables are. This makes them extremely reliable for long-term connectivity.',
  },
];

const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqData.map((faq) => (
            <div key={faq.id}>
              <button
                onClick={() => toggleFaq(faq.id)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <span className="ml-6 flex h-7 items-center">
                  {openId === faq.id ? (
                    <Minus className="h-6 w-6 text-indigo-600" />
                  ) : (
                    <Plus className="h-6 w-6 text-gray-400" />
                  )}
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out
                  ${openId === faq.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="pb-6 pr-12">
                  <p className="text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;