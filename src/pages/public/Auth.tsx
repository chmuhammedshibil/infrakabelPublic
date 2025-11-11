import React, { useState, useRef, useLayoutEffect } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoh.png';
import login from '../../assets/26544.jpg'

const authImageUrl = login;

const LoginForm = () => (
  <form className="space-y-6">
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email address
      </label>
      <div className="mt-1 relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="you@example.com"
        />
      </div>
    </div>
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <div className="mt-1 relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="••••••••"
        />
      </div>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
          Remember me
        </label>
      </div>
      <div className="text-sm">
        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
          Forgot your password?
        </a>
      </div>
    </div>
    <div>
      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
      >
        Sign in
      </button>
    </div>
  </form>
);

const RegisterForm = () => (
  <form className="space-y-6">
    <div>
      <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
        Full Name
      </label>
      <div className="mt-1 relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          id="fullname"
          name="fullname"
          type="text"
          autoComplete="name"
          required
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="John Doe"
        />
      </div>
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email address
      </label>
      <div className="mt-1 relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          id="email-register"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="you@example.com"
        />
      </div>
    </div>
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <div className="mt-1 relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          id="password-register"
          name="password"
          type="password"
          required
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="••••••••"
        />
      </div>
    </div>
     <div>
      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
        Confirm Password
      </label>
      <div className="mt-1 relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          id="confirm-password"
          name="confirm-password"
          type="password"
          required
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="••••••••"
        />
      </div>
    </div>
    <div>
      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
      >
        Create Account
      </button>
    </div>
  </form>
);

const Auth: React.FC = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const loginRef = useRef<HTMLDivElement>(null);
  const registerRef = useRef<HTMLDivElement>(null);
  const [formHeight, setFormHeight] = useState<number | undefined>();

  useLayoutEffect(() => {
    if (isLoginView) {
      setFormHeight(loginRef.current?.scrollHeight);
    } else {
      setFormHeight(registerRef.current?.scrollHeight);
    }
  }, [isLoginView]);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 font-sans">
      
      <div className={`flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 transition-all duration-700
        ${isLoginView ? 'lg:order-first' : 'lg:order-last'}
      `}>
        <div className="mx-auto w-full max-w-md">
          <div className="flex justify-center mb-6">
            <Link to="/">
              <img className="h-20 w-auto" src={logo} alt="Infrakabel Logo" />
            </Link>
          </div>
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {isLoginView ? 'Sign in to your account' : 'Create a new account'}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isLoginView ? "Or " : "Already have an account? "}
              <button
                onClick={() => setIsLoginView(!isLoginView)}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {isLoginView ? 'create a new account' : 'sign in here'}
              </button>
            </p>
          </div>

          <div 
            className="relative transition-all duration-500"
            style={{ height: formHeight }}
          >
            <div
              ref={loginRef}
              className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out
                ${isLoginView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
                }`
              }
            >
              <LoginForm />
            </div>

            <div
              ref={registerRef}
              className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out
                ${isLoginView 
                  ? 'opacity-0 translate-x-10' 
                  : 'opacity-100 translate-x-0'
                }`
              }
            >
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>

      <div className={`hidden lg:block relative transition-all duration-700
        ${isLoginView ? 'lg:order-last' : 'lg:order-first'}
      `}>
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={authImageUrl}
          alt="Fiber optic cables"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-white">
                    Connecting the Future
                </h2>
                <p className="mt-4 text-xl text-gray-200">
                    High-speed, reliable fiber optic solutions from Infrakabel GmbH.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;