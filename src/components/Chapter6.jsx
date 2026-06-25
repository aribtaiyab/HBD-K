import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Polaroid from "./Polaroid";
import PremiumButton from "./PremiumButton";
import ParticleEffects from "./ParticleEffects";
import { ArrowRight } from "lucide-react";
import imgk4 from "./imgk4.jpeg";
import imgk5 from "./imgk5.jpeg";

export default function Chapter6({ onNext }) {
  const [showCaption, setShowCaption] = useState(false);
  const captionText =
    "[MEMORY]\n memory????? voto hai hi nhi hammne kabhi baat hi nhi ki kya pata kyu nhi hoti baat koina ajj apka birthday cake cut kariaa inashallah apke saare dua qabool ho aur mera liya bhi dua karia mai bhi kuch karu zindagi mein 😭😭😭 ... \n i hope apko ye acha laga ho ,syad se apko ye normal lag raha hoga magar  isske picha maine  code likha hai tab jake ye proper website bana hai,  keep smiling ,ghumia phiria mazeeeee kariaaaa.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCaption(true);
    }, 1500); // Wait for flash effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.8 } }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-screen min-h-[100dvh] bg-[#FAF8F5] p-6 pb-[120px] flex flex-col items-center justify-start overflow-y-auto"
    >
      <ParticleEffects count={25} />

      {/* Paper texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Camera Flash Effect */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-white z-50 pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-8">
        <Polaroid
          imageSrc={imgk4}
          caption="A treasured memory"
          rotation={1}
          tapeOffset="top"
          delay={0.5}
          className="w-full max-w-[300px]"
        />

        <Polaroid
          imageSrc={imgk5}
          caption="Another sweet moment"
          rotation={-2}
          tapeOffset="right"
          delay={0.8}
          imageFit="contain"
          imagePosition="center"
          imageAspectRatio="aspect-[3/4]"
          className="w-full max-w-[260px]"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showCaption ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="min-h-[100px] text-center"
        >
          <p className="font-handwriting text-2xl text-gray-700 leading-relaxed whitespace-pre-wrap">
            {captionText}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showCaption ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 mb-0"
        >
          <div className="flex w-full justify-center">
            <div className="mt-8">
              <PremiumButton
                onClick={onNext}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Next Page
              </PremiumButton>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
