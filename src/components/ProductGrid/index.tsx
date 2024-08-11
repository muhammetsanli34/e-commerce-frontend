import Product from "@/src/models/Product";
import ProductCard from "../ProductCard";

export default function ProductGrid(props: {
  itemPerRow: number;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${props?.itemPerRow}, 1fr)`,
        gap: "1rem",
      }}
    >
      {props.children}
    </div>
  );
}
