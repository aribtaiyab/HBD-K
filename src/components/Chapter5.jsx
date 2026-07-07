import { motion } from "framer-motion";
import PremiumButton from "./PremiumButton";
import { ArrowRight } from "lucide-react";
import imgk2 from "./imgk2.jpeg";
import imgk8 from "./imgk8.jpeg";

export default function Chapter5({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -100, transition: { duration: 0.8 } }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-screen max-h-screen bg-gradient-to-b from-orange-50 to-pink-50 p-6 pt-10 pb-20 flex flex-col items-center justify-start overflow-y-auto"
    >
      {/* Warm glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,228,214,0.4)_0%,transparent_70%)] pointer-events-none" />

      {/* Hanging Line */}
      <div
        className="absolute top-20 left-0 w-full h-[2px] bg-gray-300/50 shadow-sm"
        style={{ transform: "rotate(-2deg)" }}
      />

      <div className="relative z-10 w-full max-w-sm flex flex-col gap-10 sm:gap-12 mt-6 sm:mt-10">
        {/* Photo 1 hanging */}
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full sm:w-2/3 self-start ml-0 sm:ml-4 origin-top"
        >
          {/* Clip */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-6 bg-gray-400 rounded-sm shadow-sm z-10 before:content-[''] before:absolute before:top-1 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-1 before:bg-gray-200 before:rounded-full" />

          <div className="relative bg-[#fff6ef] rounded-[1.8rem] border border-rose-200/70 shadow-[0_22px_60px_-28px_rgba(0,0,0,0.2)] overflow-hidden transform rotate-3">
            <div className="absolute inset-x-6 top-3 flex justify-between px-2">
              <span className="block w-12 h-3 rounded-xl bg-pink-200/90 shadow-sm" />
              <span className="block w-12 h-3 rounded-xl bg-pink-200/90 shadow-sm" />
            </div>
            <div className="absolute top-7 left-4 w-10 h-10 rounded-full bg-white/90 border border-rose-100 shadow-sm flex items-center justify-center text-amber-600 text-xs">
              ✨
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.1rem] border border-white/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4),inset_0_6px_16px_rgba(255,255,255,0.28),0_8px_16px_-12px_rgba(0,0,0,0.16)]">
              <img
                src={imgk2}
                alt="Scrapbook memory"
                className="w-full h-full object-contain object-center scale-[1.02] transition duration-1000 ease-out rounded-[1.1rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>
            <div className="p-4">
              <p className="font-handwriting text-lg text-[#705548]">
                how fast times goes ✨
              </p>
            </div>
            <div className="absolute -left-4 top-5 w-10 h-10 rounded-full bg-pink-100/80 blur-xl opacity-80" />
            <div className="absolute right-3 bottom-16 w-8 h-8 rounded-full bg-white/80 opacity-90 shadow-sm" />
            <div className="absolute left-6 bottom-10 text-[0.9rem] text-[#D78B8B]/80">
              🌸
            </div>
            <div className="absolute right-7 bottom-6 text-[0.85rem] text-[#F3C1D1]/80">
              ✨
            </div>
          </div>
        </motion.div>

        {/* Photo 2 hanging */}
        <motion.div
          animate={{ rotate: [2, -2, 2] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="relative w-full sm:w-2/3 self-end mr-0 sm:mr-4 origin-top -mt-10"
        >
          {/* Clip */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-6 bg-gray-400 rounded-sm shadow-sm z-10 before:content-[''] before:absolute before:top-1 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-1 before:bg-gray-200 before:rounded-full" />

          <div className="relative bg-[#fff8f1] rounded-[1.7rem] border border-rose-100/70 shadow-[0_18px_40px_-26px_rgba(0,0,0,0.18)] overflow-hidden transform -rotate-3">
            <div className="absolute inset-x-5 top-3 flex justify-between px-2">
              <span className="block w-10 h-2 rounded-full bg-pink-200/90 shadow-sm" />
              <span className="block w-10 h-2 rounded-full bg-pink-200/90 shadow-sm" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.1rem] border border-white/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4),inset_0_6px_16px_rgba(255,255,255,0.28),0_8px_16px_-12px_rgba(0,0,0,0.16)]">
              <img
                src={imgk8}
                alt="Scrapbook memory"
                className="w-full h-full object-contain object-center scale-[1.02] rounded-[1.1rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
            <div className="p-4">
              <p className="font-handwriting text-base text-[#7B5A4F]">
                A little dreamy moment
              </p>
            </div>
            <div className="absolute left-3 bottom-16 text-[0.85rem] text-[#DAB6B6]/80">
              🦋
            </div>
            <div className="absolute right-4 bottom-5 w-2 h-2 rounded-full bg-pink-200/80 shadow-sm" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-4 px-4 sm:px-0"
        >
          <p className="font-body text-lg leading-relaxed text-gray-800 mb-6">
            [App socha rahi hongi ki ye pic mera pass kaha se aya to mai batadu
            ki maine ye jannat appi ke insta pe dekha tha to wahi se liya socha
            apko acha lagega apna purana pic dekh ke. acha laga na ?] <br />
            <span className="text-base text-gray-600 mt-2 block">
              Look how far you've come!
            </span>
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
