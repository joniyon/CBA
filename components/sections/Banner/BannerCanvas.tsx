"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

/**
 * Simulated "cinematic slow video" background — no video asset.
 * Several sine-wave bands drift very slowly across a deep-navy base,
 * in translucent lighter blues, producing a flowing, filmic motion.
 * Pauses when off-screen (IntersectionObserver) and renders a static
 * gradient under reduced-motion.
 */
export function BannerCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const bands = [
      { amp: 0.18, wl: 1.4, speed: 0.012, y: 0.42, alpha: 0.10, hue: "#4C70F5" },
      { amp: 0.22, wl: 1.0, speed: 0.009, y: 0.58, alpha: 0.09, hue: "#80A1FF" },
      { amp: 0.15, wl: 1.8, speed: 0.015, y: 0.72, alpha: 0.07, hue: "#375DFB" },
      { amp: 0.20, wl: 1.2, speed: 0.007, y: 0.30, alpha: 0.06, hue: "#C2D6FF" },
    ];

    const draw = (band: (typeof bands)[number], phase: number) => {
      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 8) {
        const t = (x / w) * Math.PI * 2 * band.wl + phase;
        const y = band.y * h + Math.sin(t) * band.amp * h;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fillStyle = band.hue;
      ctx.globalAlpha = band.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    const paintBase = () => {
      ctx.fillStyle = "#162664";
      ctx.fillRect(0, 0, w, h);
    };

    let raf = 0, running = true, phase = 0;
    const frame = () => {
      if (!running) return;
      paintBase();
      phase += 1;
      bands.forEach((b, i) => draw(b, phase * b.speed + i));
      raf = requestAnimationFrame(frame);
    };

    if (reduced) {
      paintBase();
      bands.forEach((b, i) => draw(b, i));
    } else {
      // pause when scrolled out of view
      const io = new IntersectionObserver(([e]) => {
        running = e.isIntersecting;
        if (running) raf = requestAnimationFrame(frame);
        else cancelAnimationFrame(raf);
      });
      io.observe(canvas);
      raf = requestAnimationFrame(frame);
      return () => { io.disconnect(); ro.disconnect(); cancelAnimationFrame(raf); };
    }
    return () => { ro.disconnect(); cancelAnimationFrame(raf); };
  }, [reduced]);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />;
}
