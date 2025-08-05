import React from 'react';

const IslamicPattern = ({ className = "", opacity = 0.1 }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="islamic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Geometric Islamic Pattern */}
            <g stroke="currentColor" strokeWidth="1" fill="none">
              {/* Octagonal Star Pattern */}
              <polygon points="25,10 35,15 40,25 35,35 25,40 15,35 10,25 15,15" />
              <polygon points="75,10 85,15 90,25 85,35 75,40 65,35 60,25 65,15" />
              <polygon points="25,60 35,65 40,75 35,85 25,90 15,85 10,75 15,65" />
              <polygon points="75,60 85,65 90,75 85,85 75,90 65,85 60,75 65,65" />
              
              {/* Connecting lines */}
              <line x1="40" y1="25" x2="60" y2="25" />
              <line x1="25" y1="40" x2="25" y2="60" />
              <line x1="75" y1="40" x2="75" y2="60" />
              <line x1="40" y1="75" x2="60" y2="75" />
              
              {/* Botanical elements */}
              <circle cx="50" cy="35" r="3" fill="currentColor" opacity="0.3"/>
              <circle cx="50" cy="65" r="3" fill="currentColor" opacity="0.3"/>
              <circle cx="35" cy="50" r="2" fill="currentColor" opacity="0.2"/>
              <circle cx="65" cy="50" r="2" fill="currentColor" opacity="0.2"/>
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
      </svg>
    </div>
  );
};

export default IslamicPattern;