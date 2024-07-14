type IconSize = "sm" | "md" | "lg" | "xl";

const SizeMap = {
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
};

interface AppIconProps {
  icon: string;
  size?: IconSize;
}

export default function AppIcon({ icon, size = "md" }: AppIconProps) {
  return <i className={icon} style={{ fontSize: SizeMap[size] }}></i>;
}
