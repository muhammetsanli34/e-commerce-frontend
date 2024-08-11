"use client";

import style from "./style.module.scss";

interface AppQuantityProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  style?: React.CSSProperties;
}

export default function AppQuantity(props: AppQuantityProps) {
  return (
    <div
      className={style.quantity}
      style={props.style ? { ...props.style } : {}}
    >
      <div
        className={style.quantityButton}
        onClick={() => props.setQuantity(props.quantity - 1)}
      >
        -
      </div>
      <input
        type="number"
        className={style.quantityInput}
        value={props.quantity}
        onChange={(e) => props.setQuantity(parseInt(e.target.value))}
      />
      <div
        className={style.quantityButton}
        onClick={() => props.setQuantity(props.quantity + 1)}
      >
        +
      </div>
    </div>
  );
}
