import React from 'react';

const BackgroundGrid = () => {
  return (
    <>
      {/* Grid container */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base grid */}
        <div 
          className="absolute inset-0 mix-blend-soft-light" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(255 255 255 / 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(255 255 255 / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            backgroundPosition: 'center'
          }}
        />

        {/* Larger grid overlay */}
        <div 
          className="absolute inset-0 mix-blend-soft-light" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(255 255 255 / 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(255 255 255 / 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '240px 240px',
            backgroundPosition: 'center'
          }}
        />
      </div>

      {/* Accent glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 -left-24 w-[500px] h-[500px] bg-success/20 rounded-full blur-[128px] mix-blend-soft-light" />
        <div className="absolute bottom-1/3 right-12 w-[300px] h-[300px] bg-success/20 rounded-full blur-[96px] mix-blend-soft-light" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-success/15 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2 mix-blend-soft-light" />
      </div>
    </>
  );
};

export default BackgroundGrid; 