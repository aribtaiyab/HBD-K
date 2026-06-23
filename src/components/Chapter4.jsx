import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Polaroid from "./Polaroid";
import PremiumButton from "./PremiumButton";
import { ArrowRight } from "lucide-react";
import imgk1 from "./imgk1.jpeg";

export default function Chapter4({ onNext }) {
  const [text, setText] = useState("");
  const PHOTO_URL = imgk1;
  const fullText =
    "[Whishing You A Happy Birthday Kulsum]\n Enojoy ur day  ,do whatever u want , orr Inshallah u get everthing u pray for . mazeee karia orrr kya hi bolu , orr ha msg ignore karti thik thik koina , at the enjoy karia jo maan vo karia ,Be happy  🌸💖";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50); // Typewriter speed

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100, transition: { duration: 0.8 } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-full min-h-[100dvh] bg-[#FAF8F5] p-6 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Scrapbook Paper Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Stickers */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="absolute top-8 left-8 text-3xl rotate-12"
      >
        🌸
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="absolute bottom-32 right-6 text-3xl -rotate-12"
      >
        ✨
      </motion.div>

      <div className="relative z-10 w-full max-w-sm flex flex-col gap-8">
        <Polaroid
          imageSrc={PHOTO_URL}
          caption="Today's Vibe ✨"
          rotation={-3}
          tapeOffset="left"
          delay={0.2}
          className="w-3/4 self-end" // Organic layout, slightly off-center
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-pink-50 relative"
        >
          {/* Tape on letter */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-pink-200/50 backdrop-blur-sm transform rotate-2 shadow-sm" />

          <p className="font-body text-base text-gray-700 leading-relaxed whitespace-pre-wrap min-h-[150px]">
            {text}
          </p>
          <PremiumButton
            onClick={onNext}
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Next Page
          </PremiumButton>
        </motion.div>
      </div>
    </motion.div>
  );
}
