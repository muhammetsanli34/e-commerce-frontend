"use client";
import { useTabsContext } from "./TabsContext";

type TabContentProps = {
  items: {
    id: string;
    content: React.ReactNode;
  }[];
};

export default function TabsContents({ items }: TabContentProps) {
  const { currentIndex } = useTabsContext();
  const { id, content } = items[currentIndex];
  return (
    <div
      key={id}
      id={`tab-content-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-control-${id}`}
    >
      {content}
    </div>
  );
}
