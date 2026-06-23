import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const SecretEnding = ({ onReplay }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showDecoration, setShowDecoration] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowMessage(true);
    }, 800);

    const timer2 = setTimeout(() => {
      setShowDecoration(true);
    }, 3000);

    const timer3 = setTimeout(() => {
      setShowConfetti(true);
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Typewriter animation
  const typewriterMessage = `Agar app ye dekh rahi hai, to matlab apne ye poori journey dekh li ✨\n\nAur agar apko lag raha ho ki maine bas koi template lekar usme images aur notes add kar diye hain, to aisa nahi hai 😊\n\nYe poora scrapbook maine khud design aur thousands line of code karke banaya hai. Jo kuch maine pichhle ek saal me seekha, usi se ye chhota sa surprise banane ki koshish ki.\n\nApp bolti thi na, "Tumhe kya aata hai?" 😄\n\nBas, yahi aata hai... websites banana. Aur socha ki is baar apke liye kuch thoda alag aur yaadgar banaya jaye 🌸\n\nI hope this little surprise made you smile, even if just for a moment.\n\nHappy Birthday once again ✨🎂`;

  const butterflies = [
    { id: 0, delay: 0.5, x: 10, duration: 15 },
    { id: 1, delay: 2, x: 30, duration: 18 },
    { id: 2, delay: 3.5, x: 60, duration: 20 },
    { id: 3, delay: 1.5, x: 80, duration: 16 },
    { id: 4, delay: 4, x: 50, duration: 22 },
  ];

  const sparkles = [
    { id: 0, delay: 0, x: 20, y: 25 },
    { id: 1, delay: 0.3, x: 70, y: 35 },
    { id: 2, delay: 0.6, x: 30, y: 60 },
    { id: 3, delay: 0.9, x: 80, y: 50 },
    { id: 4, delay: 1.2, x: 15, y: 75 },
    { id: 5, delay: 1.5, x: 85, y: 20 },
    { id: 6, delay: 0.4, x: 45, y: 15 },
    { id: 7, delay: 1.1, x: 60, y: 80 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full h-full overflow-y-auto overflow-x-hidden flex flex-col items-center justify-start p-4 pt-2 pb-8 scroll-smooth"
      style={{
        background:
          "linear-gradient(135deg, #FFF5F0 0%, #FAE6F1 50%, #E6D5F0 100%)",
        backgroundAttachment: "fixed",
        scrollBehavior: "smooth",
      }}
    >
      <style>{`
        div::-webkit-scrollbar {
          width: 8px;
        }
        div::-webkit-scrollbar-track {
          background: transparent;
        }
        div::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #FFB6D9, #DDA0DD);
          border-radius: 4px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #FF9AC6, #CC8FCC);
        }
      `}</style>
      {showConfetti && <Confetti recycle={false} numberOfPieces={80} />}

      {/* Paper Texture Overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23ffffff' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Fairy Lights */}
      <div className="absolute top-0 left-0 w-full h-20 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`light-${i}`}
            className="absolute rounded-full"
            style={{
              width: 8,
              height: 8,
              left: `${(i / 12) * 100}%`,
              top: `${Math.sin(i) * 20 + 30}px`,
              background: `hsl(${45 + i * 10}, 100%, 60%)`,
              boxShadow: `0 0 20px hsl(${45 + i * 10}, 100%, 60%)`,
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <div className="text-yellow-300 text-lg drop-shadow-lg">✨</div>
        </motion.div>
      ))}

      {/* Floating Butterflies */}
      {butterflies.map((butterfly) => (
        <motion.div
          key={`butterfly-${butterfly.id}`}
          className="absolute pointer-events-none text-2xl"
          style={{
            left: `${butterfly.x}%`,
          }}
          animate={{
            y: [0, -400],
            x: [0, Math.sin(butterfly.id) * 50],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: butterfly.duration,
            delay: butterfly.delay,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        >
          🦋
        </motion.div>
      ))}

      {/* Main Content Container */}
      <div className="relative z-10 max-w-xs">
        {/* Title with Dancing Script */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <motion.h1
            className="text-4xl font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #D4AF8F 0%, #FFB6D9 50%, #E6B3D9 100%)",
              fontFamily: '"Dancing Script", cursive',
              letterSpacing: "2px",
              textShadow: "0 0 30px rgba(212, 175, 143, 0.3)",
            }}
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            🎀 One Last Thing...
          </motion.h1>
        </motion.div>

        {/* Washi Tape Decorations */}
        <div className="absolute -top-6 -left-4 transform -rotate-12 opacity-60">
          <div className="text-5xl">🌸</div>
        </div>
        <div className="absolute -bottom-6 -right-4 transform rotate-12 opacity-60">
          <div className="text-5xl">🌼</div>
        </div>

        {/* Message Container with Paper Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={showMessage ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          {/* Paper Background */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden border-2"
            style={{
              background: "#FFFBF7",
              borderColor: "#F5E6D3",
              boxShadow:
                "0 20px 60px rgba(212, 175, 143, 0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            {/* Paper grain texture */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='5' result='noise'/%3E%3CfeDisplacementMap in='SourceGraphic' in2='noise' scale='15'/%3E%3C/filter%3E%3Crect width='300' height='300' fill='%23E8D4C4' filter='url(%23paper)' opacity='0.3'/%3E%3C/svg%3E")`,
                backgroundSize: "300px 300px",
              }}
            />

            {/* Message Text with Typewriter Effect */}
            <motion.div className="relative z-10 space-y-4">
              {typewriterMessage.split("\n\n").map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  className="text-sm leading-relaxed text-gray-700"
                  style={{ fontFamily: '"Courier New", monospace' }}
                  initial={{ opacity: 0 }}
                  animate={showMessage ? { opacity: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.3,
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* Polaroid-style decorative elements */}
          <div className="absolute -top-8 -right-6 transform rotate-6 opacity-40">
            <div className="bg-white p-2 rounded shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-sm" />
            </div>
          </div>
        </motion.div>

        {/* Doodles and Flower Stickers */}
        <motion.div
          animate={showDecoration ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-around mb-6 px-4 text-2xl"
        >
          <span>🌷</span>
          <span>✨</span>
          <span>🦋</span>
          <span>💕</span>
          <span>🌹</span>
        </motion.div>

        {/* Bottom Decoration and Signature */}
        <motion.div
          animate={showDecoration ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-3 text-sm"
        >
          <p
            className="text-gray-600 italic"
            style={{
              fontFamily: '"Dancing Script", cursive',
              fontSize: "16px",
            }}
          >
            🌸 Made with ARIB and lots of code ✨
          </p>

          {/* Date Stamp */}
          <motion.div
            className="inline-block px-3 py-1 border-2 border-gray-400 rounded text-xs text-gray-500 rotate-3"
            style={{
              fontSize: "10px",
              fontFamily: '"Courier New", monospace',
            }}
          >
            {new Date("2026-07-07").toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </motion.div>

          {/* Signature */}
          <p
            className="text-gray-600 italic text-xs"
            style={{
              fontFamily: '"Dancing Script", cursive',
              fontSize: "14px",
            }}
          >
            — Someone who spent hours making this 😊
          </p>
        </motion.div>

        {/* Replay Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          {/* Tiny stars around button */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute text-lg pointer-events-none"
              style={{
                left: `${50 + Math.cos((i / 4) * Math.PI * 2) * 70}%`,
                top: `${-40 + Math.sin((i / 4) * Math.PI * 2) * 70}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 1.2,
              }}
            >
              ⭐
            </motion.div>
          ))}

          {/* Main Replay Button */}
          <motion.button
            onClick={onReplay}
            className="relative px-6 py-3 rounded-full font-semibold text-white transition-all hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #FFB6D9 0%, #DDA0DD 100%)",
              boxShadow: "0 10px 30px rgba(255, 182, 217, 0.3)",
              fontFamily: '"Dancing Script", cursive',
              fontSize: "16px",
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🎀 Replay The Memories
          </motion.button>
        </motion.div>
      </div>

      {/* Lantern Glow Effect */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 182, 217, 0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default SecretEnding;
