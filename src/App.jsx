import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
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

export default function App() {
  return (
    <div className="min-h-screen bg-rose-50 text-zinc-900 selection:bg-rose-600 selection:text-white font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fix-a-date" element={<DatePlanner />} />
        <Route path="/date/:id" element={<DateCountdown />} />
      </Routes>
    </div>
  );
}

function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const navigate = useNavigate();
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => setNoCount((c) => c + 1);
  const noButtonText = NO_PHRASES[Math.min(noCount, NO_PHRASES.length - 1)];

  return (
    <div className="relative z-10 overflow-x-hidden overflow-y-auto flex flex-col items-center justify-center min-h-screen py-8 px-4">
      {yesPressed ? (
        <YesScreen onPlanClick={() => navigate("/fix-a-date")} />
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
        className="h-[200px] w-[200px] md:h-[260px] md:w-[260px] rounded-2xl shadow-xl object-cover ring-4 ring-rose-200/80 hover:scale-105 transition-transform duration-300"
        src="/kanishka_image.png"
        alt="Kanishka"
      />

      <p className="text-zinc-600 mt-4 max-w-md text-center text-sm md:text-base leading-relaxed font-serif italic">
        "Kanishka, you make every day brighter. Your smile, your laugh, and the way you are—I wouldn’t trade it for anything. Will you be my Valentine?"
      </p>

      <h1 className="text-3xl md:text-5xl my-6 text-center font-bold text-rose-600 drop-shadow-sm">
        Will you be my Valentine?
      </h1>

      <div className="flex flex-wrap justify-center gap-3 items-center">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-xl transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1"
          style={{ fontSize: yesButtonSize }}
          onClick={onYes}
        >
          Yes
        </button>
        <button
          onClick={onNo}
          className="bg-rose-500 hover:bg-rose-600 rounded-xl text-white font-bold py-2 px-5 transition-all shadow-lg hover:shadow-rose-500/30 transform hover:-translate-y-1"
        >
          {noButtonText}
        </button>
      </div>
    </>
  );
}

function YesScreen({ onPlanClick }) {
  return (
    <div className="flex flex-col items-center text-center max-w-lg mx-auto w-full">
      <img
        src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
        alt="Celebration"
        className="rounded-xl mb-4 w-full max-w-xs shadow-lg"
      />
      <h2 className="text-3xl md:text-5xl font-bold text-rose-600 mb-2 drop-shadow-sm">
        Ok Yayyyyy!!!
      </h2>
      <p className="text-zinc-600 mb-8 text-base md:text-lg font-serif">
        You just made my day, Kanishka. Thank you for being you. 💕
      </p>

      <section className="w-full text-left bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-rose-100 mb-8">
        <h3 className="text-xl font-bold text-rose-700 mb-4 border-b border-rose-100 pb-2">
          Little things I love about you
        </h3>
        <ul className="space-y-3 text-zinc-700 text-sm md:text-base">
          <li className="flex items-start gap-2">
            <span className="text-rose-400 text-xl">🍓</span>
            <span>You eat so many strawberries—it’s one of the cutest things about you.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400 text-xl">🎵</span>
            <span>
              Your songs: <em>Dil ka jo haal</em>, <em>Sita Raman</em>, <em>Labour</em>, <em>Young and Beautiful</em>—they’re always on repeat because they remind me of you.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400 text-xl">💻</span>
            <span>You’re doing Cyber Security—smart, driven, and so cool.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400 text-xl">🌹</span>
            <span>You’re kind, genuine, and you make every moment better. I’m so grateful for you, Kanishka.</span>
          </li>
        </ul>
      </section>

      <button
        onClick={onPlanClick}
        className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-xl hover:shadow-rose-600/40 transition-all transform hover:-translate-y-1 animate-bounce"
      >
        Let's Plan Our Date! 📅
      </button>

      <p className="mt-8 text-zinc-400 text-sm italic">
        From Aadarsh, with love — for my favourite Bhopali 💕
      </p>
    </div>
  );
}

function DatePlanner() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const options = [
    {
      id: 1,
      label: "Sunrise Ride to Nandi Hills 🌄",
      image: "/IMG_3390.jpg",
      desc: "Just you, me, the open road, and a beautiful sunrise above the clouds. Pure magic.",
    },
    {
      id: 2,
      label: "Romantic Candlelit Dinner 🍷",
      image: "/IMG_3392.jpg",
      desc: "Good food, dim lights, and the best company in the world. A eve to remember.",
    },
    {
      id: 3,
      label: "Cozy Coffee Date ☕",
      image: "/IMG_3393.jpg",
      desc: "Warm lattes, sweet conversations, and endless laughter. My favorite kind of day.",
    },
    {
      id: 4,
      label: "PS5 & Chill Eve 🎮",
      image: "/IMG_3394.jpg",
      desc: "Gaming, snacks, and Jokes. Let's see who wins (spoiler: I'll let you win).",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedOption && date && time && mobile) {
      try {
        const selectedActivity = options.find((o) => o.id === selectedOption);
        const response = await fetch("/api/save-date", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            activityId: selectedOption,
            activityLabel: selectedActivity.label,
            date,
            time,
            mobile,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          // The API now returns a slug as 'id'
          navigate(`/date/${data.id}`);
        } else {
          alert("Something went wrong, but I still love you! Try again?");
        }
      } catch (error) {
        console.error("Error saving date:", error);
        alert("Could not connect to the love server! 😢");
      }
    }
  };

  return (
    <div className="min-h-screen bg-rose-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-rose-600 mb-4 font-serif drop-shadow-sm">
            Let's Make a Memory 🌹
          </h1>
          <p className="text-zinc-600 text-lg md:text-xl italic max-w-2xl mx-auto leading-relaxed">
            "Every moment with you is a treasure. Pick something special for us, I promise to make it perfect."
          </p>
          <div className="flex justify-center gap-2 mt-4 text-2xl animate-pulse">
            ❤️✨🍷🕯️
          </div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {options.map((option) => (
              <div
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`
                  relative cursor-pointer group rounded-3xl overflow-hidden shadow-xl
                  transition-all duration-500 transform
                  ${selectedOption === option.id ? "ring-4 ring-rose-500 scale-[1.02] shadow-rose-300" : "hover:shadow-2xl hover:-translate-y-2"}
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300" />

                <img
                  src={option.image}
                  alt={option.label}
                  className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2 font-serif tracking-wide">{option.label}</h3>
                  <p className="text-rose-100 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-medium">
                    {option.desc}
                  </p>
                  {selectedOption === option.id && (
                    <div className="absolute top-4 right-4 bg-white text-rose-600 rounded-full p-2 shadow-lg animate-bounce">
                      ✅ Selected
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <section className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-rose-100 max-w-2xl mx-auto transform transition-all hover:shadow-rose-200">
            <h3 className="text-2xl font-bold text-rose-700 mb-6 text-center font-serif">
              Finalize Our Date ✨
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label className="text-sm font-bold text-zinc-600 pl-1 uppercase tracking-wider group-hover:text-rose-500 transition-colors">
                    When are we going? 📅
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-4 rounded-xl border-2 border-rose-100 bg-rose-50/50 focus:border-rose-400 focus:ring-4 focus:ring-rose-100 transition-all outline-none text-zinc-700 font-medium"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-sm font-bold text-zinc-600 pl-1 uppercase tracking-wider group-hover:text-rose-500 transition-colors">
                    What time? ⏰
                  </label>
                  <input
                    type="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full p-4 rounded-xl border-2 border-rose-100 bg-rose-50/50 focus:border-rose-400 focus:ring-4 focus:ring-rose-100 transition-all outline-none text-zinc-700 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-sm font-bold text-zinc-600 pl-1 uppercase tracking-wider group-hover:text-rose-500 transition-colors">
                  Your number (so I can call you) 📱
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full p-4 rounded-xl border-2 border-rose-100 bg-rose-50/50 focus:border-rose-400 focus:ring-4 focus:ring-rose-100 transition-all outline-none text-zinc-700 font-medium placeholder-rose-300"
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={!selectedOption || !date || !time || !mobile}
                  className={`
                    w-full py-4 rounded-2xl font-bold text-xl shadow-xl transition-all duration-300 transform
                    ${selectedOption && date && time && mobile
                      ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 hover:-translate-y-1 hover:shadow-rose-400/50"
                      : "bg-zinc-200 text-zinc-400 cursor-not-allowed"
                    }
                  `}
                >
                  {selectedOption && date && time && mobile ? "Make It Happen! 💖" : "Pick a date first... 💕"}
                </button>
              </div>
            </div>
          </section>
        </form>

        <footer className="text-center mt-12 text-zinc-400 text-sm">
          <p>Made with all my love, for Kanishka.</p>
        </footer>
      </div>
    </div>
  );
}

function DateCountdown() {
  const { id } = useParams();
  const [datePlan, setDatePlan] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch(`/api/date?id=${id}`)
      .then((res) => res.json())
      .then((data) => setDatePlan(data))
      .catch((err) => console.error("Error fetching date:", err));
  }, [id]);

  useEffect(() => {
    if (!datePlan) return;

    const timer = setInterval(() => {
      const eventTime = new Date(`${datePlan.date_planned.split('T')[0]}T${datePlan.time_planned}`).getTime();
      const now = new Date().getTime();
      const difference = eventTime - now;

      if (difference <= 0) {
        setTimeLeft("IT'S TIME! ❤️");
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [datePlan]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!datePlan) return <div className="min-h-screen flex items-center justify-center text-rose-500">Loading love...</div>;

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-rose-200 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 2 + 1}rem`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-2xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-rose-600 mb-8 font-serif drop-shadow-sm">
          A Date with Aadarsh 🌹
        </h1>

        {/* Big Heart Timer */}
        <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-8 group">
          <svg
            viewBox="0 0 24 24"
            className="absolute inset-0 w-full h-full text-rose-500 fill-current animate-pulse-slow drop-shadow-2xl"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="relative z-20 text-white text-center">
            <p className="text-lg font-medium mb-1 opacity-90">Count down to</p>
            <p className="text-2xl md:text-3xl font-bold mb-2">{datePlan.activity_label}</p>
            <div className="text-3xl md:text-4xl font-black tracking-wider font-mono bg-black/20 rounded-xl px-4 py-2 backdrop-blur-sm">
              {timeLeft}
            </div>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-zinc-700 italic font-serif mb-8 animate-fade-in">
          "This timer brings us one second closer to our perfect moment. I can't wait."
        </p>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-rose-100 inline-block w-full max-w-md">
          <p className="text-zinc-600 mb-4">Share this with me so we can count down together! 💕</p>
          <button
            onClick={handleCopyLink}
            className={`
              w-full py-3 px-6 rounded-xl font-bold text-lg transition-all transform flex items-center justify-center gap-2
              ${copied ? "bg-green-500 text-white scale-95" : "bg-rose-500 hover:bg-rose-600 text-white hover:-translate-y-1 shadow-lg shadow-rose-500/30"}
            `}
          >
            {copied ? (
              <>Link Copied! ✅</>
            ) : (
              <>Copy Link to Save the Date 🔗</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
