import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import bgMusic from "./golden-hour.mp3.mp3";

export default function MusicWidget() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [autoplayPrompt, setAutoplayPrompt] = useState(false);
  const toastTimerRef = useRef(null);
  const userInteractHandlerRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const rafRef = useRef(null);
  const barRefs = useRef([]);
  const BAR_COUNT = 12;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.78;

    // Try to autoplay on first mount
    const tryAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        // start visualiser if possible
        try {
          if (!audioContextRef.current && typeof window !== "undefined") {
            const AudioContext =
              window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioContext();
            const src = ctx.createMediaElementSource(audio);
            const analyser = ctx.createAnalyser();
            analyser.fftSize = 64;
            src.connect(analyser);
            analyser.connect(ctx.destination);
            audioContextRef.current = ctx;
            analyserRef.current = analyser;
            const bufferLength = analyser.frequencyBinCount;
            dataArrayRef.current = new Uint8Array(bufferLength);
          }
        } catch (e) {
          console.warn("Analyser setup failed:", e);
        }
        // start visualiser loop if analyser available
        try {
          if (analyserRef.current && dataArrayRef.current) startAnalyserLoop();
        } catch (e) {
          console.warn("Start analyser failed:", e);
        }
        // show small playing toast briefly
        setToastVisible(true);
        if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
        toastTimerRef.current = window.setTimeout(
          () => setToastVisible(false),
          2000,
        );
      } catch (err) {
        // Autoplay blocked by browser; show prompt to user
        console.warn("Autoplay blocked:", err);
        setAutoplayPrompt(true);

        const onFirstInteract = async () => {
          try {
            // resume AudioContext if suspended
            if (!analyserRef.current && typeof window !== "undefined") {
              try {
                const AudioContext =
                  window.AudioContext || window.webkitAudioContext;
                const ctx = new AudioContext();
                const src = ctx.createMediaElementSource(audio);
                const analyser = ctx.createAnalyser();
                analyser.fftSize = 64;
                src.connect(analyser);
                analyser.connect(ctx.destination);
                audioContextRef.current = ctx;
                analyserRef.current = analyser;
                dataArrayRef.current = new Uint8Array(
                  analyser.frequencyBinCount,
                );
              } catch (e) {
                console.warn("Analyser creation failed:", e);
              }
            }

            if (
              audioContextRef.current &&
              audioContextRef.current.state === "suspended"
            ) {
              await audioContextRef.current.resume();
            }

            await audio.play();
            setIsPlaying(true);
            setAutoplayPrompt(false);

            if (analyserRef.current && dataArrayRef.current)
              startAnalyserLoop();
          } catch (e) {
            console.error("Play after interaction failed:", e);
          }
        };

        userInteractHandlerRef.current = onFirstInteract;
        window.addEventListener("click", onFirstInteract, { once: true });
        window.addEventListener("touchstart", onFirstInteract, { once: true });
      }
    };

    tryAutoplay();

    return () => {
      // cleanup
      audio.pause();
      stopAnalyserLoop();
      if (audioContextRef.current && audioContextRef.current.close) {
        try {
          audioContextRef.current.close();
        } catch {
          /* ignore */
        }
      }
      if (userInteractHandlerRef.current) {
        window.removeEventListener("click", userInteractHandlerRef.current);
        window.removeEventListener(
          "touchstart",
          userInteractHandlerRef.current,
        );
      }
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  function startAnalyserLoop() {
    const analyser = analyserRef.current;
    const data = dataArrayRef.current;
    if (!analyser || !data) return;

    const tick = () => {
      analyser.getByteFrequencyData(data);
      const step = Math.max(1, Math.floor(data.length / BAR_COUNT));
      for (let i = 0; i < BAR_COUNT; i++) {
        const idx = i * step;
        const val = data[idx] || 0;
        const scale = 0.25 + (val / 255) * 0.9; // 0.25 - 1.15
        const el = barRefs.current[i];
        if (el) {
          el.style.transform = `scaleY(${scale})`;
          el.style.opacity = `${0.4 + (val / 255) * 0.7}`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
  }

  function stopAnalyserLoop() {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    // reset bars
    for (let i = 0; i < BAR_COUNT; i++) {
      const el = barRefs.current[i];
      if (el) {
        el.style.transform = `scaleY(0.35)`;
        el.style.opacity = `0.45`;
      }
    }
  }

  const playMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    console.log("audio readyState", audio.readyState);
    console.log("audio currentSrc", audio.currentSrc);
    console.log("audio error", audio.error);

    try {
      // ensure AudioContext exists
      if (!analyserRef.current && typeof window !== "undefined") {
        try {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          const ctx = new AudioContext();
          const src = ctx.createMediaElementSource(audio);
          const analyser = ctx.createAnalyser();
          analyser.fftSize = 64;
          src.connect(analyser);
          analyser.connect(ctx.destination);
          audioContextRef.current = ctx;
          analyserRef.current = analyser;
          dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);
        } catch (e) {
          console.warn("Analyser creation failed:", e);
        }
      }

      // resume audio context if needed
      if (
        audioContextRef.current &&
        audioContextRef.current.state === "suspended"
      ) {
        await audioContextRef.current.resume();
      }

      await audio.play();
      setIsPlaying(true);
      // start visualiser
      startAnalyserLoop();
    } catch (err) {
      console.error("Audio play failed:", err);
    }
  };

  const pauseMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
    stopAnalyserLoop();
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
        animate={{ opacity: 1, y: [0, -2, 0] }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="absolute top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.2)] backdrop-blur-xl overflow-visible"
      >
        <div className="absolute inset-0 rounded-full bg-white/10" />

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: 64,
            height: 64,
            marginLeft: -32,
            marginTop: -32,
            border: "2px solid transparent",
            borderRadius: "50%",
            borderImage: "conic-gradient(#FFB6C1, #D8B4FE, #FFD6A5, #FFB6C1) 1",
            opacity: 0.8,
            filter: "blur(4px)",
            zIndex: 1,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {isPlaying &&
          Array.from({ length: BAR_COUNT }).map((_, i) => {
            const angle = (360 / BAR_COUNT) * i;
            const delay = (i * 0.1) % 1.2;
            const colors = ["#FFB6C1", "#D8B4FE", "#FFE5EC", "#FFD6A5"];

            return (
              <motion.span
                key={i}
                className="pointer-events-none absolute left-1/2 top-1/2 rounded-full"
                style={{
                  width: 4,
                  height: 4,
                  backgroundColor: colors[i % colors.length],
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-32px)`,
                  boxShadow: "0 0 10px rgba(255,255,255,0.35)",
                  zIndex: 2,
                }}
                animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{
                  delay,
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}

        <motion.span
          className="relative z-20 text-xl"
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isPlaying
              ? { repeat: Infinity, duration: 8, ease: "linear" }
              : { duration: 0 }
          }
        >
          {isPlaying ? "🎶" : "🎵"}
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {autoplayPrompt && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-16 right-4 z-50 w-[min(92%,220px)] rounded-3xl border border-rose-200 bg-[#fff7ef] p-2 shadow-[0_18px_60px_-38px_rgba(208,116,141,0.35)] text-sm text-[#7a4d60]"
          >
            <p className="font-semibold text-[#8e566c]"></p>
          </motion.div>
        )}

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
