import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import bgMusic from "./golden-hour.mp3.mp3";

export default function MusicWidget() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.78;

    return () => {
      audio.pause();
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const playMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    console.log("audio readyState", audio.readyState);
    console.log("audio currentSrc", audio.currentSrc);
    console.log("audio error", audio.error);

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.error("Audio play failed:", err);
    }
  };

  const pauseMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  };

  const handleToggle = async () => {
    if (isPlaying) {
      pauseMusic();
      return;
    }

    await playMusic();
    setToastVisible(true);
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastVisible(false);
    }, 2000);
  };

  return (
    <>
      <audio ref={audioRef} className="hidden">
        <source src={bgMusic} type="audio/mpeg" />
      </audio>

      <motion.button
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="absolute top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/30 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.2)] backdrop-blur-xl"
      >
        <motion.span
          animate={
            isPlaying ? { rotate: 360, scale: 1.05 } : { rotate: 0, scale: 1 }
          }
          transition={{
            repeat: isPlaying ? Infinity : 0,
            duration: 6,
            ease: "linear",
          }}
          className="text-xl"
        >
          {isPlaying ? "🎶" : "🎵"}
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-16 right-4 z-50 w-[min(92%,220px)] rounded-3xl border border-rose-200 bg-[#fff7ef] p-3 shadow-[0_18px_60px_-38px_rgba(208,116,141,0.35)] text-sm text-[#7a4d60]"
          >
            <p className="font-semibold text-[#8e566c]">
              🎶 Golden Hour playing ✨
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
