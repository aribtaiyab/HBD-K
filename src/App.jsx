import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Chapter1 from "./components/Chapter1";
import Chapter2 from "./components/Chapter2";
import Chapter3 from "./components/Chapter3";
import Chapter4 from "./components/Chapter4";
import Chapter5 from "./components/Chapter5";
import Chapter5b from "./components/Chapter5b";
import Chapter6 from "./components/Chapter6";
import Chapter7 from "./components/Chapter7";
import FinalChapter from "./components/FinalChapter";
import SecretEnding from "./components/SecretEnding";
import MusicWidget from "./components/MusicWidget";

function App() {
  const [currentChapter, setCurrentChapter] = useState(-1); // -1 is loading
  const isChapter4 = currentChapter === 3;

  const handleNext = () => {
    setCurrentChapter((prev) => prev + 1);
  };

  const handleReplay = () => {
    setCurrentChapter(9); // Go to Secret Ending
  };

  const handleRestartJourney = () => {
    setCurrentChapter(0); // Go back to beginning
  };

  return (
    <div
      className={`w-full h-[100dvh] bg-cream-white flex justify-center ${isChapter4 ? "overflow-visible" : "overflow-hidden"}`}
    >
      {/* Mobile container constraint to ensure the "premium app" feel on desktop too */}
      <div
        className={`w-full max-w-md h-full relative shadow-2xl bg-white ${isChapter4 ? "overflow-visible" : "overflow-hidden"}`}
      >
        <MusicWidget />
        <AnimatePresence mode="wait">
          {currentChapter === -1 && (
            <LoadingScreen key="loading" onComplete={handleNext} />
          )}
          {currentChapter === 0 && (
            <Chapter1 key="chapter1" onNext={handleNext} />
          )}
          {currentChapter === 1 && (
            <Chapter2 key="chapter2" onNext={handleNext} />
          )}
          {currentChapter === 2 && (
            <Chapter3 key="chapter3" onNext={handleNext} />
          )}
          {currentChapter === 3 && (
            <Chapter4 key="chapter4" onNext={handleNext} />
          )}
          {currentChapter === 4 && (
            <Chapter5 key="chapter5" onNext={handleNext} />
          )}
          {currentChapter === 5 && (
            <Chapter5b key="chapter5b" onNext={handleNext} />
          )}
          {currentChapter === 6 && (
            <Chapter6 key="chapter6" onNext={handleNext} />
          )}
          {currentChapter === 7 && (
            <Chapter7 key="chapter7" onNext={handleNext} />
          )}
          {currentChapter === 8 && (
            <FinalChapter key="final" onReplay={handleReplay} />
          )}
          {currentChapter === 9 && (
            <SecretEnding key="secret" onReplay={handleRestartJourney} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
