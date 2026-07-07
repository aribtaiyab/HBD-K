import { motion } from "framer-motion";
import { cn } from "./PremiumButton";

export default function Polaroid({
  imageSrc,
  caption,
  className,
  rotation = 0,
  tapeOffset = "top",
  delay = 0,
  imageFit = "cover",
  imagePosition = "center",
  imageAspectRatio = "aspect-[4/3]",
  imageFrameClassName,
  imageClassName,
}) {
  const leftTapeClass =
    tapeOffset === "left"
      ? "left-4 top-5"
      : tapeOffset === "right"
        ? "left-6 top-5"
        : "left-6 top-3";
  const rightTapeClass =
    tapeOffset === "right"
      ? "right-4 top-5"
      : tapeOffset === "left"
        ? "right-6 top-5"
        : "right-6 top-3";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={cn(
        "relative bg-[#fff7f0] p-3 pb-16 shadow-[0_20px_45px_-24px_rgba(126,84,73,0.45)] rounded-[1.8rem] max-w-sm mx-auto overflow-hidden border border-[#f6e4db]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,223,228,0.35),transparent_35%)] pointer-events-none" />

      <div
        className={`absolute ${leftTapeClass} w-14 h-4 rounded-full bg-pink-200/90 shadow-sm rotate-[-6deg]`}
      />
      <div
        className={`absolute ${rightTapeClass} w-14 h-4 rounded-full bg-pink-200/90 shadow-sm rotate-[6deg]`}
      />

      <div
        className={cn(
          `relative ${imageAspectRatio} w-full overflow-hidden rounded-[1.15rem] border border-white/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45),inset_0_6px_18px_rgba(255,255,255,0.35),0_8px_16px_-12px_rgba(0,0,0,0.16)] bg-[#fdf3eb]`,
          imageFrameClassName,
        )}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Memory"
            className={cn(
              `w-full h-full transition duration-1000 ease-out ${imageFit === "contain" ? "object-contain" : "object-cover"} ${imagePosition === "top" ? "object-top" : imagePosition === "bottom" ? "object-bottom" : "object-center"} scale-[1.02] rounded-[1.1rem]`,
              imageClassName,
            )}
          />
        ) : (
          <div className="absolute inset-0 bg-[#f9f1e8]" />
        )}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_40%)] pointer-events-none" />
      </div>

      <div className="mt-4 px-2 pb-2 text-center">
        {caption && (
          <p className="font-handwriting text-lg text-[#7C5A4F]">{caption}</p>
        )}
      </div>

      <div className="absolute left-4 bottom-6 text-[0.95rem] text-[#D78B8B]/90">
        🌸
      </div>
      <div className="absolute right-5 bottom-6 text-[0.95rem] text-[#F3C1D1]/90">
        ✨
      </div>
      <div className="absolute left-10 top-16 text-[0.85rem] text-[#E8C8D2]/80">
        🦋
      </div>
    </motion.div>
  );
}
