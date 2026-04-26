"use client";

import { AnimatePresence, MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        <div
          key={pathname}
          className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white"
        >
          {children}
        </div>
      </AnimatePresence>
    </MotionConfig>
  );
}

