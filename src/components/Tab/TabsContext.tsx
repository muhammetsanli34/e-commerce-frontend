"use client"

import React, { useContext } from "react";

type TabsContextProps = {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
};

type TabProviderProps = {
  children: React.ReactNode;
};

const TabsContext = React.createContext<TabsContextProps | undefined>(undefined);

export default function TabProvider({ children }: TabProviderProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  return (
    <TabsContext.Provider value={{ currentIndex, setCurrentIndex }}>
      {children}
    </TabsContext.Provider>
  );
}

export function useTabsContext(): TabsContextProps {
  const context = useContext(TabsContext);
  if (context === undefined) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
}
