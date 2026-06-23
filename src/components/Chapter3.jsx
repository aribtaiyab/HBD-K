import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Chapter3({ onNext }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onNext();
    }, 2500); // Wait for letter unfold animation
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 1 } }}
      className="relative w-full h-full min-h-[100dvh] overflow-hidden flex flex-col items-center justify-center bg-[#E8DCC4]" // Wooden desk base color
    >
      {/* Wood Texture Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />
      {/* Desk Decorations */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: -5 }}
        transition={{ delay: 0.5 }}
        className="absolute top-10 left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"
      />{" "}
      {/* Coffee cup shadow suggestion */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute top-20 right-6 text-4xl transform rotate-12 opacity-80 filter drop-shadow-md"
      >
        🌷
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-8 w-16 h-20 bg-gray-50 rounded-sm shadow-md transform -rotate-6 border-4 border-white"
      />{" "}
      {/* Small polaroid suggestion */}
      {/* Envelope Container */}
      <motion.div
        animate={isOpen ? { scale: 1.01 } : { y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[90vw] max-w-[28rem] flex flex-col items-center gap-8"
      >
        <style>{`
          @keyframes chapter3-typing {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes chapter3-blink {
            50% { border-color: transparent; }
          }
          .chapter3-typewriter {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid rgba(90,74,66,0.5);
            animation: chapter3-typing 2.4s steps(32,end) 0.6s forwards, chapter3-blink .8s step-end infinite;
            width: 0;
          }
        `}</style>

        <div className="relative z-10 flex flex-col items-center gap-2">
          <p className="text-center font-heading text-3xl leading-tight tracking-[0.02em] text-[#5A4A42]">
            You've got a little letter ✨
          </p>
          <p className="text-center font-body text-sm text-[#5A4A42]/70 tracking-[0.01em]">
            Tap to open your surprise 🌸
          </p>
        </div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-5 top-6 h-2 w-2 rounded-full bg-white/80 blur-sm opacity-90" />
          <div className="absolute right-8 top-10 h-2 w-2 rounded-full bg-white/70 blur-sm opacity-80" />
          <div className="absolute left-10 bottom-16 h-2 w-2 rounded-full bg-pink-100/80 blur-sm opacity-90" />
          <div className="absolute right-10 bottom-10 h-2 w-2 rounded-full bg-amber-100/80 blur-sm opacity-80" />
          <div className="absolute left-1/2 top-24 h-1 w-1 -translate-x-1/2 rounded-full bg-white/80 opacity-80" />
          <div className="absolute right-4 top-32 h-2 w-2 rounded-full bg-pink-200/70 opacity-70" />
          <div className="absolute left-6 bottom-32 rotate-12 text-[0.85rem] text-[#DAB6B6]/80">
            🌸
          </div>
          <div className="absolute right-14 bottom-28 rotate-[-8deg] text-[1rem] text-[#FFD6E7]/70">
            ✨
          </div>
          <div className="absolute left-16 top-16 text-[0.85rem] text-[#E4B9C3]/70 rotate-6">
            🦋
          </div>
        </div>

        <motion.div
          onClick={!isOpen ? handleOpen : undefined}
          whileTap={{ scale: 0.98 }}
          className="relative w-full aspect-[4/3] min-h-[22rem] cursor-pointer"
        >
          <div className="absolute inset-x-0 top-full h-8 -translate-y-3 rounded-full bg-[#D1A69C]/20 blur-2xl" />
          <div className="absolute inset-0 rounded-[2rem] border border-rose-200/40 bg-[#fff6ef] shadow-[0_24px_70px_-30px_rgba(0,0,0,0.35)]" />
          <div
            className="absolute inset-0 rounded-[2rem] opacity-40"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.18'/%3E%3C/svg%3E")`,
              backgroundSize: "120px 120px",
            }}
          />
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),transparent_32%),radial-gradient(circle_at_80%_40%,rgba(255,228,235,0.45),transparent_25%)] opacity-80" />
          <div
            className="absolute inset-0 rounded-[2rem] opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0, transparent 30%), radial-gradient(circle at 80% 25%, rgba(234,202,206,0.35) 0, transparent 18%), linear-gradient(135deg, rgba(255,255,255,0.08), transparent 45%)`,
            }}
          />
          <div className="absolute inset-x-6 top-6 h-10 rounded-full bg-white/20 blur-xl" />
          <div className="absolute inset-x-6 bottom-6 h-10 rounded-full bg-rose-50/20 blur-xl" />

          <motion.div
            initial={{ rotateX: 0 }}
            animate={isOpen ? { rotateX: -180, zIndex: 5 } : { rotateX: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{ transformOrigin: "top", perspective: 1200 }}
            className="absolute inset-x-6 top-4 h-1/2 rounded-t-[1.75rem] bg-[#fbf2e7] border border-rose-100/40 shadow-[0_12px_40px_-26px_rgba(0,0,0,0.18)]"
          />

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isOpen ? { y: -190, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
            style={{ zIndex: isOpen ? 20 : 1 }}
            className="absolute left-6 right-6 top-20 h-[52%] rounded-[1.8rem] border border-rose-100/50 bg-[#fff4e3] shadow-[0_20px_40px_-24px_rgba(0,0,0,0.3)]"
          >
            <div className="h-full rounded-[1.8rem] bg-[#fff5e6] p-6">
              <div className="mb-4 h-3 w-24 rounded-full bg-rose-100/70" />
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-rose-100/60" />
                <div className="h-2 w-5/6 rounded-full bg-[#F0D7C8]" />
                <div className="h-2 w-3/4 rounded-full bg-rose-100/60" />
                <div className="h-2 w-4/5 rounded-full bg-[#F0D7C8]" />
              </div>
              <p
                className={`mt-8 text-base font-body leading-7 text-[#4A3B33] ${isOpen ? "chapter3-typewriter" : ""}`}
                style={{
                  textShadow:
                    "0 1px 0 rgba(255,255,255,0.7), 0 2px 6px rgba(0,0,0,0.08)",
                  position: "relative",
                  zIndex: 22,
                }}
              >
                Dear you, this little surprise is your cozy moment of joy.
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={
              isOpen ? { scale: 0.65, opacity: 0 } : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#E8B7C7] border border-rose-200 shadow-[0_18px_45px_-25px_rgba(195,89,123,0.55)] flex items-center justify-center"
          >
            <div className="w-8 h-8 rounded-full bg-[#F7D2D9] flex items-center justify-center text-rose-700 text-sm shadow-sm">
              ♡
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={
              isOpen
                ? { opacity: 1, scale: 1, y: -40 }
                : { opacity: 0, scale: 0.3 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute left-1/2 top-10 -translate-x-1/2 flex gap-2"
          >
            <span className="text-pink-200 text-sm">✨</span>
            <span className="text-pink-100 text-sm">🌸</span>
            <span className="text-pink-200 text-sm">🌟</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
