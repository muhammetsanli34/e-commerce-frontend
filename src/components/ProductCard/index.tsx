import Product from "@/src/models/Product";
import style from "./style.module.scss";
import AppIcon from "../AppIcon";
import AppSlider from "../AppSlider";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className={style.productCard}>
      <AppIcon icon="ti ti-heart" size="md" className={style.wishlistIcon} />
      <AppSlider images={props.product.listing_images} />
      <div className={style.productInfo}>
        <span className={style.productPrice}>
          {props.product.listing_price}$
        </span>
        <Link
          href={`/product/${props.product.listing_id}`}
          className={style.productName}
        >
          {props.product.listing_title}
        </Link>
        <div className={style.productOwner}>
          <span>Seller:</span>{" "}
          <Link
            href={`/seller/${props.product.owner_market_id}`}
            className={style.productOwner}
          >
            Test
          </Link>
        </div>
      </div>
    </div>
  );
}
