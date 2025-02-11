import React from 'react';
import { Link } from 'react-router-dom';

// Matrix representing the octopus mascot shape (1 represents filled dots)
const MASCOT_MATRIX = [
  [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1],
  [1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0],
  [0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0],
  [1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1],
  [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1]
];

const Hero = () => {
  return (
    <section className="min-h-screen bg-dark flex items-center py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
              Launching Q2 2025
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-6 sm:mb-8">
            The first{' '}
            <span className="text-success">yield marketplace</span>
            {' '}for crypto
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8">
            Bid for exclusive access to professional basis trading opportunities. 
            Earn yields from 500% to 1800% APR through our automated market making system.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link 
              to="/marketplace" 
              className="w-full sm:w-auto px-8 py-3 bg-success text-dark font-medium hover:bg-success/90 transition-colors rounded-lg text-center"
            >
              Preview Marketplace
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-3 bg-success/10 text-success border border-success/30 rounded-lg hover:bg-success/20 transition-colors text-center"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-8">
            <div>
              <div className="text-success font-bold text-2xl">$50M+</div>
              <div className="text-gray-400 text-sm">Daily Basis Volume</div>
            </div>
            <div>
              <div className="text-success font-bold text-2xl">1800%</div>
              <div className="text-gray-400 text-sm">Max APR</div>
            </div>
            <div>
              <div className="text-success font-bold text-2xl">100+</div>
              <div className="text-gray-400 text-sm">Daily Opportunities</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 lg:mt-0">
          <div className="relative p-4 sm:p-6 lg:p-8 bg-dark-800/50 rounded-3xl w-full max-w-md mx-auto">
            <div className="grid grid-cols-16 gap-1 sm:gap-2">
              {MASCOT_MATRIX.flat().map((cell, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-500 hover:scale-125 ${
                    cell ? 'bg-success' : 'bg-dark-800'
                  }`}
                />
              ))}
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-success/5 rounded-3xl filter blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;