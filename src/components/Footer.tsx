import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark-800 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <img src={logo} alt="Zero Delta Logo" className="h-6 sm:h-8 w-auto" />
              <span className="text-base sm:text-lg font-medium text-white">ZeroDelta</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 max-w-xl">
              Advanced basis trading intelligence and systematic market making across digital asset markets.
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Registered Company: PT. Ninuang Global Business
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-sm sm:text-base text-white font-medium mb-2 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/basis-trading" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Basis Trading
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/earn-yield" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Earn Yield
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-sm sm:text-base text-white font-medium mb-2 sm:mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/careers" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              © {new Date().getFullYear()} ZeroDelta. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 