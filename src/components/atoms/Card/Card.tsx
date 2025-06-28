'use client';

import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'md' 
}) => {
  const baseClasses = 'bg-white rounded-xl border border-gray-100 transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1 corporate-shadow' : 'corporate-shadow';
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  const combinedClasses = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;
  
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Card; 