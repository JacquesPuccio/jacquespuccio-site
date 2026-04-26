"use client";

import { useEffect } from "react";

export default function Intro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2200); // duración total intro

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="font-playfair text-5xl sm:text-6xl text-white opacity-0 animate-introFade">
          Jacques Puccio
        </h1>

        <p className="mt-4 text-sm tracking-[0.3em] text-white/40 opacity-0 animate-introFade delay-300">
          SYSTEMS • OPERATIONS • EXECUTION
        </p>
      </div>
    </div>
  );
}