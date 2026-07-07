import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Polaroid from "./Polaroid";
import PremiumButton from "./PremiumButton";
import { ArrowRight } from "lucide-react";
import imgk7 from "./imgk7.jpeg";

export default function Chapter4({ onNext }) {
  const [text, setText] = useState("");
  const PHOTO_URL = imgk7;
  const fullText =
    "[Whishing You A Happy Birthday Kulsum]\n Enojoy ur day  ,do whatever u want , orr Inshallah u get everthing u pray for . mazeee karia orrr kya hi bolu , Aur haan msg ignore karti thik thik koina , at the end enjoy karia jo maan vo karia ,khush rahe aur hamesha haste rahia  🌸💖";

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
      className="relative w-full h-full min-h-[100dvh] bg-[#FAF8F5] px-6 pt-[calc(1.2rem+env(safe-area-inset-top))] pb-24 flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden scroll-smooth"
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

      <div className="relative z-10 w-full max-w-sm flex flex-col gap-8 pt-2 pb-4">
        <Polaroid
          imageSrc={PHOTO_URL}
          caption="Today's Vibe ✨"
          rotation={-3}
          tapeOffset="left"
          delay={0.2}
          imageFit="contain"
          imageAspectRatio="aspect-[3/4]"
          className="w-[84%] self-end !p-2 !pb-10"
          imageFrameClassName="rounded-[1.1rem] border-white/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4),inset_0_6px_16px_rgba(255,255,255,0.28),0_8px_16px_-12px_rgba(0,0,0,0.16)]"
          imageClassName="scale-[1.02]"
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

      <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center">
        <div className="flex flex-col items-center text-[#a86f76] text-[11px] tracking-[0.22em] uppercase">
          <span className="mb-1">Scroll down</span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-pink-200 bg-white/90 shadow-sm animate-bounce">
            <span className="text-pink-400">↓</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
