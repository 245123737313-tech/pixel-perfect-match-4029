import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Layers,
  Maximize2,
  Monitor,
  MoveUpRight,
  Pause,
  Play,
  RotateCcw,
  Search,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                               EFFECT 01: BUTTON → PLAYER                   */
/* -------------------------------------------------------------------------- */

function EffectButtonToPlayer({ time }: { time: number }) {
  // Phase calculations for 8-second loop
  // 0.0 - 2.2s: Stretches into player
  // 2.2 - 6.6s: Hold & scrub
  // 6.6 - 8.0s: Return home
  const progress =
    time <= 2.2
      ? time / 2.2
      : time <= 6.6
      ? 1
      : 1 - (time - 6.6) / 1.4;

  const isPlaying = time >= 2.6 && time <= 6.6;
  const scrubPercent = time >= 2.2 && time <= 6.6 ? ((time - 2.2) / 4.4) * 100 : 0;
  const currentSeconds = Math.floor(time * 5);

  return (
    <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-[#090a0f] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
      {/* Background technical grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Ghost outline showing where button originated */}
      <div className="absolute top-6 left-6 w-[124px] h-[40px] rounded-full border border-dashed border-white/20 pointer-events-none flex items-center px-4 gap-2 opacity-50">
        <span className="w-2 h-2 rounded-full bg-white/20" />
        <span className="text-[11px] font-mono text-white/30 uppercase tracking-wider">Origin</span>
      </div>

      {/* Top Header metadata */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-[#F26522]/20 text-[#F26522] border border-[#F26522]/30">
            01 INTERFACES
          </span>
          <span className="text-xs text-white/60 font-mono">Button → Player Morph</span>
        </div>
        <div className="text-[11px] font-mono text-white/40">
          t: {time.toFixed(2)}s · Phase: {time < 2.2 ? "Move" : time < 6.6 ? "Hold" : "Return"}
        </div>
      </div>

      {/* Morphing Canvas Container */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-4">
        <div
          style={{
            width: `${124 + progress * 240}px`,
            height: `${40 + progress * 160}px`,
            borderRadius: `${20 - progress * 8}px`,
            backgroundColor: progress > 0.5 ? "rgba(30, 41, 59, 0.9)" : "#F26522",
            border: progress > 0.5 ? "1px solid rgba(255, 255, 255, 0.15)" : "none",
            transform: `translate(${progress * 10}px, ${progress * 5}px)`,
          }}
          className="relative transition-all duration-75 ease-out shadow-xl overflow-hidden flex flex-col justify-between p-3"
        >
          {/* Initial Button Label (fades out in first quarter) */}
          <div
            style={{ opacity: Math.max(0, 1 - progress * 3) }}
            className="absolute inset-0 flex items-center justify-center gap-2 text-white text-xs font-semibold px-4 whitespace-nowrap pointer-events-none"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Watch Demo</span>
          </div>

          {/* Expanded Player Content (fades in past half progress) */}
          <div
            style={{ opacity: Math.max(0, (progress - 0.4) * 2) }}
            className="flex-1 flex flex-col justify-between text-white"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono text-white/50 uppercase">Matrix Root Sprint 04</p>
                <h4 className="text-sm font-semibold text-white">Cloud Architecture Deployment</h4>
              </div>
              <span className="text-[11px] font-mono text-[#F26522] bg-[#F26522]/15 px-2 py-0.5 rounded">
                LIVE
              </span>
            </div>

            {/* Central Play/Pause Morph Icon */}
            <div className="self-center my-auto flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-white">
              {isPlaying ? (
                <Pause className="w-4 h-4 text-white fill-current animate-pulse" />
              ) : (
                <Play className="w-4 h-4 text-white fill-current ml-0.5" />
              )}
            </div>

            {/* Player Timeline Bar & Counter */}
            <div className="space-y-1.5 pt-2 border-t border-white/10">
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden relative">
                <div
                  style={{ width: `${Math.min(100, Math.max(0, scrubPercent))}%` }}
                  className="h-full bg-[#F26522] rounded-full transition-all duration-75"
                />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-white/60">
                <span>0:{String(currentSeconds).padStart(2, "0")}</span>
                <span>0:42</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom status */}
      <div className="relative z-10 flex items-center justify-between text-xs text-white/50 border-t border-white/10 pt-3">
        <span>Shared element transition · No crossfade</span>
        <span className="font-mono text-[10px] text-white/40">Recipe 01 · 8s Cycle</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               EFFECT 05: CHART MORPH                       */
/* -------------------------------------------------------------------------- */

function EffectChartMorph({ time }: { time: number }) {
  const values = [34, 62, 51, 88, 74, 95];

  // 0.0 to 2.2s: Bars morph into smooth line
  const morph =
    time <= 2.2
      ? time / 2.2
      : time <= 6.6
      ? 1
      : 1 - (time - 6.6) / 1.4;

  const barWidth = 32 * (1 - morph * 0.85); // 32px down to 5px hairline
  const pathD = "M 20 160 Q 60 90, 100 115 T 180 40 T 260 70 T 340 15";

  return (
    <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-[#090a0f] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-[#F26522]/20 text-[#F26522] border border-[#F26522]/30">
            05 DATA
          </span>
          <span className="text-xs text-white/60 font-mono">Bar Chart → Spline Morph</span>
        </div>
        <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded">
          real metrics
        </span>
      </div>

      {/* SVG Canvas for Chart */}
      <div className="relative z-10 flex-1 flex items-end justify-between px-4 py-6">
        {/* Horizontal gridlines */}
        <div className="absolute inset-x-6 top-16 h-[1px] bg-white/5 border-dashed" />
        <div className="absolute inset-x-6 top-32 h-[1px] bg-white/5 border-dashed" />
        <div className="absolute inset-x-6 top-48 h-[1px] bg-white/5 border-dashed" />

        {/* 6 Velocity Bars */}
        <div className="w-full flex items-end justify-between z-10 px-4">
          {values.map((val, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                style={{
                  height: `${val * 1.6}px`,
                  width: `${barWidth}px`,
                  backgroundColor:
                    i === values.length - 1
                      ? "#F26522"
                      : morph > 0.5
                      ? "rgba(255, 255, 255, 0.4)"
                      : "rgba(255, 255, 255, 0.2)",
                }}
                className="rounded-t-sm transition-all duration-75"
              />
              <span className="text-[10px] font-mono text-white/40">W0{i + 1}</span>
            </div>
          ))}
        </div>

        {/* Morphing Line Overlay */}
        <svg
          style={{ opacity: morph }}
          className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-150"
        >
          <path
            d={pathD}
            fill="none"
            stroke="#F26522"
            strokeWidth="3"
            strokeDasharray="400"
            strokeDashoffset={`${(1 - morph) * 400}`}
            className="transition-all duration-75"
          />
        </svg>

        {/* Value Tag on last point */}
        {morph > 0.6 && (
          <div
            style={{ opacity: (morph - 0.6) / 0.4 }}
            className="absolute top-10 right-8 bg-[#F26522] text-white px-2 py-1 rounded text-xs font-mono font-bold shadow-lg"
          >
            95% SLA
          </div>
        )}
      </div>

      <div className="relative z-10 flex items-center justify-between text-xs text-white/50 border-t border-white/10 pt-3">
        <span>Zero value distortion · Values locked</span>
        <span className="font-mono text-[10px] text-white/40">Recipe 05 · 8s Cycle</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                       EFFECT 13: 3D PERSPECTIVE SHIFT                      */
/* -------------------------------------------------------------------------- */

function EffectPerspectiveShift({ time }: { time: number }) {
  // 0.0 - 2.2s: Layers pull apart in 3D
  const expand =
    time <= 2.2
      ? time / 2.2
      : time <= 6.6
      ? 1
      : 1 - (time - 6.6) / 1.4;

  const tiltY = -24 * expand;
  const tiltX = 14 * expand;

  return (
    <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-[#090a0f] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-[#F26522]/20 text-[#F26522] border border-[#F26522]/30">
            13 SYSTEMS
          </span>
          <span className="text-xs text-white/60 font-mono">3D Architectural Stack</span>
        </div>
        <span className="text-[10px] font-mono text-white/40">
          z-depth: {(expand * 100).toFixed(0)}px
        </span>
      </div>

      {/* 3D Perspective Stage */}
      <div
        style={{ perspective: "1000px" }}
        className="relative z-10 flex-1 flex items-center justify-center"
      >
        <div
          style={{
            transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg) rotateZ(${expand * 4}deg)`,
            transformStyle: "preserve-3d",
          }}
          className="relative w-[240px] h-[130px] transition-transform duration-75"
        >
          {/* Layer 1: Database & Cloud Infrastructure (Back) */}
          <div
            style={{
              transform: `translateZ(${-60 * expand}px)`,
            }}
            className="absolute inset-0 rounded-xl bg-slate-900/90 border border-slate-700/80 p-3 shadow-xl flex flex-col justify-between"
          >
            <div className="flex items-center justify-between text-[11px] text-slate-300 font-mono">
              <span className="flex items-center gap-1">
                <Database className="w-3.5 h-3.5 text-blue-400" /> PostgreSQL & Cloud
              </span>
              <span className="text-emerald-400">99.9%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-blue-500 rounded-full" />
            </div>
          </div>

          {/* Layer 2: Core API & Microservices (Middle) */}
          <div
            style={{
              transform: `translateZ(${0 * expand}px)`,
            }}
            className="absolute inset-0 rounded-xl bg-slate-800/95 border border-[#F26522]/40 p-3 shadow-xl flex flex-col justify-between"
          >
            <div className="flex items-center justify-between text-[11px] text-white font-mono">
              <span className="flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-[#F26522]" /> API Engine & Sprints
              </span>
              <span className="text-[#F26522]">Node.js</span>
            </div>
            <p className="text-[10px] text-white/60 font-mono">REST / GraphQL / Auth / Workers</p>
          </div>

          {/* Layer 3: Presentation UI & TanStack (Front) */}
          <div
            style={{
              transform: `translateZ(${60 * expand}px)`,
            }}
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/95 to-slate-100/90 border border-white p-3 shadow-2xl flex flex-col justify-between text-gray-900"
          >
            <div className="flex items-center justify-between text-[11px] font-bold">
              <span className="flex items-center gap-1">
                <Code2 className="w-3.5 h-3.5 text-[#F26522]" /> Frontend Layer
              </span>
              <span className="text-[9px] bg-gray-900 text-white px-1.5 py-0.5 rounded">
                React 19
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-gray-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Pixel-perfect high performance</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-xs text-white/50 border-t border-white/10 pt-3">
        <span>Shared vanishing point · Physical depth</span>
        <span className="font-mono text-[10px] text-white/40">Recipe 13 · 8s Cycle</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                        EFFECT 15: FLOWING PATHS PIPELINE                   */
/* -------------------------------------------------------------------------- */

function EffectFlowingPaths({ time }: { time: number }) {
  // Wave phase across 8 seconds
  const wave = (time % 4) / 4;
  const pulseX = 20 + wave * 320;

  return (
    <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-[#090a0f] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-[#F26522]/20 text-[#F26522] border border-[#F26522]/30">
            15 NETWORKS
          </span>
          <span className="text-xs text-white/60 font-mono">Flowing Paths & Signal Delivery</span>
        </div>
        <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" /> Synchronous
        </span>
      </div>

      {/* Pipeline Diagram */}
      <div className="relative z-10 flex-1 flex items-center justify-between px-2">
        {/* Step 1 Node */}
        <div className="flex flex-col items-center gap-2 z-10">
          <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#F26522] shadow-lg">
            <Search className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-mono text-white/80">01 Discovery</span>
        </div>

        {/* Step 2 Node */}
        <div className="flex flex-col items-center gap-2 z-10">
          <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-lg">
            <Boxes className="w-5 h-5 text-[#F26522]" />
          </div>
          <span className="text-[11px] font-mono text-white/80">02 Sprints</span>
        </div>

        {/* Step 3 Node */}
        <div className="flex flex-col items-center gap-2 z-10">
          <div className="w-12 h-12 rounded-xl bg-[#F26522] text-white flex items-center justify-center shadow-lg shadow-[#F26522]/30">
            <Zap className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-mono text-white/80">03 Production</span>
        </div>

        {/* Connecting SVG with animated traveling pulse */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line
            x1="18%"
            y1="50%"
            x2="50%"
            y2="50%"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <line
            x1="50%"
            y1="50%"
            x2="82%"
            y2="50%"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          {/* Animated signal dot */}
          <circle cx={pulseX} cy="50%" r="5" fill="#F26522" className="shadow-glow" />
        </svg>
      </div>

      <div className="relative z-10 flex items-center justify-between text-xs text-white/50 border-t border-white/10 pt-3">
        <span>Signal pulse delivery · Cause & effect visible</span>
        <span className="font-mono text-[10px] text-white/40">Recipe 15 · Continuous</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                       EFFECT 08: MAGNETIC DOCK COMPONENT                   */
/* -------------------------------------------------------------------------- */

function EffectMagneticDock() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const tools = [
    { name: "React 19", icon: Code2 },
    { name: "TypeScript", icon: Terminal },
    { name: "PostgreSQL", icon: Database },
    { name: "Cloudflare", icon: Zap },
    { name: "Architecture", icon: Layers },
    { name: "Production", icon: CheckCircle2 },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10">
      <div className="text-center mb-4">
        <p className="font-mono text-xs text-[#F26522] uppercase tracking-wider">
          08 Interfaces · Magnetic Dock
        </p>
        <p className="text-xs text-white/60 mt-1">Move cursor across the engineering tools</p>
      </div>

      {/* Dock Bar */}
      <div
        onMouseLeave={() => setHoverIndex(null)}
        className="flex items-end gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-all"
      >
        {tools.map((tool, idx) => {
          const Icon = tool.icon;
          const isHovered = hoverIndex === idx;
          const isNeighbor =
            hoverIndex !== null && Math.abs(hoverIndex - idx) === 1;

          const size = isHovered ? 56 : isNeighbor ? 46 : 38;

          return (
            <div
              key={tool.name}
              onMouseEnter={() => setHoverIndex(idx)}
              className="relative flex flex-col items-center cursor-pointer transition-all duration-200"
            >
              {isHovered && (
                <span className="absolute -top-7 px-2 py-0.5 rounded text-[10px] font-mono bg-gray-900 text-white whitespace-nowrap border border-white/10 shadow-md">
                  {tool.name}
                </span>
              )}
              <div
                style={{ width: `${size}px`, height: `${size}px` }}
                className={`rounded-xl flex items-center justify-center transition-all duration-200 ${
                  isHovered
                    ? "bg-[#F26522] text-white shadow-lg shadow-[#F26522]/30 scale-105"
                    : isNeighbor
                    ? "bg-white/20 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/15"
                }`}
              >
                <Icon className={isHovered ? "w-6 h-6" : "w-4 h-4"} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                           MAIN MOTION WEBSITE COMPONENT                    */
/* -------------------------------------------------------------------------- */

export function MotionGraphicsWebsite() {
  const [globalTime, setGlobalTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [activeTab, setActiveTab] = useState<"lab" | "film">("lab");

  // 8.0 Second Master Clock Loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp: number | null = null;

    const tick = (timestamp: number) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const delta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      if (isPlaying) {
        setGlobalTime((prev) => (prev + delta * playbackSpeed) % 8.0);
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, playbackSpeed]);

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#F26522]/30 selection:text-[#F26522] font-sans">
      {/* Sticky Top Master Controller HUD */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090e]/90 backdrop-blur-md px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#F26522] flex items-center justify-center font-bold text-white text-xs shadow-md shadow-[#F26522]/20">
              MR
            </span>
            <div>
              <h1 className="text-sm font-semibold tracking-tight text-white flex items-center gap-2">
                Matrix Root Motion Engine
                <span className="text-[10px] font-mono bg-white/10 text-white/70 px-1.5 py-0.5 rounded">
                  v2.4
                </span>
              </h1>
              <p className="text-[11px] font-mono text-white/50">
                15 Skills · Code-Drawn Motion Graphics
              </p>
            </div>
          </div>

          {/* Master 8.0s Clock Controller */}
          <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-7 h-7 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-white/90 transition-transform active:scale-95"
              aria-label={isPlaying ? "Pause clock" : "Play clock"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
            </button>

            <div className="flex flex-col gap-1 w-32 sm:w-44">
              <div className="flex justify-between text-[10px] font-mono text-white/60">
                <span>{globalTime.toFixed(2)}s</span>
                <span>8.00s</span>
              </div>
              <input
                type="range"
                min="0"
                max="8"
                step="0.01"
                value={globalTime}
                onChange={(e) => {
                  setGlobalTime(parseFloat(e.target.value));
                  setIsPlaying(false);
                }}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#F26522]"
              />
            </div>

            <div className="flex items-center gap-1 font-mono text-[10px]">
              {[0.5, 1, 2].map((s) => (
                <button
                  key={s}
                  onClick={() => setPlaybackSpeed(s)}
                  className={`px-1.5 py-0.5 rounded transition-colors ${
                    playbackSpeed === s ? "bg-[#F26522] text-white" : "text-white/40 hover:text-white"
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>

            <button
              onClick={() => setGlobalTime(0)}
              className="text-white/40 hover:text-white transition-colors"
              title="Reset to 0.0s"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Navigation Links back to main pages */}
          <div className="hidden lg:flex items-center gap-5 text-xs text-white/60">
            <a href="/" className="hover:text-white transition-colors">Studio</a>
            <a href="/services" className="hover:text-white transition-colors">Services</a>
            <a href="/incubator" className="hover:text-white transition-colors">Incubator</a>
            <a href="/contact" className="hover:text-[#F26522] transition-colors">Contact</a>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="relative px-5 pt-16 pb-12 sm:pt-24 sm:pb-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F26522]/10 border border-[#F26522]/30 text-[#F26522] text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch-Grade Motion Graphics Built in Code</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight leading-[1.08] text-white">
            Every frame is code.
            <br />
            <span className="text-[#F26522]">Every transition is physical.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
            Derived directly from the <strong>motion-graphics-skills</strong> design system, this site demonstrates launch films, interactive UI morphs, 3D architectural shifts, and data pipelines crafted exclusively with SVG, CSS variables, and canvas physics.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#effects-grid"
              className="inline-flex items-center gap-2 rounded-full bg-[#F26522] hover:bg-[#e05a1a] text-white px-6 py-3 text-sm font-semibold transition-all shadow-lg shadow-[#F26522]/20 hover:-translate-y-0.5"
            >
              Explore 16 Motion Effects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-white/40 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
            >
              Start a Product Sprint
            </a>
          </div>
        </div>
      </section>

      {/* Motion Effects Laboratory Grid */}
      <section id="effects-grid" className="px-5 py-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-mono text-[#F26522] uppercase tracking-wider">
              Recipe Laboratory · 8-Second Cycles
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-1">
              Synchronized Motion Modules
            </h3>
          </div>
          <p className="text-xs font-mono text-white/50 max-w-xs">
            Notice how every module responds in real-time to the master timeline controller above.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EffectButtonToPlayer time={globalTime} />
          <EffectChartMorph time={globalTime} />
          <EffectPerspectiveShift time={globalTime} />
          <EffectFlowingPaths time={globalTime} />
        </div>

        <div className="mt-8">
          <EffectMagneticDock />
        </div>
      </section>

      {/* 7-Beat SaaS Launch Film Architecture (launch-video template) */}
      <section className="px-5 py-20 max-w-7xl mx-auto border-t border-white/10">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono text-[#F26522] uppercase tracking-wider">
            Launch Video Architecture
          </span>
          <h3 className="text-3xl font-semibold text-white mt-2">
            The 7-Beat Launch Film Structure
          </h3>
          <p className="text-sm text-white/60 mt-3">
            How Matrix Root packages high-impact software announcements into 45-second launch trailers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { beat: "01", time: "0-4s", title: "The Hook", desc: "Clean typography lands on a frosted dark surface before distractions appear." },
            { beat: "02", time: "4-9s", title: "Real Proof", desc: "Live client deployments, uptime records, and benchmark metrics." },
            { beat: "03", time: "9-17s", title: "Product Action", desc: "A realistic terminal or code editor executing live with real output." },
            { beat: "04", time: "17-22s", title: "Quality Beat", desc: "Automated test suites pass with glowing validation badges." },
            { beat: "05", time: "22-32s", title: "How It Works", desc: "Visual 3-stage sprint architecture: Idea → Sprint → Production." },
            { beat: "06", time: "32-38s", title: "The Big Metric", desc: "High-value milestone reveal with authentic data sources." },
            { beat: "07", time: "38-45s", title: "The CTA", desc: "Clear invitation to start a project, holding long enough to read." },
          ].map((item) => (
            <div
              key={item.beat}
              className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-[#F26522]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-3">
                  <span className="text-[#F26522]">Beat {item.beat}</span>
                  <span>{item.time}</span>
                </div>
                <h4 className="text-base font-semibold text-white">{item.title}</h4>
                <p className="text-xs text-white/60 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* Action Card */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-[#F26522]/20 to-transparent border border-[#F26522]/40 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono text-[#F26522]">Full Production</p>
              <h4 className="text-base font-semibold text-white mt-1">Want this for your product?</h4>
              <p className="text-xs text-white/70 mt-2">
                We design and engineer launch-grade motion assets alongside your digital software builds.
              </p>
            </div>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center justify-between text-xs font-semibold text-white bg-[#F26522] px-4 py-2.5 rounded-lg hover:bg-[#e05a1a] transition-colors"
            >
              <span>Book Discovery</span>
              <MoveUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-5 text-center text-xs text-white/40">
        <p>
          Matrix Root Motion Graphics Engine · Based on the <strong>motion-graphics-skills</strong> framework · Hyderabad, India
        </p>
      </footer>
    </div>
  );
}
