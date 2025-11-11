import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, CheckCircle, ShoppingCart } from 'lucide-react';
import type { Product } from '../../components/common/ProductCard';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jpg';
import p5 from '../../assets/p5.jpg';
import p6 from '../../assets/p6.jpg';
import p7 from '../../assets/p7.jpg';




const products: Product[] = [
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
    "description": "Robust 8-port industrial Ethernet switch designed for harsh environments. Features a ruggedized enclosure, wide operating temperature range, and redundant power inputs for maximum reliability."
  },
  {
    "id": 3,
    "name": "SC/APC Fiber Connector",
    "price": 5.99,
    "image": p3,
    "category": "Connectors",
    "description": "Precision SC/APC connector for low-loss, high-performance connections. Ideal for FTTX, CATV, and telecommunication networks. Easy to terminate and durable."
  },
  {
    "id": 4,
    "name": "Fiber Optic Splicer",
    "price": 1999.00,
    "image": p4,
    "category": "Tools",
    "description": "Core-alignment fusion splicer for precise and efficient fiber splicing. Features a fast-splicing time, high-resolution LCD, and long-life battery for field use."
  },
  {
    "id": 5,
    "name": "Rack Mount Enclosure",
    "price": 89.00,
    "image": p5,
    "category": "Enclosures",
    "description": "High-quality single-mode fiber optic cable for long-distance, high-bandwidth applications. Perfect for telecommunications and data center backbones. Low attenuation and minimal dispersion."
  },
  {
    "id": 6,
    "name": "Fiber Optic Cable - Multi-Mode",
    "price": 95.00,
    "image": p6,
    "category": "Cables",
    "description": "High-quality single-mode fiber optic cable for long-distance, high-bandwidth applications. Perfect for telecommunications and data center backbones. Low attenuation and minimal dispersion."
  },
  {
    "id": 7,
    "name": "Fiber Optic Power Meter",
    "price": 150.00,
    "image": p7,
    "category": "Tools",
    "description": "High-quality single-mode fiber optic cable for long-distance, high-bandwidth applications. Perfect for telecommunications and data center backbones. Low attenuation and minimal dispersion."
  }
];

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id || ''));

  if (!product) {
    return (
      <div className="max-w-7xl mt-[50px] mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-indigo-600 hover:text-indigo-500">
          &larr; Back to shop
        </Link>
      </div>
    );
  }

  return (
    <main className="font-sans mt-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div className="w-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[700px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <nav className="text-sm mb-4">
              <ol className="flex space-x-2 text-gray-500">
                <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
                <li>/</li>
                <li><Link to="/shop" className="hover:text-gray-700">Shop</Link></li>
                <li>/</li>
                <li className="font-medium text-gray-700">{product.name}</li>
              </ol>
            </nav>

            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full uppercase">
              {product.category}
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mt-4">
              {product.name}
            </h1>

            <div className="mt-4">
              <p className="text-4xl text-gray-900">${product.price.toFixed(2)}</p>
            </div>

            <div className="mt-4 flex items-center">
              <div className="flex text-yellow-400">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} className="text-gray-300" fill="currentColor" />
              </div>
              <span className="ml-2 text-sm text-gray-500">(24 reviews)</span>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-2">
              <CheckCircle size={20} className="text-green-500" />
              <span className="text-sm font-medium text-gray-600">In Stock & Ready to Ship</span>
            </div>

            <div className="mt-8 flex gap-4">
              <input 
                type="number" 
                defaultValue="1" 
                min="1" 
                className="w-20 border border-gray-300 rounded-md px-3 py-3 text-center"
              />
              <button
                type="submit"
                className="flex-1 flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-gray-700"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to cart
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;