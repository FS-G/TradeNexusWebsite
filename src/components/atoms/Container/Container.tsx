'use client';

import { ContainerProps } from '@/types';

const Container: React.FC<ContainerProps> = ({ 
  children, 
  maxWidth = 'xl', 
  className = '', 
  padding = true 
}) => {
  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-8xl',
    full: 'max-w-full'
  };
  
  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : '';
  const combinedClasses = `mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses} ${className}`;
  
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Container; 