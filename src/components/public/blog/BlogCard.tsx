import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.03]">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <a href="#" className="hover:underline">{post.category}</a>
          </p>
          <a href="#" className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
            <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <time dateTime={post.date} className="text-sm text-gray-500">
            {post.date}
          </time>
          <a
            href="#"
            className="group inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Read More
            <ArrowRight size={16} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;