import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Confetti from 'react-confetti';
import { Lock, Unlock } from 'lucide-react';
import ParticleEffects from './ParticleEffects';

export default function Chapter2({ onNext }) {
  const [pin, setPin] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const controls = useAnimation();
  const CORRECT_PIN = '0707';

  useEffect(() => {
    if (pin.length === 4) {
      if (pin === CORRECT_PIN) {
        handleCorrectPin();
      } else {
        handleWrongPin();
      }
    }
  }, [pin]);

  const handleCorrectPin = async () => {
    setIsUnlocked(true);
    await controls.start({
      scale: [1, 1.1, 0],
      opacity: [1, 1, 0],
      transition: { duration: 1, delay: 1 }
    });
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  const handleWrongPin = async () => {
    setIsWrong(true);
    await controls.start({
      x: [-10, 10, -10, 10, 0],
      transition: { duration: 0.4 }
    });
    setTimeout(() => {
      setPin('');
      setIsWrong(false);
    }, 500);
  };

  const handleNumberClick = (num) => {
    if (pin.length < 4 && !isUnlocked) {
      setPin(prev => prev + num);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="relative w-full h-full min-h-[100dvh] bg-dreamy-gradient flex flex-col items-center justify-center p-6 overflow-hidden"
    >
      <ParticleEffects count={20} />
      {isUnlocked && <Confetti recycle={false} numberOfPieces={200} colors={['#FFE8F1', '#FFD6E7', '#F4D58D', '#FFF']} />}

      <motion.div 
        animate={controls}
        className="w-full max-w-sm flex flex-col items-center z-10"
      >
        {/* Lock Icon */}
        <motion.div 
          layout
          className="w-20 h-20 bg-white/50 backdrop-blur-md rounded-full shadow-glow flex items-center justify-center mb-8 border border-white/40 text-champagne-gold"
        >
          {isUnlocked ? <Unlock className="w-10 h-10" /> : <Lock className="w-10 h-10" />}
        </motion.div>

        <h2 className="font-heading text-2xl text-gray-800 mb-2 text-center">
          Only you know this <br/> little secret 🌸
        </h2>
        
        {/* PIN Dots */}
        <div className="flex gap-4 my-8">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                i < pin.length 
                  ? (isWrong ? 'bg-red-400' : 'bg-pink-400') 
                  : 'bg-white/50 border border-pink-200'
              }`}
            />
          ))}
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-[280px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <motion.button
              key={num}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleNumberClick(num.toString())}
              className="w-16 h-16 rounded-full bg-white/60 backdrop-blur-sm shadow-soft flex items-center justify-center text-xl font-body text-gray-700 mx-auto hover:bg-white transition-colors"
            >
              {num}
            </motion.button>
          ))}
          <div /> {/* Empty cell */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNumberClick('0')}
            className="w-16 h-16 rounded-full bg-white/60 backdrop-blur-sm shadow-soft flex items-center justify-center text-xl font-body text-gray-700 mx-auto hover:bg-white transition-colors"
          >
            0
          </motion.button>
          <div /> {/* Empty cell */}
        </div>
      </motion.div>
    </motion.div>
  );
}