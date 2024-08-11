import Product from "@/src/models/Product";
import style from "./style.module.scss";
import AppSlider from "../AppSlider";
import Link from "next/link";
import SaveWishList from "./SaveWishlist";
import WishlistItem from "@/src/models/WishlistItem";

interface ProductCardProps {
  product: Product;
  wishlists: Array<WishlistItem>;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className={style.productCard}>
      <SaveWishList product={props.product} wishlists={props.wishlists} />
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
