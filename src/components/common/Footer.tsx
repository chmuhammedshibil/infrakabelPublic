import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import logo from '../../assets/logoh.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f8f8] pt-16 pb-8 text-gray-700 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          
          <div className="flex flex-col items-start">
            <div className="mb-6">
               <div className="text-3xl font-bold flex items-center">
                <div className="  flex items-center justify-center mr-2">
                  <img src={logo} alt="" />
                </div>
               </div>
            </div>
          </div>

          <div>
            <h3 className="text-black font-bold uppercase tracking-wider mb-6 text-sm">Information</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-black transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Profile</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Order & Returns</a></li>
              <li><a href="#" className="hover:text-black transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold uppercase tracking-wider mb-6 text-sm">Customer Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-black transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Return & Refund Policy</a></li>
            </ul>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-start">
              <span className="font-bold text-black min-w-[80px]">Mail:</span>
              <a href="mailto:info@example.com" className="hover:text-black transition-colors">info@example.com</a>
            </div>
            <div className="flex items-start">
              <span className="font-bold text-black min-w-[80px]">Phone:</span>
              <a href="tel:+1234567890" className="hover:text-black transition-colors">8714149977</a>
            </div>
            <div className="flex items-start">
              <span className="font-bold text-black min-w-[80px]">Address:</span>
              <p className="leading-relaxed">
                Your Company Name, Door No: 1234, <br />
                Business Park, Tower 2, <br />
                Second floor, City Name, <br />
                Zip Code
              </p>
            </div>
            
            <div className="flex space-x-6 pt-6">
              <a href="#" className="text-black hover:text-gray-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-black hover:text-gray-500 transition-colors">
                <Instagram size={20} />
              </a>
               <a href="#" className="text-black hover:text-gray-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>      
        <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-100">
          <p>© 2025 Your Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;