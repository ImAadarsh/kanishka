import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

const NO_PHRASES = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Have a heart!",
  "Don't be so cold!",
  "Change of heart?",
  "Wouldn't you reconsider?",
  "Is that your final answer?",
  "You're breaking my heart ;(",
  "Plsss? :( You're breaking my heart",
];

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => setNoCount((c) => c + 1);
  const noButtonText = NO_PHRASES[Math.min(noCount, NO_PHRASES.length - 1)];

  return (
    <div className="relative z-10 overflow-x-hidden overflow-y-auto flex flex-col items-center justify-center min-h-screen py-8 px-4 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <YesScreen />
      ) : (
        <AskScreen
          noButtonText={noButtonText}
          yesButtonSize={yesButtonSize}
          onYes={() => setYesPressed(true)}
          onNo={handleNoClick}
          lovesvg={lovesvg}
          lovesvg2={lovesvg2}
        />
      )}
    </div>
  );
}

function AskScreen({ noButtonText, yesButtonSize, onYes, onNo, lovesvg, lovesvg2 }) {
  return (
    <>
      <img
        src={lovesvg}
        className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28 pointer-events-none"
        alt=""
      />
      <img
        src={lovesvg2}
        className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32 pointer-events-none"
        alt=""
      />

      <p className="text-rose-600/90 text-sm md:text-base font-medium mb-1 tracking-wide">
        From Aadarsh → To Kanishka
      </p>
      <p className="text-zinc-600 text-xs md:text-sm mb-4">
        One Bhopali heart to another 💕
      </p>

      <img
        className="h-[200px] w-[200px] md:h-[260px] md:w-[260px] rounded-2xl shadow-xl object-cover ring-2 ring-rose-200/80"
        src="/kanishka_image.png"
        alt="Kanishka"
      />

      <p className="text-zinc-600 mt-4 max-w-md text-center text-sm md:text-base leading-relaxed">
        Kanishka, you make every day brighter. Your smile, your laugh, and the way you are—I wouldn’t trade it for anything. Will you be my Valentine?
      </p>

      <h1 className="text-3xl md:text-5xl my-6 text-center font-bold text-zinc-800">
        Will you be my Valentine?
      </h1>

      <div className="flex flex-wrap justify-center gap-3 items-center">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-xl transition-all shadow-lg hover:shadow-green-500/30"
          style={{ fontSize: yesButtonSize }}
          onClick={onYes}
        >
          Yes
        </button>
        <button
          onClick={onNo}
          className="bg-rose-500 hover:bg-rose-600 rounded-xl text-white font-bold py-2 px-5 transition-all shadow-lg hover:shadow-rose-500/30"
        >
          {noButtonText}
        </button>
      </div>
    </>
  );
}

function YesScreen() {
  return (
    <div className="flex flex-col items-center text-center max-w-lg mx-auto">
      <img
        src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
        alt="Celebration"
        className="rounded-xl mb-4"
      />
      <h2 className="text-3xl md:text-5xl font-bold text-zinc-800 mb-2">
        Ok Yayyyyy!!!
      </h2>
      <p className="text-zinc-600 mb-8 text-base md:text-lg">
        You just made my day, Kanishka. Thank you for being you. 💕
      </p>

      <section className="w-full text-left bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-rose-100">
        <h3 className="text-xl font-bold text-rose-700 mb-4">
          Little things I love about you
        </h3>
        <ul className="space-y-3 text-zinc-700 text-sm md:text-base">
          <li className="flex items-start gap-2">
            <span className="text-rose-400">🍓</span>
            <span>You eat so many strawberries—it’s one of the cutest things about you.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">🎵</span>
            <span>
              Your songs: <em>Dil ka jo haal</em>, <em>Sita Raman</em>, <em>Labour</em>, <em>Young and Beautiful</em>—they’re always on repeat because they remind me of you.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">💻</span>
            <span>You’re doing Cyber Security—smart, driven, and so cool.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400">🌹</span>
            <span>You’re kind, genuine, and you make every moment better. I’m so grateful for you, Kanishka.</span>
          </li>
        </ul>
      </section>

      <p className="mt-8 text-zinc-500 text-sm">
        From Aadarsh, with love — for my favourite Bhopali 💕
      </p>
    </div>
  );
}
