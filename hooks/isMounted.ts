"use client";

import { useState, useEffect } from "react";

export function useIsMounted(): boolean {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setMounted(true);
    });

    // Cleanup function to cancel the animation frame if component unmounts
    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return mounted;
}
