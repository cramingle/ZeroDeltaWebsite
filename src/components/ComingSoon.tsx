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

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden py-20 sm:py-32">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="grid grid-cols-16 gap-1 sm:gap-2 transform scale-100 sm:scale-125 lg:scale-150">
          {MASCOT_MATRIX.flat().map((cell, i) => (
            <div
              key={i}
              className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full ${
                cell ? 'bg-success' : 'bg-dark-800'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Coming Soon: Revolutionary Yield Earning Platform
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8">
          Get ready for the world's largest yield earning opportunity with Real World Assets (RWA) as protection.
        </p>
        <div className="bg-success/10 p-4 sm:p-6 rounded-lg border border-success/20 backdrop-blur-sm">
          <p className="text-success text-base sm:text-lg">
            We're building something extraordinary - a platform that combines unparalleled yield opportunities with the security of real-world asset backing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon; 