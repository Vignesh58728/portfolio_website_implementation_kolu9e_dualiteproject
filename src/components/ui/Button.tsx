import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-[4px] font-work font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
    secondary: "bg-secondary text-[#EEEEEE] rounded-3xl font-poppins shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)]",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-white hover:text-primary",
    dark: "bg-[#393E46] bg-opacity-75 text-[#EEEEEE] rounded-3xl font-poppins backdrop-blur-sm shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)]"
  };

  // Handle custom variants not in the strict type if needed for specific design tweaks
  const variantStyle = variants[variant as keyof typeof variants] || variants.primary;

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyle} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
