import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:4000";

const POKEMONS = [
  { path: "/pikachu", color: "from-yellow-300 to-yellow-500" },
  { path: "/charizard", color: "from-orange-400 to-red-500" },
  { path: "/bulbasaur", color: "from-green-400 to-emerald-600" },
  { path: "/squirtle", color: "from-blue-400 to-cyan-500" },
  { path: "/mewtwo", color: "from-purple-400 to-indigo-600" },
];

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    POKEMONS.forEach(({ path }) => {
      fetch(BASE_URL + path)
        .then((r) => r.text())
        .then((text) =>
          setData((p) => ({ ...p, [path]: text }))
        )
        .catch(() =>
          setData((p) => ({ ...p, [path]: "Error" }))
        );
    });
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      
      {/* Container */}
      <div className="w-full max-w-lg mx-auto bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-6 space-y-4">

        {/* Title */}
        <h1 className="text-center text-base font-semibold text-white/70 tracking-wide">
          ⚡ Pokémon Feed
        </h1>

        {/* Cards */}
        {POKEMONS.map(({ path, color }) => {
          const s = data[path];

          return (
            <div
              key={path}
              className={`rounded-2xl p-[1.5px] bg-gradient-to-r ${color}`}
            >
              <div className="bg-black/80 rounded-2xl px-4 py-3 flex items-center justify-between gap-3">

                {/* Name */}
                <span className="text-sm capitalize text-white/60 min-w-[100px]">
                  {path.replace("/", "")}
                </span>

                {/* Response */}
                <span className="text-sm font-medium text-white truncate flex-1 text-right">
                  {!s ? "Loading...." : s}
                </span>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}