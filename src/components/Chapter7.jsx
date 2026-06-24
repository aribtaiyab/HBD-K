import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const questions = [
  {
    title: "✨ Which photo chapter did you like the most?",
    options: [
      {
        label: "🧸 Childhood Memories",
        reaction: "Aww 🥹",
        tone: "bg-baby-pink text-[#8F5A72]",
      },
      {
        label: "🌸 Through The Years",
        reaction: "Beautiful choice ✨",
        tone: "bg-lavender text-[#7C4F9A]",
      },
      {
        label: "📸 Special Memory",
        reaction: "Hehe 📸",
        tone: "bg-cream-white text-[#974F61]",
      },
    ],
  },
  {
    title: "🌷 Birthday mood right now?",
    options: [
      {
        label: "😴 Sleep",
        reaction: "Same 😂",
        tone: "bg-cream-white text-[#7C5A65]",
      },
      { label: "🍕 Eat", reaction: "Yumm 😋", tone: "bg-peach text-[#B35F4E]" },
      {
        label: "🥳 Celebrate",
        reaction: "Party time 🎉",
        tone: "bg-lavender text-[#7D4C9B]",
      },
    ],
  },
  {
    title: "🎵 What makes a day better?",
    options: [
      {
        label: "🎶 Music",
        reaction: "Taste ✨",
        tone: "bg-baby-pink text-[#8F5A72]",
      },
      {
        label: "🍕 Food",
        reaction: "Always 😆",
        tone: "bg-cream-white text-[#7A5C52]",
      },
      {
        label: "🌸 Good company",
        reaction: "True 🌷",
        tone: "bg-lavender text-[#734C8E]",
      },
    ],
  },
  {
    title: "✨ How was this little surprise?",
    options: [
      {
        label: "🌷 Cute",
        reaction: "Yay 🌸",
        tone: "bg-baby-pink text-[#8F5670]",
      },
      {
        label: "😭💖 Amazing",
        reaction: "Worth it 😭",
        tone: "bg-peach text-[#A46E62]",
      },
      {
        label: "✨ Unexpected",
        reaction: "Hehe ✨",
        tone: "bg-lavender text-[#81559E]",
      },
    ],
  },
  {
    title: "Which one is ur favorite app?",
    options: [
      {
        label: "🎵 Spotify",
        reaction: "good choice 🎶",
        tone: "bg-cream-white text-[#7B5A4F]",
      },
      {
        label: "📸 Pinterest",
        reaction: "Aesthetic queen 🌷",
        tone: "bg-lavender text-[#7A4E91]",
      },
      {
        label: "📷 Instagram",
        reaction: "sameeeee",
        tone: "bg-baby-pink text-[#9B667A]",
      },
    ],
  },
  {
    title: "🎀 Did this website make you smile?",
    options: [
      {
        label: "😊 Yes",
        reaction: "Mission accomplished 🌷",
        tone: "bg-cream-white text-[#7F5E55]",
      },
      {
        label: "😭💖 Of course",
        reaction: "Yay 😭✨",
        tone: "bg-peach text-[#A56456]",
      },
    ],
  },
  {
    title: "🎁 One last question...\nAgge bhi ignore karia ga? 😂",
    options: [
      {
        label: "😌 Haan, adat hai",
        reaction: "Koi na 😂",
        tone: "bg-baby-pink text-[#8B5E71]",
      },
      {
        label: "🌸 Nahi, ab thoda kam karungi",
        reaction: "Noted 😆",
        tone: "bg-lavender text-[#77538F]",
      },
      {
        label: "😆 Dekhte hain",
        reaction: "Expected 😭",
        tone: "bg-cream-white text-[#7A5B52]",
      },
    ],
  },
];

const finalNoteLines = [
  "✨",
  "Thanks for answering all these silly little questions 😆🌸",
  "Bas aise hi thoda mazee ke liye tha.",
  "Ab chalia, last page baki hai... 🎀✨",
];

export default function Chapter7({ onNext }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showReaction, setShowReaction] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [finished, setFinished] = useState(false);
  const [typedText, setTypedText] = useState("");

  const currentQuestion = useMemo(() => questions[activeIndex], [activeIndex]);

  useEffect(() => {
    let timer;
    if (selected !== null) {
      setShowReaction(true);
      setShowConfetti(true);
      timer = window.setTimeout(() => {
        setShowReaction(false);
        setShowConfetti(false);
        setSelected(null);
        if (activeIndex + 1 < questions.length) {
          setActiveIndex((prev) => prev + 1);
        } else {
          setFinished(true);
        }
      }, 1200);
    }
    return () => window.clearTimeout(timer);
  }, [selected, activeIndex]);

  useEffect(() => {
    let index = 0;
    if (finished) {
      setTypedText("");
      const fullText = finalNoteLines.join("\n");
      const interval = window.setInterval(() => {
        index += 1;
        setTypedText(fullText.slice(0, index));
        if (index >= fullText.length) {
          window.clearInterval(interval);
        }
      }, 35);
      return () => window.clearInterval(interval);
    }
  }, [finished]);

  const handleOptionClick = (optionIndex) => {
    if (selected !== null || finished) return;
    setSelected(optionIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.7 } }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="relative w-full min-h-[100dvh] overflow-hidden bg-gradient-to-b from-[#FFF4F7] via-[#FFF7FA] to-[#F7EEFF] p-5 flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,230,242,0.7),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(238,230,255,0.8),transparent_30%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 120 120\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'120\' height=\'120\' filter=\'url(%23noise)\' fill=\'%23fff5f8\'/%3E%3C/svg%3E')",
        }}
      />

      <div className="relative z-10 w-full max-w-md flex flex-col gap-6">
        <div className="flex flex-col gap-3 text-center px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[#A26E81]">
        
          </p>
          <h1
            className="font-handwriting text-[2.2rem] leading-tight text-[#A24F72] drop-shadow-[0_10px_30px_rgba(184,106,123,0.18)]"
            style={{ fontFamily: '"Dancing Script", cursive' }}
          >
            🎀 Just For Fun
          </h1>
          <p className="font-handwriting text-sm text-[#7A5A65] leading-6 whitespace-pre-line">
            "Aiye kuch mazee ke liye questions karte hai..😆✨"
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 px-4">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-8 rounded-full transition-all duration-500 ${
                idx <= activeIndex && !finished
                  ? "bg-[#F6B8D0] shadow-[0_0_10px_rgba(246,184,208,0.3)]"
                  : "bg-[#F2E4F7]/70"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={`question-${activeIndex}`}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative bg-white/95 border border-[#F2D9E6] shadow-[0_20px_60px_-24px_rgba(158,85,115,0.35)] rounded-[32px] p-6 overflow-hidden"
            >
              <div className="absolute top-4 left-4 h-12 w-12 rounded-full bg-[#FFE7F0]/90 blur-[0.5px]" />
              <div className="absolute bottom-6 right-6 h-14 w-14 rounded-full bg-[#F2E6FF]/95 blur-[0.5px]" />
              <div className="absolute top-3 right-6 h-10 w-20 rounded-full bg-[#FEDFE8] rotate-[18deg] shadow-[0_8px_20px_rgba(255,182,216,0.24)]" />
              <div className="absolute bottom-4 left-5 h-10 w-14 rounded-[14px] bg-[#FFF0F3] shadow-[inset_0_0_0_1px_rgba(232,181,208,0.95)] rotate-[-10deg]" />

              <div className="relative z-10 flex flex-col gap-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="rounded-full bg-[#FFF1F5] px-3 py-1 text-xs text-[#9C5B75] shadow-[0_6px_18px_rgba(203,129,160,0.14)]">
                    scrapbook mood
                  </div>
                  <div className="flex items-center gap-1 text-[#D681A2] text-xs">
                    <span>✨</span>
                    <span>
                      {activeIndex + 1}/{questions.length}
                    </span>
                  </div>
                </div>

                <div className="rounded-[28px] bg-[#FFF0F4] border border-[#F7D6E5] p-5 shadow-[inset_0_0_0_1px_rgba(245,191,216,0.4)]">
                  <p
                    className="font-handwriting text-xl leading-tight text-[#8E556F] whitespace-pre-line"
                    style={{ fontFamily: '"Dancing Script", cursive' }}
                  >
                    {currentQuestion.title}
                  </p>
                </div>

                <div className="grid gap-3">
                  {currentQuestion.options.map((option, optionIndex) => {
                    const isActive = selected === optionIndex;
                    return (
                      <motion.button
                        key={option.label}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        animate={
                          isActive ? { scale: [1, 1.08, 1] } : { scale: 1 }
                        }
                        transition={{ duration: 0.4 }}
                        onClick={() => handleOptionClick(optionIndex)}
                        className={`relative overflow-hidden rounded-full border border-[#F6D3E3] px-5 py-4 text-left text-sm font-medium shadow-[0_16px_40px_-24px_rgba(143,85,111,0.35)] transition-all duration-300 ${
                          option.tone
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-90 pointer-events-none" />
                        <div className="relative z-10 flex items-center justify-between gap-3">
                          <span>{option.label}</span>
                          <span className="text-lg">
                            {isActive ? "✨" : ""}
                          </span>
                        </div>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#E69FC0] opacity-80">
                          {optionIndex % 2 === 0 ? "🌟" : "✨"}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {showReaction && selected !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.35 }}
                      className="relative mx-auto w-fit rounded-full bg-[#FFF0F4] px-4 py-2 text-sm text-[#7A4A6F] shadow-[0_12px_30px_-18px_rgba(169,90,121,0.6)]"
                    >
                      {currentQuestion.options[selected]?.reaction}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {showConfetti && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="pointer-events-none absolute inset-0"
                  >
                    {Array.from({ length: 10 }).map((_, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 0, x: 0, scale: 1 }}
                        animate={{
                          opacity: [1, 1, 0],
                          y: [0, -18 - index * 2],
                          x: (index % 2 === 0 ? 14 : -14) + index * 2,
                          rotate: 360,
                        }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        className="absolute h-2 w-2 rounded-full bg-[#F5A7C9]"
                        style={{
                          left: `${20 + index * 6}%`,
                          top: `${40 + (index % 4) * 6}%`,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="final-note"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-[38px] border border-[#F1D7E4] bg-[#FFF5F7] p-6 shadow-[0_30px_80px_-40px_rgba(180,102,140,0.24)]"
            >
              <div className="absolute -top-3 left-4 h-10 w-10 rounded-full bg-[#FFE7F3]/80 blur-xl" />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="text-center">
                  <p
                    className="text-xl font-handwriting text-[#A75A78]"
                    style={{ fontFamily: '"Dancing Script", cursive' }}
                  >
                    handwritten note
                  </p>
                </div>
                <div
                  className="min-h-[140px] rounded-[28px] border border-[#F4D7E2] bg-[#FFF7F9] p-5 text-sm text-[#71525D] shadow-[inset_0_0_0_1px_rgba(247,214,229,0.95)] whitespace-pre-line font-handwriting"
                  style={{ fontFamily: '"Dancing Script", cursive' }}
                >
                  {typedText || "..."}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[#F08BAE]">🌸</span>
                  <span className="text-[#D8A6B7]">tiny scrapbook memory</span>
                  <span className="text-[#F0B6D5]">✨</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onNext}
                  className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FFC1DB] to-[#D8B2FF] px-8 py-3 text-sm font-semibold text-[#5B2A4D] shadow-[0_18px_40px_-18px_rgba(176,88,140,0.7)] transition-all duration-300"
                >
                  <span className="absolute inset-0 rounded-full border border-[#F7C9E2] opacity-70" />
                  <span className="relative z-10 flex items-center gap-2">
                    <span>🌷</span>
                    Continue
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
