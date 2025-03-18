import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Link to="/" className="flex items-center">
            <Rocket className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-gray-900">SaaS Starter</span>
          </Link>
        </div>
        <nav className="mt-8 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <Link to="/about" className="text-base text-gray-500 hover:text-gray-900">
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/pricing" className="text-base text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/features" className="text-base text-gray-500 hover:text-gray-900">
              Features
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/blog" className="text-base text-gray-500 hover:text-gray-900">
              Blog
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/privacy" className="text-base text-gray-500 hover:text-gray-900">
              Privacy
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/terms" className="text-base text-gray-500 hover:text-gray-900">
              Terms
            </Link>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} SaaS Starter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
