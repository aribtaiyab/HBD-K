import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PremiumButton from "./PremiumButton";
import ParticleEffects from "./ParticleEffects";
import imgk6 from "./imgk6.jpeg";

export default function Chapter5b({ onNext }) {
  const [noteText, setNoteText] = useState("");
  const fullNote =
    "\n\nTime flies, moments change, but some things remain beautifully special.\n\n" +
    "And somehow, that smile still has the same magic 🌸\n\n";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setNoteText(fullNote.slice(0, index + 1));
      index += 1;
      if (index >= fullNote.length) {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [fullNote]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, x: -100, transition: { duration: 0.8 } }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative w-full h-screen max-h-[100dvh] min-h-[100dvh] bg-gradient-to-b from-[#FFF1E8] via-[#FFE6F1] to-[#F4EEFF] p-6 flex flex-col items-center overflow-y-auto touch-pan-y scroll-smooth overscroll-y-contain"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <ParticleEffects count={18} />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_48%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 120 120\'%3E%3Cpath d=\'M0 0h120v120H0z\' fill=%27%23fff7f0%27/%3E%3Cpath d=\'M0 0h120v120H0z\' fill=%27none%27 stroke=%27%23f4e5dd%27 stroke-width=\'1\'/%3E%3C/svg%3E')",
        }}
      />

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center gap-8 pt-6 pb-10">
        <div className="w-full text-center">
          <p className="font-heading text-3xl sm:text-4xl text-[#8B5B62]">
            ✨ Through The Years 🌸
          </p>
          <p className="mt-4 font-handwriting text-xl text-[#A86C80]">
            Some memories become even more beautiful with time ✨
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative w-full"
        >
          <div className="absolute -top-5 left-8 w-20 h-16 rounded-3xl bg-pink-100/90 shadow-soft rotate-[-8deg]" />
          <div className="absolute top-4 right-8 w-16 h-10 rounded-3xl bg-[#F7E5F1] border border-pink-200 shadow-soft rotate-6" />
          <div className="absolute top-10 left-6 w-3 h-3 rounded-full bg-rose-300 shadow-[0_0_14px_rgba(255,183,191,0.5)]" />
          <div className="absolute bottom-2 right-10 w-3 h-3 rounded-full bg-[#F8D2E1] shadow-[0_0_14px_rgba(255,203,219,0.5)]" />
          <div className="absolute top-7 right-14 w-14 h-5 rounded-full bg-gradient-to-r from-[#ffd1d9] via-[#ffe8ef] to-[#f7d2ff] shadow-soft rotate-6" />
          <div className="absolute bottom-8 left-10 w-16 h-6 rounded-full bg-gradient-to-r from-[#f8c7d6] via-[#fff1e6] to-[#f9d8ff] shadow-soft rotate-[-8deg]" />

          <div className="relative mx-auto w-full bg-[#fff7ef] border border-rose-100/80 rounded-[2.5rem] shadow-[0_25px_80px_-40px_rgba(131,63,82,0.35)] backdrop-blur-sm">
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/70 pointer-events-none" />
            <div className="absolute top-4 left-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#ffe4f0] to-[#ffd8e9] opacity-80 blur-xl" />

            <div className="absolute -top-6 left-6 w-16 h-16 rounded-full bg-[#ffe9f6] border border-white/70 shadow-soft" />
            <div className="absolute -top-5 right-5 w-24 h-14 rounded-3xl bg-gradient-to-r from-pink-300 via-[#ffd6e5] to-[#f7e0ff] shadow-soft rotate-3" />
            <div className="absolute bottom-6 right-8 w-10 h-10 bg-white rounded-full border border-rose-200 shadow-sm flex items-center justify-center text-[#d9889f] text-xl">
              ✨
            </div>
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#f4d8e7] border border-rose-200 shadow-soft flex items-center justify-center text-[#c56f87] text-sm">
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.8)] bg-gradient-to-br from-[#fff1eb] via-[#fffaf4] to-[#f6efff]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.8rem] bg-[#fdf7f4]">
                <img
                  src={imgk6}
                  alt="Through the Years"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 w-14 h-14 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.75),transparent_60%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_40%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_40%)]" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="w-full max-w-md bg-[#fff4ea] border border-rose-100/80 rounded-[2rem] shadow-soft p-6"
        >
          <div className="relative">
            <div className="absolute -top-4 left-4 w-12 h-12 rounded-full bg-[#ffe8f3] shadow-soft" />
            <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-pink-200 shadow-sm" />
          </div>

          <p className="font-handwriting text-lg leading-relaxed text-[#7f5662] whitespace-pre-wrap">
            {noteText}
          </p>
          <span className="inline-block mt-3 h-6 w-1 rounded-full bg-[#c88aa2] animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="relative flex flex-col items-center gap-4"
        >
          <PremiumButton
            onClick={onNext}
            className="bg-gradient-to-r from-pink-300 via-[#e7b6d3] to-lavender-300 shadow-[0_0_24px_rgba(244,173,209,0.4)]"
          >
            ✨ Continue The Journey
          </PremiumButton>

          <div className="relative flex items-center gap-2 text-[#b76f7d] text-xs tracking-wide">
            <span className="animate-bounce">🦋</span>
            <span>warm sparkles & flower wishes</span>
            <span className="animate-pulse">🌸</span>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-20 flex justify-center items-center gap-2 opacity-90">
        <div className="flex flex-col items-center text-[#a0697a] text-xs tracking-[0.22em] uppercase">
          <span className="mb-1">Scroll down</span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-rose-200 bg-white/80 shadow-soft animate-bounce">
            <span className="text-pink-400">↓</span>
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center gap-6 opacity-90">
        <div className="relative w-12 h-12 rounded-full bg-pink-100/80 shadow-soft rotate-12">
          <span className="absolute inset-0 flex items-center justify-center text-pink-400">
            🦋
          </span>
        </div>
        <div className="relative w-10 h-10 rounded-full bg-[#fbe9f0] border border-rose-100 shadow-soft">
          <span className="absolute inset-0 flex items-center justify-center text-rose-400">
            ✨
          </span>
        </div>
        <div className="relative w-14 h-14 rounded-3xl bg-[#f7e8ff] border border-lavender-200 shadow-soft rotate-[-6deg]">
          <span className="absolute inset-0 flex items-center justify-center text-[#d58fb8]">
            🌸
          </span>
        </div>
      </div>
    </motion.div>
  );
}
