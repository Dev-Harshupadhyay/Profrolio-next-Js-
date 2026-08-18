"use client";

import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Preloader from "@/components/Preloader";
import CommandPalette from "@/components/CommandPalette";
import AIChat from "@/components/AIChat";

export default function GlobalChrome() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader && <Preloader onDone={() => setShowPreloader(false)} />}
      <CommandPalette />
      <AIChat />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
