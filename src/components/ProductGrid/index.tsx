import Product from "@/src/models/Product";
import ProductCard from "../ProductCard";

export default function ProductGrid(props: {
  itemPerRow: number;
  products: Array<Product>;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${props?.itemPerRow}, 1fr)`,
        gap: "1rem",
      }}
    >
      {props?.products?.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
