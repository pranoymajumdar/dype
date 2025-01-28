"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useIsMounted } from "@/hooks/isMounted";


export function Providers({ children }: { children: React.ReactNode }) {
  const isMounted = useIsMounted();
  if (!isMounted) {
    return null;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
