import React from 'react';

export const Card = ({
  children,
  hoverEffect = true,
  glowEffect = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`
        glass-card
        rounded-2xl
        p-6
        transition-all
        duration-300
        ${glowEffect ? 'card-glow' : ''}
        ${hoverEffect ? 'hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/5' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
