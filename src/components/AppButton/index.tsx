import style from "./style.module.scss";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "danger" | "success";
}

export default function AppButton({ children, ...props }: AppButtonProps) {
  return (
    <button
      {...props}
      className={`${style.appButton} ${
        props.variant ? style[props.variant] : ""
      }`}
    >
      {children}
    </button>
  );
}
