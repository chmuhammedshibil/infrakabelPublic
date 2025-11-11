import React from 'react';
import ProductCard from '../../common/ProductCard';
import p1 from '../../../assets/p1.jpg'
import p2 from '../../../assets/p2.jpg'
import p3 from '../../../assets/p3.jpg'
import p4 from '../../../assets/p4.jpg'
import { Link } from 'react-router-dom';


const productsData = [
  {
    "id": 11,
    "name": "Fiber Optic Attenuator",
    "price": 45.00,
    "image": p1,
    "category": "Components",
    "description": "High-quality single-mode fiber optic cable for long-distance, high-bandwidth applications. Perfect for telecommunications and data center backbones. Low attenuation and minimal dispersion."
  },
  {
    "id": 12,
    "name": "OTDR Launch Cable Box",
    "price": 199.99,
    "image": p2,
    "category": "Tools",
    "description": "High-quality single-mode fiber optic cable for long-distance, high-bandwidth applications. Perfect for telecommunications and data center backbones. Low attenuation and minimal dispersion."
  },
  {
    "id": 13,
    "name": "Multi-mode Fiber Patch Cord",
    "price": 12.50,
    "image": p3,
    "category": "Cables",
    "description": "High-quality single-mode fiber optic cable for long-distance, high-bandwidth applications. Perfect for telecommunications and data center backbones. Low attenuation and minimal dispersion."
  },
  {
    "id": 14,
    "name": "Fiber Optic Cleaning Kit",
    "price": 75.00,
    "image": p4,
    "category": "Tools",
    "description": "High-quality single-mode fiber optic cable for long-distance, high-bandwidth applications. Perfect for telecommunications and data center backbones. Low attenuation and minimal dispersion."
  }
];

const NewProducts: React.FC = () => {
  const displayedProducts = productsData.slice(0, 4);

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">New Products</h2>
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
          <Link to='/' className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            See more
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;