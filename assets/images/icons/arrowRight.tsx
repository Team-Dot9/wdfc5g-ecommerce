import React from 'react';

const IconArrowRight: React.FC = () => {

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="9" 
      height="15" 
      viewBox="0 0 9 15"
    >
      <rect
        x="1.06067"
        y="0.75"
        width="9.94"
        height="1.5" rx="0.75" transform="rotate(45 1.06067 0.75)"
      />
      <rect
        y="13.75"
        width="9.94"
        height="1.5"
        rx="0.75"
        transform="rotate(-45 0 13.75)"
      />
    </svg>
  );
};

export default IconArrowRight;