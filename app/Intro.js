"use client";
import { useEffect, useState } from "react";

export default function Intro({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 2000); // duración intro

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-wide animate-fade">
        Jacques Puccio
      </h1>
    </div>
  );
}