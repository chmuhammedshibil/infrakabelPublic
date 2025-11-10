import React from 'react';

const NewsletterSignup: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-wider">
          Sign Up For Exclusivity
        </h2>
        
        <p className="mt-4 text-base text-gray-600">
          Join now for early access to sales, new arrivals, and exclusive offers
        </p>

        <form className="mt-8 flex w-full max-w-lg mx-auto">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="flex-auto min-w-0 appearance-none rounded-l-md border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Enter your e-mail"
          />
          <button
            type="submit"
            className="flex-none rounded-r-md bg-gray-900 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-colors"
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
};

export default NewsletterSignup;