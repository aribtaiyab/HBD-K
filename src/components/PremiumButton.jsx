import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function PremiumButton({ 
  children, 
  onClick, 
  className, 
  icon = <Sparkles className="w-4 h-4 text-white" /> 
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "relative group px-8 py-4 rounded-full",
        "bg-gradient-to-r from-pink-300 to-purple-300",
        "shadow-[0_0_20px_rgba(249,168,212,0.5)]",
        "flex items-center justify-center gap-3 overflow-hidden",
        "transition-all duration-300 ease-out",
        className
      )}
    >
      <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors" />
      
      {/* Shine effect */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />

      <span className="relative z-10 flex items-center gap-2 text-white font-medium tracking-wide text-lg">
        {icon}
        {children}
      </span>
    </motion.button>
  );
}