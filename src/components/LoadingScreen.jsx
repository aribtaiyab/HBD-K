import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import ParticleEffects from './ParticleEffects';

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="fixed inset-0 w-full h-full bg-dreamy-gradient flex flex-col items-center justify-center z-50 overflow-hidden"
    >
      {/* Blurred background circle */}
      <div className="absolute w-64 h-64 bg-pink-200/50 rounded-full blur-[60px]" />
      
      <ParticleEffects count={30} />

      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [-2, 2, -2]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10"
      >
        <div className="w-24 h-24 bg-white/80 backdrop-blur-md rounded-2xl shadow-glow flex items-center justify-center border border-white/50">
          <Gift className="w-12 h-12 text-pink-400" strokeWidth={1.5} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 mt-8 text-center"
      >
        <p className="font-heading text-2xl text-gray-800 tracking-wide">
          Preparing a little surprise...
        </p>
        <motion.p 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="font-handwriting text-xl text-pink-500 mt-2"
        >
          Just for you 🎀
        </motion.p>
      </motion.div>
    </motion.div>
  );
}