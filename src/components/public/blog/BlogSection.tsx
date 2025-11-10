import React from 'react';
import BlogCard from './BlogCard';
import p1 from '../../../assets/p1.jpg'
import p4 from '../../../assets/p4.jpg'
import p6 from '../../../assets/p6.jpg'


const blogPosts = [
  {
    id: 1,
    category: 'Industry Trends',
    date: 'Oct 10, 2025',
    title: 'The Future is Fiber: Why 5G Depends on Fiber Optics',
    excerpt: 'Discover the critical relationship between 5G technology and the underlying fiber optic infrastructure that makes it possible.',
    imageUrl: p1,
  },
  {
    id: 2,
    category: 'Installation',
    date: 'Oct 05, 2025',
    title: '5 Common Mistakes in Fiber Optic Cable Installation (And How to Avoid Them)',
    excerpt: 'Laying fiber optic cable? Avoid these common pitfalls to ensure a fast, reliable, and long-lasting network connection.',
    imageUrl: p4,
  },
  {
    id: 3,
    category: 'Technology',
    date: 'Sep 28, 2025',
    title: 'Single-Mode vs. Multi-Mode: Which Fiber Cable Do You Need?',
    excerpt: 'A comprehensive guide to understanding the key differences between single-mode and multi-mode fiber optic cables.',
    imageUrl: p6,
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From Our Blog
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with the latest news and insights in fiber optic technology.
          </p>
        </div>
        <div className="grid max-w-lg gap-8 mx-auto lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;