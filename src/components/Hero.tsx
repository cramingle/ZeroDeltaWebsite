import React from 'react';

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
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-6 sm:mb-8">
            Advanced{' '}
            <span className="text-success">basis trading</span>
            {' '}intelligence
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
            Ziro Delta Research specializes in systematic trading strategies 
            and advanced market making across digital asset markets, with a 
            focus on basis trading and funding rate optimization.
          </p>
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