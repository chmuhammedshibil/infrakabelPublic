import React, { useState } from 'react'; 
import ShopHero from '../../components/public/shop/ShopHero';
import ProductCard, { type Product } from '../../components/common/ProductCard';
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import p5 from '../../assets/p5.jpg'
import p6 from '../../assets/p6.jpg'
import p7 from '../../assets/p7.jpg'



const shopProducts: Product[] = [
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
    "name": "SC/APC Fiber Connector",
    "price": 5.99,
    "image": p3,
    "category": "Connectors",
    "description": "High-quality single-mode fiber optic cable for long-distance, high-bandwidth applications. Perfect for telecommunications and data center backbones. Low attenuation and minimal dispersion."
  },
  {
    "id": 4,
    "name": "Fiber Optic Splicer",
    "price": 1999.00,
    "image": p4,
    "category": "Tools",
    "description": "High-quality single-mode fiber optic cable for long-distance, high-bandwidth applications. Perfect for telecommunications and data center backbones. Low attenuation and minimal dispersion."
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

const Shop: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProducts = shopProducts.filter(product => {
    if (activeFilter === 'ALL') {
      return true; 
    }
    return product.category.toUpperCase() === activeFilter;
  });

  return (
    <main>
      <ShopHero 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />
      
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="sr-only">Products</h2> 
          
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;