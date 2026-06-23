import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleEffects from "./ParticleEffects";

export default function Chapter1({ onNext }) {
  const [isOpening, setIsOpening] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 600);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => onNext(), 900);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
      className="relative w-full h-full min-h-[100dvh] overflow-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-b from-pink-50 via-white to-white"
    >
      <ParticleEffects count={8} subtle />

      {/* Soft paper grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence baseFrequency=\"0.9\" numOctaves=\"2\"/%3E%3C/filter%3E%3Crect width=\"400\" height=\"400\" fill=\"%23fffaf6\" filter=\"url(%23n)\" opacity=\"0.04\"/%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center px-6">
        {/* Top small text */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "Poppins, system-ui, sans-serif",
            color: "#b76e79",
          }}
          className="text-sm mb-6"
        >
          ✨ A Dreamy Birthday Moment ✨
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: "Playfair Display, serif",
            backgroundImage: "linear-gradient(90deg,#ffb6c6,#f6d0e6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textShadow: "0 6px 18px rgba(0,0,0,0.04)",
            lineHeight: 1.08,
          }}
          className="text-4xl md:text-5xl font-semibold leading-normal mb-6 text-center"
        >
          <span style={{ display: "block" }}>Happy Birthday,</span>
          <span style={{ display: "block", marginTop: 10 }}>
            <span className="text-4xl md:text-5xl" style={{ lineHeight: 1 }}>
              Kulsum
            </span>
            <span
              style={{
                fontSize: 18,
                color: "#dca6b7",
                marginLeft: 8,
                verticalAlign: "middle",
              }}
            >
              🎀
            </span>
          </span>
        </motion.h1>

        {/* Elegant single-layer cake */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={
            showContent ? { opacity: 1, y: 0, scale: [0.99, 1, 0.995] } : {}
          }
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-12 mb-8"
        >
          <div className="relative flex flex-col items-center">
            <div className="w-56 md:w-64 h-20 rounded-2xl bg-[#fffaf6] shadow-xl border border-[#f0dfe0] flex items-center justify-center">
              {/* ribbon */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-5 bg-gradient-to-r from-pink-200 to-pink-300 rounded-b-lg shadow-sm" />

              {/* small flower & pearls */}
              <div className="absolute -top-4 left-8 flex items-center gap-2">
                <div className="w-3 h-3 bg-pink-300 rounded-full" />
                <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
              </div>

              {/* candle */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-2 h-10 bg-gradient-to-t from-pink-200 to-white rounded-sm" />
                <motion.div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-6 rounded-full origin-bottom"
                  animate={{ scale: [1, 1.03, 0.98, 1], rotate: [0, 1, -1, 0] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    background:
                      "radial-gradient(circle at 40% 30%, #fff9d1, #ffd86b 40%, #ffb24a 70%)",
                    boxShadow: "0 0 14px rgba(255,200,80,0.45)",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Button */}
        <motion.button
          onClick={handleOpen}
          disabled={isOpening}
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="px-6 py-3 rounded-full text-white font-medium shadow-md"
          style={{
            background: "linear-gradient(90deg,#ffb6d7,#ffd7b5)",
            boxShadow: "0 8px 24px rgba(221,160,221,0.12)",
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity, repeatDelay: 3 }}
          >
            🎁 Open Your Surprise
          </motion.span>
        </motion.button>

        {/* Bottom handwritten text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 0.6 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-sm"
          style={{
            fontFamily: "Dancing Script, cursive",
            color: "#b76e79",
            opacity: 0.6,
          }}
        >
          ✨ Something beautiful is waiting for you ✨
        </motion.p>
      </div>

      {/* subtle sparkles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0"
      >
        {/* tiny scattered sparkles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-200 text-xs"
            style={{ left: `${10 + i * 12}%`, top: `${12 + i * 6}%` }}
            animate={{ y: [0, -8, 0], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.4 }}
          >
            ✨
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
