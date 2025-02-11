import React, { createContext, useContext } from "react";
import { useIsMobile } from "@hooks/use-is-mobile";

const MobileContext = createContext<boolean>(false);

export function MobileProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
}

// Custom hook to use the mobile context
export function useMobileContext() {
  const context = useContext(MobileContext);
  if (context === undefined) {
    throw new Error("useMobileContext must be used within a MobileProvider");
  }
  return context;
}
