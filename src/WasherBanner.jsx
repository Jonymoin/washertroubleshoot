import { useEffect, useState } from "react";

const STYLES_WT = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;600;800&display=swap');

  @keyframes wt-float {
    0%, 100% { transform: translateY(0px) scale(1); }
    50%       { transform: translateY(-18px) scale(1.06); }
  }
  @keyframes wt-floatUp {
    0%   { transform: translateY(0) scale(1); opacity: 0.7; }
    100% { transform: translateY(-130px) scale(0.4); opacity: 0; }
  }
  @keyframes wt-wiggle {
    0%, 100% { transform: translateY(-50%) rotate(-1.5deg); }
    50%       { transform: translateY(-52%) rotate(1.5deg); }
  }
  @keyframes wt-wiggle-mobile {
    0%, 100% { transform: rotate(-1.5deg); }
    50%       { transform: rotate(1.5deg); }
  }
  @keyframes wt-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes wt-spin-reverse {
    from { transform: rotate(0deg); }
    to   { transform: rotate(-360deg); }
  }
  @keyframes wt-blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.2; }
  }
  @keyframes wt-drip {
    0%   { transform: translateY(-20px); opacity: 0; }
    20%  { opacity: 0.9; }
    100% { transform: translateY(40px); opacity: 0; }
  }
  @keyframes wt-twinkle {
    0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
    50%       { opacity: 0.2; transform: scale(0.6) rotate(20deg); }
  }
  @keyframes wt-pulse-ring {
    0%   { transform: scale(0.8); opacity: 0.8; }
    100% { transform: scale(1.6); opacity: 0; }
  }
  @keyframes wt-slide-in {
    from { opacity: 0; transform: translateX(-20px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .wt-float        { animation: wt-float       6s ease-in-out infinite; }
  .wt-floatUp      { animation: wt-floatUp     4s ease-in-out infinite; }
  .wt-wiggle       { animation: wt-wiggle      3s ease-in-out infinite; }
  .wt-wiggle-mobile{ animation: wt-wiggle-mobile 3s ease-in-out infinite; }
  .wt-spin         { animation: wt-spin        3s linear     infinite; }
  .wt-spin-reverse { animation: wt-spin-reverse 4s linear    infinite; }
  .wt-blink        { animation: wt-blink       1.2s ease-in-out infinite; }
  .wt-drip         { animation: wt-drip        2s ease-in    infinite; }
  .wt-twinkle      { animation: wt-twinkle     2.5s ease-in-out infinite; }
  .wt-pulse-ring   { animation: wt-pulse-ring  1.8s ease-out infinite; }

  .wt-brand-text {
    font-family: 'Bebas Neue', cursive;
    font-size: 64px;
    line-height: 1;
    letter-spacing: 2px;
    background: linear-gradient(135deg, #ffffff 0%, #d9f99d 35%, #a3e635 65%, #65a30d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 2px 12px rgba(163,230,53,0.5));
  }
  .wt-brand-accent {
    background: linear-gradient(135deg, #fde68a 0%, #fbbf24 50%, #f59e0b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .wt-machine-shine::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 40%;
    background: linear-gradient(180deg, rgba(255,255,255,0.12), transparent);
    border-radius: 20px 20px 0 0;
    pointer-events: none;
  }
  .wt-drum::before, .wt-drum::after {
    content: '';
    position: absolute;
    background: rgba(163,230,53,0.2);
    border-radius: 2px;
  }
  .wt-drum::before { width: 3px; height: 60%; top: 20%; left: 50%; }
  .wt-drum::after  { width: 60%; height: 3px; top: 50%; left: 20%; }

  .wt-knob::after {
    content: '';
    width: 3px; height: 8px;
    background: #a3e635;
    position: absolute;
    top: 3px; left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
  .wt-tagline::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 2px;
    background: #a3e635;
    margin-right: 8px;
    flex-shrink: 0;
  }
  .wt-hex-pattern {
    background-image: repeating-linear-gradient(
      60deg,
      rgba(163,230,53,0.03) 0px,
      rgba(163,230,53,0.03) 1px,
      transparent 1px,
      transparent 20px
    ),
    repeating-linear-gradient(
      -60deg,
      rgba(163,230,53,0.03) 0px,
      rgba(163,230,53,0.03) 1px,
      transparent 1px,
      transparent 20px
    );
  }
  .wt-glow-btn {
    position: relative;
    overflow: hidden;
  }
  .wt-glow-btn::before {
    content: '';
    position: absolute;
    top: -50%; left: -60%;
    width: 40%; height: 200%;
    background: rgba(255,255,255,0.25);
    transform: skewX(-20deg);
    transition: left 0.4s;
  }
  .wt-glow-btn:hover::before {
    left: 120%;
  }
`;

// ── sub-components ────────────────────────────────────────────────

function BgBubbles() {
  const bubbles = [
    { size: 200, bg: "radial-gradient(circle, #84cc16, #3f6212)", style: { top: -60, left: -60 },      delay: "0s",   opacity: 0.12 },
    { size: 140, bg: "radial-gradient(circle, #fbbf24, #d97706)", style: { top: 20,  right: 60 },      delay: "1s",   opacity: 0.12 },
    { size: 90,  bg: "radial-gradient(circle, #a3e635, #65a30d)", style: { bottom: 50, left: 120 },    delay: "2s",   opacity: 0.15 },
    { size: 220, bg: "radial-gradient(circle, #166534, #052e16)", style: { bottom: -70, right: -50 },  delay: "0.5s", opacity: 0.20 },
    { size: 70,  bg: "radial-gradient(circle, #d9f99d, #a3e635)", style: { top: 180, left: 60 },       delay: "3s",   opacity: 0.12 },
    { size: 100, bg: "radial-gradient(circle, #ecfccb, #bef264)", style: { top: 80,  left: 320 },      delay: "1.5s", opacity: 0.08 },
    { size: 60,  bg: "radial-gradient(circle, #fde68a, #fbbf24)", style: { top: 30,  left: 480 },      delay: "2.5s", opacity: 0.10 },
  ];
  return (
    <>
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="wt-float absolute rounded-full"
          style={{ width: b.size, height: b.size, background: b.bg, opacity: b.opacity, animationDelay: b.delay, ...b.style }}
        />
      ))}
    </>
  );
}

function SoapBubbles() {
  const sbs = [
    { size: 28, style: { bottom: 24, left: 210 }, delay: "0s"   },
    { size: 18, style: { bottom: 44, left: 240 }, delay: "0.7s" },
    { size: 14, style: { bottom: 32, left: 178 }, delay: "1.5s" },
    { size: 22, style: { bottom: 12, left: 268 }, delay: "2.3s" },
    { size: 32, style: { bottom: 64, left: 195 }, delay: "3.1s" },
  ];
  return (
    <>
      {sbs.map((sb, i) => (
        <div
          key={i}
          className="wt-floatUp absolute rounded-full"
          style={{
            width: sb.size, height: sb.size,
            border: "2px solid rgba(163,230,53,0.35)",
            background: "radial-gradient(circle at 30% 30%, rgba(163,230,53,0.2), rgba(163,230,53,0.03))",
            animationDelay: sb.delay,
            ...sb.style,
          }}
        />
      ))}
    </>
  );
}

function Sparkles() {
  const sparks = [
    { style: { top: 55,  left: 470 },  size: 18, delay: "0s"   },
    { style: { top: 110, right: 290 }, size: 13, delay: "0.8s" },
    { style: { top: 35,  right: 350 }, size: 10, delay: "1.6s" },
    { style: { top: 200, left: 430 },  size: 9,  delay: "2.4s" },
  ];
  return (
    <>
      {sparks.map((sp, i) => (
        <div
          key={i}
          className="wt-twinkle absolute"
          style={{ color: "#a3e635", fontSize: sp.size, animationDelay: sp.delay, ...sp.style }}
        >
          ✦
        </div>
      ))}
    </>
  );
}

// Gear SVG icon
function GearIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.92c.04-.34.07-.69.07-1.08s-.03-.75-.07-1.08l2.32-1.81c.21-.16.27-.44.14-.67l-2.2-3.81a.515.515 0 00-.63-.22l-2.74 1.1c-.57-.44-1.18-.8-1.86-1.08L14 2.42a.506.506 0 00-.5-.42h-4.4c-.25 0-.46.18-.5.42L8.27 5.41c-.68.28-1.3.64-1.86 1.08l-2.74-1.1a.506.506 0 00-.63.22L.84 9.42c-.14.23-.07.51.14.67l2.32 1.81C3.26 12.25 3.23 12.62 3.23 13s.03.75.07 1.08L1 15.9c-.21.16-.27.44-.14.67l2.2 3.81c.13.23.41.31.63.22l2.74-1.1c.57.44 1.18.8 1.86 1.08l.37 2.99c.04.24.25.42.5.42h4.4c.25 0 .46-.18.5-.42l.37-2.99c.68-.28 1.3-.64 1.86-1.08l2.74 1.1c.22.09.5 0 .63-.22l2.2-3.81c.14-.23.07-.51-.14-.67l-2.32-1.81z"/>
    </svg>
  );
}

function WrenchIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
    </svg>
  );
}

function WashingMachine({ isMobile }) {
  return (
    <div
      className={isMobile ? "wt-wiggle-mobile" : "wt-wiggle absolute"}
      style={isMobile
        ? { display: "flex", flexDirection: "column", alignItems: "center" }
        : { right: 55, top: "50%", transform: "translateY(-50%)" }
      }
    >
      {/* Floating gear decorations */}
      {!isMobile && (
        <>
          <div className="wt-spin absolute" style={{ top: -20, right: -10, color: "rgba(163,230,53,0.3)" }}>
            <GearIcon size={38} />
          </div>
          <div className="wt-spin-reverse absolute" style={{ bottom: 10, left: -18, color: "rgba(163,230,53,0.2)" }}>
            <GearIcon size={26} />
          </div>
        </>
      )}

      {/* Machine body */}
      <div
        className="wt-machine-shine relative"
        style={{
          width: 200, height: 220,
          background: "linear-gradient(160deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)",
          borderRadius: "20px 20px 16px 16px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.9), 0 0 40px rgba(132,204,22,0.15)",
          border: "3px solid rgba(163,230,53,0.4)",
        }}
      >
        {/* Top bar — lime gradient */}
        <div
          className="flex items-center justify-end gap-1.5 pr-3.5"
          style={{
            height: 35,
            background: "linear-gradient(90deg, #166534, #15803d, #16a34a)",
            borderRadius: "17px 17px 0 0",
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5252", boxShadow: "0 0 8px #ff5252" }} />
          <div className="wt-blink" style={{ width: 10, height: 10, borderRadius: "50%", background: "#a3e635", boxShadow: "0 0 8px #a3e635" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#fbbf24", boxShadow: "0 0 8px #fbbf24" }} />
        </div>

        {/* Door — lime tinted */}
        <div
          className="absolute overflow-hidden"
          style={{
            width: 130, height: 130,
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #f0fdf4, #86efac 45%, #22c55e 75%, #166534)",
            border: "6px solid #4ade80",
            top: 50, left: "50%",
            transform: "translateX(-50%)",
            boxShadow: "inset 0 4px 10px rgba(0,0,0,0.25), 0 4px 20px rgba(132,204,22,0.3)",
          }}
        >
          <div className="wt-spin wt-drum relative w-full h-full rounded-full" />
        </div>

        {/* Door handle */}
        <div
          className="absolute"
          style={{
            width: 16, height: 16,
            background: "#4ade80",
            borderRadius: "50%",
            right: 12, top: "50%",
            transform: "translateY(-50%)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3), 0 0 8px rgba(74,222,128,0.5)",
          }}
        />

        {/* Knobs */}
        <div className="absolute flex justify-center gap-3" style={{ bottom: 14, left: 0, right: 0 }}>
          {[0, 1, 2].map((k) => (
            <div
              key={k}
              className="wt-knob relative"
              style={{
                width: 28, height: 28,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #22c55e, #166534)",
                border: "2px solid rgba(163,230,53,0.5)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              }}
            />
          ))}
        </div>

        {/* Wrench badge */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            width: 28, height: 28,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
            top: 8, left: 10,
            boxShadow: "0 2px 8px rgba(251,191,36,0.5)",
            color: "white",
          }}
        >
          <WrenchIcon size={14} />
        </div>
      </div>

      {/* Legs */}
      <div className="flex justify-between px-5 mt-1">
        {[0, 1].map((l) => (
          <div key={l} style={{ width: 12, height: 16, background: "#166534", borderRadius: "0 0 4px 4px" }} />
        ))}
      </div>
    </div>
  );
}

function WaterDrops({ isMobile }) {
  const drops = [
    { left: 20,  delay: "0s"   },
    { left: 50,  delay: "0.4s" },
    { left: 80,  delay: "0.8s" },
    { left: 110, delay: "1.2s" },
  ];
  const posStyle = isMobile
    ? { position: "relative", margin: "0 auto", bottom: "auto", right: "auto" }
    : { position: "absolute", bottom: 118, right: 52 };
  return (
    <div className="overflow-visible" style={{ width: 220, height: 30, ...posStyle }}>
      {drops.map((d, i) => (
        <div
          key={i}
          className="wt-drip absolute"
          style={{
            width: 8, height: 12,
            background: "linear-gradient(180deg, #a3e635, #15803d)",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            opacity: 0.85,
            left: d.left,
            animationDelay: d.delay,
          }}
        />
      ))}
    </div>
  );
}

function ServiceChip({ label, dotColor }) {
  return (
    <div
      className="flex items-center gap-1.5 text-white font-bold text-xs"
      style={{
        background: "rgba(163,230,53,0.08)",
        border: "1px solid rgba(163,230,53,0.25)",
        padding: "5px 14px",
        borderRadius: 20,
        letterSpacing: "0.5px",
        backdropFilter: "blur(4px)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: dotColor, flexShrink: 0, display: "inline-block", boxShadow: `0 0 6px ${dotColor}` }} />
      {label}
    </div>
  );
}

// Diagonal stripe accent
function DiagonalAccent() {
  return (
    <div
      className="absolute"
      style={{
        top: 0, right: 0,
        width: 340, height: "100%",
        background: "linear-gradient(135deg, transparent 40%, rgba(132,204,22,0.04) 40%)",
        pointerEvents: "none",
      }}
    />
  );
}

// ── main component ────────────────────────────────────────────────

export default function WasherTroubleshootBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!document.getElementById("wt-styles")) {
      const tag = document.createElement("style");
      tag.id = "wt-styles";
      tag.textContent = STYLES_WT;
      document.head.appendChild(tag);
    }
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const chips = [
    { label: "Diagnose & Fix",  dotColor: "#a3e635" },
    { label: "All Brands",      dotColor: "#fbbf24" },
    { label: "Same Day",        dotColor: "#34d399" },
    { label: "Guaranteed",      dotColor: "#f472b6" },
  ];

  const textContent = (mobile) => (
    <div className={mobile ? "w-full text-center" : ""} style={{ maxWidth: mobile ? "100%" : 460 }}>
      {/* Tagline */}
      <div
        className={`wt-tagline flex items-center font-black uppercase mb-2.5 ${mobile ? "justify-center" : ""}`}
        style={{ fontSize: mobile ? 10 : 12, letterSpacing: 3.5, color: "#a3e635", fontFamily: "'DM Sans', sans-serif" }}
      >
        Expert Washing Machine Repair
      </div>

      {/* Brand */}
      <div className="wt-brand-text mb-2" style={{ fontSize: mobile ? 44 : 64 }}>
        Washer<span className="wt-brand-accent">Troubleshoot</span>
      </div>

      {/* Subtitle */}
      <div
        className="mb-5"
        style={{
          fontSize: mobile ? 12 : 15,
          color: "rgba(255,255,255,0.7)",
          fontWeight: 600,
          letterSpacing: "0.4px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        We Diagnose · We Fix · You Save
      </div>

      {/* Chips */}
      <div className={`flex flex-wrap gap-2 ${mobile ? "justify-center" : ""}`}>
        {chips.map((c) => (
          <ServiceChip key={c.label} label={c.label} dotColor={c.dotColor} />
        ))}
      </div>

      {/* CTA */}
      <div className={`flex items-center gap-4 mt-5 ${mobile ? "flex-col" : ""}`}>
        {/* Pulse ring effect behind button */}
        <div className="relative inline-block">
          <div
            className="wt-pulse-ring absolute inset-0 rounded-full"
            style={{ background: "rgba(163,230,53,0.3)" }}
          />
          <a
            href="https://wa.me/6585301773"
            target="_blank"
            rel="noopener noreferrer"
            className="wt-glow-btn relative flex items-center gap-2 text-white font-black uppercase"
            style={{
              background: "linear-gradient(135deg, #65a30d, #a3e635)",
              fontSize: 13,
              padding: "12px 26px",
              borderRadius: 30,
              letterSpacing: 1.2,
              boxShadow: "0 6px 24px rgba(101,163,13,0.6)",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              display: "inline-flex",
              textDecoration: "none",
              color: "#052e16",
            }}
          >
            {/* WhatsApp icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book a Repair
          </a>
        </div>

        <div style={{ fontSize: mobile ? 12 : 13, color: "rgba(255,255,255,0.65)", fontWeight: 700, letterSpacing: 1, fontFamily: "'DM Sans', sans-serif" }}>
          Call: <span style={{ color: "#a3e635" }}>65 8530 1773</span>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="wt-hex-pattern relative overflow-hidden w-full"
      style={{
        minHeight: isMobile ? "auto" : 500,
        background: "linear-gradient(135deg, #052e16 0%, #14532d 35%, #166534 65%, #15803d 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <BgBubbles />
      <DiagonalAccent />
      <Sparkles />

      {isMobile ? (
        /* ── MOBILE ── */
        <div className="relative z-10 flex flex-col items-center px-6 py-10 gap-8">
          {textContent(true)}
          <div className="flex flex-col items-center">
            <WashingMachine isMobile={true} />
            <WaterDrops isMobile={true} />
          </div>
        </div>
      ) : (
        /* ── DESKTOP ── */
        <div style={{ height: 500 }}>
          <div className="absolute" style={{ left: 55, top: "50%", transform: "translateY(-50%)" }}>
            {textContent(false)}
          </div>
          <WashingMachine isMobile={false} />
          <WaterDrops isMobile={false} />
        </div>
      )}

      <SoapBubbles />

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: 90, background: "linear-gradient(180deg, transparent, rgba(101,163,13,0.1))" }}
      />
    </div>
  );
}