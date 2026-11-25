# MOTION.md — Matrix Root Motion Design System

Motion at Matrix Root represents software engineering in motion: structural, physical, dependable, and calibrated. Every animation operates on real physics, spring curves, or precise timing intervals where cause and effect are visible.

---

## 1. Colour Roles & Palette

- **Ground (Base):**
  - Light Ground: `#EFEFEF` and `#f8fafc` (clean, editorial surface)
  - Dark Ground: `#090a0f` and `#0f172a` (high-contrast technical staging)
- **Surface (Card & Module Containers):**
  - Elevated Card: `#ffffff` (light), `#1e293b` (dark) with `1px border #e2e8f0` / `rgba(255,255,255,0.08)`
  - Frosted Glass: `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(12px)`
- **Ink (Typography & Icons):**
  - Primary Ink: `#0f172a` (charcoal slate) on light; `#ffffff` on dark
  - Muted Ink: `#475569` (body copy) on light; `#94a3b8` on dark
  - Mono / Label Ink: `#64748b` (metadata, line counts, technical readouts)
- **Accent (Focal Motion & Energy):**
  - Primary Flame: `#F26522` / `#ff5f03` (call-to-actions, active nodes, data peaks)
  - Deep Flame: `#c2410c` (hover press, grounded depth)
  - Soft Glow Tint: `rgba(242, 101, 34, 0.12)` (aura, perimeter pulse, beacon ping)

---

## 2. Typography & Hierarchy

- **Headlines:** Clean sans-serif (`Geist`, `-apple-system`, `sans-serif`), `font-medium` or `font-semibold`, line-height `1.08` to `1.14`, letter-spacing `-0.03em`.
- **Labels & Badges:** Monospace (`Geist Mono`, ui-monospace), `text-[11px]` to `text-[13px]`, uppercase tracking `0.15em`.
- **Body & Metrics:** `text-[14px]` to `text-[17px]`, line-height `1.6`, font-medium.

---

## 3. Timing & Phase Rhythm

All continuous showcase loops follow an **8.0-second clock** (`window.seek(seconds)`):
- **0.0s – 0.2s (Initial State):** Settled start frame; eye registers the starting anchor.
- **0.2s – 2.2s (Active Move):** The structural transformation. Easing is cubic (`cubic-bezier(0.25, 0.1, 0.25, 1)`) or damped spring.
- **2.2s – 6.6s (Living Hold):** The complete state. Never static: a progress indicator creeps, a cursor breathes, or data pulses continuously.
- **6.6s – 8.0s (Graceful Return):** Every component eases back to origin coordinates. Frame `8.0` matches `0.0` pixel-for-pixel.

---

## 4. How Things Move: Physics & Easing

- **Spring Curves, Not Tweens:** Mechanical UI parts (buttons, notches, docks) move with distinct spring tension and damping (`stiffness: 260, damping: 20`).
- **Staggered Arrivals:** Child elements, list rows, and data bars never move together. They cascade in with `0.05s` to `0.14s` offsets.
- **Object Transformation Over Fades:** An interface never simply cross-fades; a button physically stretches into a player; a card expands into a workspace with visible anchor guides.
- **Ghost Anchors:** When an object transforms, a subtle dashed ghost or outline remains at the starting position so the eye traces the path.

---

## 5. Texture & Finish

- **Liquid Glass:** `backdrop-filter: blur(12px)`, inset border glow `rgba(255,255,255,0.2)`, razor-sharp 1px border.
- **Shadows:** Layered natural ambient occlusion: `0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02)`.
- **Interactive Cursor Proximity:** Magnetic interactive hover states that respond to cursor distance via smooth Gaussian falloff curves.

---

## 6. Five Things Our Motion Must Never Do

1. **Never use generic bouncy overshoots on text;** typography must remain legible and dignified.
2. **Never use arbitrary linear crossfades** when shape-shifting or displacement communicates purpose.
3. **Never freeze completely during hold phases;** keep a secondary micro-movement alive (progress bar, cursor, live signal pulse).
4. **Never snap elements abruptly;** all state transitions ease back cleanly into the loop start.
5. **Never show ungrounded random numbers;** sample metrics must always carry an explicit context or "sample/illustrative" indicator.

---

## 7. Example: Shot-by-Shot Execution (Button → Live Player)

1. **Shot 1 (0.0s):** A compact pill button labeled `"Watch Sprint Demo"` with a play triangle rests on an elevated glass tile. A subtle dashed boundary outlines its footprint.
2. **Shot 2 (0.3s – 1.4s):** The button shell expands outwards into a `16:9` video viewport. The play triangle journeys smoothly to the center while growing an accent halo (`#F26522`).
3. **Shot 3 (1.4s – 2.2s):** The play icon morphs seamlessly into a pause state. The video timeline bar settles at the bottom with a pulsing orange timecode (`"00:14 / 00:45"`).
4. **Shot 4 (2.2s – 6.6s - Hold):** The video progress bar advances smoothly across the playback track, and the timestamp increments live while engineering sprint metrics float in.
5. **Shot 5 (6.6s – 8.0s - Return):** The player neatly contracts back down into the initial button pill, snapping no wires, and landing at the exact initial coordinates.
