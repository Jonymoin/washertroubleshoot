import React from "react";

const ServiceChip = ({ label, dotColor }) => (
  <div className="flex items-center gap-1.5 text-white font-bold text-[10px] sm:text-xs bg-white/10 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm tracking-wide">
    <span
      className="w-1.5 h-1.5 rounded-full shrink-0"
      style={{ backgroundColor: dotColor }}
    />
    {label}
  </div>
);

export default function WasherBanner() {
  const chips = [
    { label: "All Brands", dotColor: "#f87171" },
    { label: "Same Day Fix", dotColor: "#34d399" },
    { label: "Warranty", dotColor: "#facc15" },
    { label: "24/7 Support", dotColor: "#f472b6" },
  ];

  return (
    <div className="relative overflow-hidden w-full min-h-[500px] sm:min-h-[550px] bg-gradient-to-br from-[#1a0533] via-[#2d1b69] to-[#11998e] flex flex-col items-center justify-center font-sans">
      
      {/* BG blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-48 h-48 bg-violet-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-700" />
        <span className="absolute top-20 left-1/4 text-violet-300 animate-ping opacity-30 text-xl">✦</span>
        <span className="absolute bottom-40 right-1/3 text-emerald-300 animate-ping opacity-20 text-lg delay-300">✦</span>
      </div>

      <div className="relative z-10 max-w-6xl w-full px-6 flex flex-col md:flex-row items-center justify-between gap-12 py-12">

        {/* LEFT */}
        <div className="text-center md:text-left flex flex-col gap-4 max-w-xl">
          
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="h-0.5 w-8 bg-emerald-400" />
            <span className="text-emerald-400 font-black uppercase text-[11px] tracking-[0.3em]">
              Professional Repair Service
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter leading-none">
            <span className="text-white drop-shadow-md">Washer</span>
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Troubleshoot
            </span>
          </h1>

          <p className="text-white/70 text-sm sm:text-lg font-medium tracking-wide">
            Fast · Reliable · Affordable Washing Machine Repair
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 py-2">
            {chips.map((c) => (
              <ServiceChip key={c.label} {...c} />
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a
              href="https://wa.me/6584130016"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-black uppercase px-8 py-3.5 rounded-full text-sm tracking-widest shadow-lg shadow-violet-500/30 hover:scale-105 transition-transform text-center no-underline"
            >
              Book a Repair
            </a>

            <div className="text-white/80 font-bold text-sm tracking-widest">
              CALL: <span className="text-emerald-400">65 8413 0016</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex-shrink-0">

          {/* Machine */}
          <div className="w-52 h-60 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-purple-100 rounded-[2.5rem] border-4 border-fuchsia-300/60 shadow-2xl relative overflow-hidden">

            {/* Top */}
            <div className="h-10 bg-gradient-to-r from-violet-800 to-fuchsia-700 flex items-center justify-end gap-1.5 px-4">
              <div className="w-2 h-2 bg-red-400 rounded-full" />
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            </div>

            {/* Door */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-[6px] border-fuchsia-400 bg-gradient-to-tr from-violet-700 via-fuchsia-500 to-pink-300 shadow-inner flex items-center justify-center">
              <div className="w-full h-full rounded-full opacity-20 relative animate-spin [animation-duration:3s]">
                <div className="absolute top-0 left-1/2 w-1 h-full bg-white/60" />
                <div className="absolute left-0 top-1/2 w-full h-1 bg-white/60" />
              </div>
            </div>

            {/* Knobs */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-700 border-2 border-white/30 shadow-md"
                />
              ))}
            </div>
          </div>

          {/* Legs */}
          <div className="flex justify-between px-10">
            <div className="w-3 h-4 bg-violet-900 rounded-b-md" />
            <div className="w-3 h-4 bg-violet-900 rounded-b-md" />
          </div>

          {/* Drip */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
            <div className="w-1.5 h-3 bg-fuchsia-400 rounded-full animate-bounce [animation-delay:.1s]" />
            <div className="w-1.5 h-3 bg-violet-400 rounded-full animate-bounce [animation-delay:.3s]" />
            <div className="w-1.5 h-3 bg-pink-300 rounded-full animate-bounce [animation-delay:.5s]" />
          </div>
        </div>
      </div>

      {/* Bubbles */}
      <div className="absolute bottom-10 left-20 w-4 h-4 rounded-full border border-white/20 animate-pulse" />
      <div className="absolute top-20 right-40 w-6 h-6 rounded-full border border-white/10 animate-ping delay-500" />

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none" />
    </div>
  );
}