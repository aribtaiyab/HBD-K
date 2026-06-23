import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleEffects from "./ParticleEffects";

export default function FinalChapter({ onReplay }) {
  const [showPS, setShowPS] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPS(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const lanterns = [
    { id: 0, x: 10, delay: 0, duration: 18, scale: 0.65 },
    { id: 1, x: 24, delay: 1.2, duration: 16, scale: 0.72 },
    { id: 2, x: 36, delay: 0.6, duration: 20, scale: 0.55 },
    { id: 3, x: 50, delay: 2, duration: 17, scale: 0.8 },
    { id: 4, x: 62, delay: 0.9, duration: 19, scale: 0.6 },
    { id: 5, x: 72, delay: 1.8, duration: 15, scale: 0.7 },
    { id: 6, x: 82, delay: 0.3, duration: 21, scale: 0.58 },
    { id: 7, x: 92, delay: 1.1, duration: 14, scale: 0.76 },
  ];

  const fireworks = [
    {
      id: 0,
      x: 12,
      y: 10,
      delay: 0.2,
      repeatDelay: 3.6,
      color: "#FE7F9C",
      size: 24,
    },
    {
      id: 1,
      x: 28,
      y: 16,
      delay: 0.7,
      repeatDelay: 4.2,
      color: "#FFD166",
      size: 30,
    },
    {
      id: 2,
      x: 44,
      y: 12,
      delay: 1.1,
      repeatDelay: 3.8,
      color: "#8EC0FF",
      size: 28,
    },
    {
      id: 3,
      x: 58,
      y: 8,
      delay: 0.4,
      repeatDelay: 4.5,
      color: "#A855F7",
      size: 26,
    },
    {
      id: 4,
      x: 72,
      y: 14,
      delay: 1.6,
      repeatDelay: 3.2,
      color: "#5EEAD4",
      size: 22,
    },
    {
      id: 5,
      x: 86,
      y: 18,
      delay: 0.9,
      repeatDelay: 4.0,
      color: "#FB7185",
      size: 32,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      transition={{ duration: 2 }}
      className="relative w-full h-full min-h-[100dvh] bg-gradient-to-b from-[#120E2A] via-[#1F1948] to-[#0B1C3B] p-6 flex flex-col items-center justify-center overflow-hidden"
    >
      <ParticleEffects count={70} />

      {/* Colorful Fireworks */}
      {fireworks.map((fire) => (
        <motion.div
          key={fire.id}
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: [0, 1, 0.8, 0], scale: [0.2, 1.1, 0.95, 1] }}
          transition={{
            duration: 2.4,
            delay: fire.delay,
            repeat: Infinity,
            repeatDelay: fire.repeatDelay,
            ease: "easeOut",
          }}
          className="absolute z-10 pointer-events-none"
          style={{
            left: `${fire.x}%`,
            top: `${fire.y}%`,
            width: fire.size,
            height: fire.size,
          }}
        >
          <div className="relative w-full h-full">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="absolute left-1/2 top-1/2 rounded-full"
                style={{
                  width: 4,
                  height: 14,
                  background: fire.color,
                  transform: `translate(-50%, -50%) rotate(${idx * 45}deg) translateY(-18px)`,
                  boxShadow: `0 0 18px ${fire.color}`,
                }}
              />
            ))}
            <div
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: 8,
                height: 8,
                transform: "translate(-50%, -50%)",
                background: fire.color,
                filter: "blur(2px)",
                opacity: 0.95,
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Floating Lanterns */}
      {lanterns.map((l) => (
        <motion.div
          key={l.id}
          initial={{ y: "100vh", opacity: 0, x: `${l.x}%` }}
          animate={{ y: "-20vh", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: l.duration,
            delay: l.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 z-0"
          style={{ scale: l.scale }}
        >
          <div className="w-8 h-12 bg-orange-200/80 rounded-sm relative blur-[1px] shadow-[0_0_15px_rgba(251,146,60,0.8)] before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-2 before:bg-orange-400/50" />
        </motion.div>
      ))}

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <p className="font-heading text-4xl text-pink-100 mb-6 leading-relaxed drop-shadow-md">
             🌸
          </p>
          <p className="font-heading text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFD665] via-[#F472B6] to-[#8B5CF6] drop-shadow-[0_0_16px_rgba(255,255,255,0.35)]">
            Onces Again Happy Birthday ✨
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showPS ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <p className="font-handwriting text-xl text-pink-200 mb-2">P.S.</p>
            <p className="font-body text-sm text-gray-200">
              I hope this little surprise made you smile 😊
            </p>
          </div>

          {/* Cute "One Last Thing" Button with Sparkles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex flex-col items-center gap-4"
          >
            {/* Sparkles around button */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute text-lg pointer-events-none"
                style={{
                  left: `${50 + Math.cos((i / 4) * Math.PI * 2) * 80}%`,
                  top: `${50 + Math.sin((i / 4) * Math.PI * 2) * 80}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
              >
                ✨
              </motion.div>
            ))}

            {/* Main Button */}
            <motion.button
              onClick={onReplay}
              className="relative px-8 py-3 rounded-full font-semibold text-white transition-all hover:scale-110 active:scale-95 border-2"
              style={{
                background: "linear-gradient(135deg, #FFB6D9 0%, #DDA0DD 100%)",
                borderColor: "#D4AF8F",
                boxShadow:
                  "0 0 30px rgba(255, 182, 217, 0.4), inset 0 -2px 10px rgba(0, 0, 0, 0.1)",
                fontFamily: '"Dancing Script", cursive',
                fontSize: "18px",
                letterSpacing: "1px",
              }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🌷 One Last Thing...
            </motion.button>

            {/* Hint Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-sm text-pink-200 italic mt-2"
              style={{ fontFamily: '"Dancing Script", cursive' }}
            >
              ✨ There's one more page waiting for you...
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
