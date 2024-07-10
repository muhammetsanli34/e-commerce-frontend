"use client";
import { useTabsContext } from "./TabsContext";
import style from "./style.module.scss";

type TabTitlesProps = {
  items: {
    id: string;
    title: string;
  }[];
};

export default function TabTitles({ items }: TabTitlesProps) {
  const { currentIndex, setCurrentIndex } = useTabsContext();
  return (
    <div role="tablist" className={style.tabTitles}>
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
          className={`${style.tabButton} ${
            currentIndex === index ? style.activeTabTitle : ""
          }`}
        >
          {title}
        </button>
      ))}
    </div>
  );
}
