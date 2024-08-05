"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.scss";

interface WishlistItem {
  whislist_context: string;
  whislist_id: string;
  whislist_title: string;
  whislist_item_detail: {
    listing_categories: string[];
    listing_description: string;
    listing_price: number;
    listing_title: string;
    listing_images: string[];
  }[];
}

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const fetchWishlist = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/get_whislists`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${
            document.cookie
              ?.split("; ")
              ?.find((row: string) => row.startsWith("access_token="))
              ?.split("=")[1]
          }`,
          accept: "application/json",
          "accept-language": "en-US,en;q=0.9,tr-TR;q=0.8,tr;q=0.7",
        },
      }
    );
    const data = await response.json();
    console.log("data", data.whislists);
    setWishlist(data.whislists);
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <div className={styles.wishListContainer}>
      {wishlist.map((item) => (
        <div key={item.whislist_id} className={styles.wishListCard}>
          <img src="https://fakeimg.pl/350x200/ff0000/000" />
          <h3>{item.whislist_title}</h3>
          <p>{item.whislist_context}</p>
        </div>
      ))}
    </div>
  );
}
