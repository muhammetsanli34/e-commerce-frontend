import { useEffect, useState } from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
interface AppSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}
export default function AppSelect({
  options,
  value,
  onChange,
}: AppSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (option: string) => {
    onChange(option);
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
    <div className={style.appSelect}>
      <div className={style.selected} onClick={() => setIsOpen(!isOpen)}>
        {value}
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {isOpen && (
        <div className={style.options}>
          {options.map((option) => (
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
