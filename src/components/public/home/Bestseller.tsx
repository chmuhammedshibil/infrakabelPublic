import React from 'react';
import ProductCard from '../../common/ProductCard';
import { Link } from 'react-router-dom';
import p1 from '../../../assets/p1.jpg'
import p2 from '../../../assets/p2.jpg'
import p3 from '../../../assets/p3.jpg'
import p4 from '../../../assets/p4.jpg'


const productsData = [
  {
    "id": 1,
    "name": "Fiber Optic Cable - Single Mode",
    "price": 120.00,
    "image": p1,
    "category": "Cables",
    "description": "High-quality single-mode fiber optic cable for long-distance, high-bandwidth applications. Perfect for telecommunications and data center backbones. Low attenuation and minimal dispersion."
  },
  {
    "id": 2,
    "name": "Industrial Network Switch",
    "price": 450.50,
    "image": p2,
    "category": "Networking",
    "description": "High-quality single-mode fiber optic cable for long-distance, high-bandwidth applications. Perfect for telecommunications and data center backbones. Low attenuation and minimal dispersion."
  },
  {
    "id": 3,
    "name": "Fusion Splicer Kit Pro",
    "price": 2500.00,
    "image": p3,
    "category": "Tools",
    "description": "High-quality single-mode fiber optic cable for long-distance, high-bandwidth applications. Perfect for telecommunications and data center backbones. Low attenuation and minimal dispersion."
  },
  {
    "id": 4,
    "name": "Rack Mount Enclosure 1U",
    "price": 85.00,
    "image": p4,
    "category": "Hardware",
    "description": "High-quality single-mode fiber optic cable for long-distance, high-bandwidth applications. Perfect for telecommunications and data center backbones. Low attenuation and minimal dispersion."
  }
];


const Bestseller: React.FC = () => {
  const displayedProducts = productsData.slice(0, 4);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Bestsellers</h2>
          <Link to='/' className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            See more
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bestseller;