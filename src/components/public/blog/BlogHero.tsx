import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BlogHeroProps {
  title?: string;
  currentPage?: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({ 
  title = "Our Blog", 
  currentPage = "Blog" 
}) => {
  return (
    <section className="relative h-[55vh] min-h-[300px] flex flex-col items-center justify-center text-white bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">
      
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          {title}
        </h1>
        
        <nav className="flex items-center space-x-2 text-sm sm:text-base text-gray-300">
          <a 
            href="/" 
            className="hover:text-white transition-colors duration-200"
          >
            Homepage
          </a>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-white font-medium">
            {currentPage}
          </span>
        </nav>
      </div>
    </section>
  );
};

export default BlogHero;