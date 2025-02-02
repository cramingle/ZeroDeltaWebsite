import React from 'react';

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

interface LogoWithTextProps {
  className?: string;
}

const LogoWithText: React.FC<LogoWithTextProps> = ({ className = '' }) => {
  return (
    <svg 
      width="400" 
      height="80" 
      viewBox="0 0 400 80" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(10, 10)">
        {/* Mascot Matrix */}
        <g transform="scale(2)">
          {MASCOT_MATRIX.map((row, i) => 
            row.map((cell, j) => 
              cell === 1 ? (
                <circle
                  key={`${i}-${j}`}
                  cx={j * 2 + 1}
                  cy={i * 2 + 1}
                  r="0.9"
                  fill="#00FF94"
                />
              ) : null
            )
          )}
        </g>
        
        {/* Text */}
        <g transform="translate(80, 30)">
          <text
            fontFamily="Inter, sans-serif"
            fontSize="32"
            fontWeight="600"
            fill="#FFFFFF"
            letterSpacing="0.05em"
          >
            <tspan>ZERO DELTA</tspan>
          </text>
        </g>
      </g>
    </svg>
  );
};

export default LogoWithText; 