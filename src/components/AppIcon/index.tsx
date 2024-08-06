type IconSize = "sm" | "md" | "lg" | "xl";

const SizeMap = {
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
};

interface AppIconProps extends React.HTMLAttributes<HTMLElement> {
  icon: string;
  size?: IconSize;
}

export default function AppIcon(props: AppIconProps) {
  return (
    <i
      className={`${props.icon} ${props.className}`}
      style={{ fontSize: props.size ? SizeMap[props.size] : SizeMap.md }}
    ></i>
  );
}
