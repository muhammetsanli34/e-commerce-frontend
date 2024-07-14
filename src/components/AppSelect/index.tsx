import { useEffect, useState } from "react";
import { IconChevronDown } from '@tabler/icons-react';
import style from "./style.module.scss";

interface AppSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  style?: React.CSSProperties;
}
export default function AppSelect(props: AppSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (option: string) => {
    props.onChange(option);
    setIsOpen(false);
  };

  // handle the click outside the dropdown

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${style.appSelect}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className={style.appSelect} style={props.style}>
      <div className={style.selected} onClick={() => setIsOpen(!isOpen)}>
        {props.value}
        <IconChevronDown size={20} />
      </div>
      {isOpen && (
        <div className={style.options}>
          {props.options.map((option) => (
            <div
              key={option}
              className={style.option}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
