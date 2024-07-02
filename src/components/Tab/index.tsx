import React from "react";

import TabsProvider, { useTabsContext } from "./TabsContext";

type TabTitlesProps = {
  items: {
    id: string;
    title: string;
  }[];
};

type TabContentProps = {
  items: {
    id: string;
    content: React.ReactNode;
  }[];
};

type TabsComposition = {
  Titles: (props: TabTitlesProps) => React.ReactNode;
  Contents: (props: TabContentProps) => React.ReactNode;
};

type TabsProps = {
  children: React.ReactNode;
};

type TabsWrapper = (props: TabsProps) => React.ReactNode;

const Tabs: TabsWrapper & TabsComposition = ({ children }) => {
  return <TabsProvider>{children}</TabsProvider>;
};

Tabs.Titles = ({ items }) => {
  const { currentIndex, setCurrentIndex } = useTabsContext();
  return (
    <div role="tablist">
      {items.map(({ id, title }, index) => (
        <button
          key={id}
          id={`tab-control-${id}`}
          role="tab"
          aria-controls={`tab-content-${id}`}
          aria-selected={currentIndex === index}
          onClick={() => {
            setCurrentIndex(index);
          }}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

Tabs.Contents = ({ items }) => {
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
};

export default Tabs;
