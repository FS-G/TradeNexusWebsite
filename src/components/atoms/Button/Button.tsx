'use client';

import { ButtonProps } from '@/types';
import Link from 'next/link';
import { forwardRef } from 'react';

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    onClick, 
    href, 
    disabled = false, 
    className = '', 
    type = 'button',
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantClasses = {
      primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 corporate-shadow hover:shadow-lg',
      secondary: 'bg-dark-900 hover:bg-dark-800 text-white focus:ring-gray-500 corporate-shadow hover:shadow-lg',
      outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500',
      ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500'
    };
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };
    
    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    if (href && !disabled) {
      return (
        <Link 
          href={href} 
          className={combinedClasses}
          ref={ref as any}
          {...props}
        >
          {children}
        </Link>
      );
    }
    
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={combinedClasses}
        ref={ref as any}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button; 