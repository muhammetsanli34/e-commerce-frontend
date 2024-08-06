"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import AppModal from "@/src/components/AppModal";
import AppButton from "@/src/components/AppModal/AppButton";
import Swal from "sweetalert2";

interface WishlistItem {
  whislist_context: string;
  whislist_id: string;
  whislist_title: string;
  whislist_item_detail: {
    listing_id: string;
    listing_categories: string[];
    listing_description: string;
    listing_price: number;
    listing_title: string;
    listing_images: string[];
  }[];
}

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const [showingWishlist, setShowingWishlist] = useState<WishlistItem | null>(
    null
  );

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
          "accept-language": "en-US,en;q=0.9,tr-T<R;q=0.8,tr;q=0.7",
        },
      }
    );
    const data = await response.json();
    setWishlist(data.whislists);
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const deleteItemFromWishlist = async (
    whislist_id: string,
    listing_id: string
  ) => {
    const selectedWishlist = wishlist.find(
      (item) => item.whislist_id === whislist_id
    );
    const payload = {
      whislist_title: selectedWishlist?.whislist_title,
      whislist_context: selectedWishlist?.whislist_context,
      whislist_item_ids: selectedWishlist?.whislist_item_detail.reduce(
        (acc, item) => {
          if (item.listing_id !== listing_id) {
            acc.push(item.listing_id);
          }
          return acc;
        },
        []
      ),
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/update_wishlist/${whislist_id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${
            document.cookie
              ?.split("; ")
              ?.find((row: string) => row.startsWith("access_token="))
              ?.split("=")[1]
          }`,
          accept: "application/json",
          "accept-language": "en-US,en;q=0.9,tr-TR;q=0.8,tr;q=0.7",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    Swal.fire({
      title: response.status === 200 ? "Success" : "Error",
      text: data.message,
      icon: response.status === 200 ? "success" : "error",
      confirmButtonText: "OK",
    });
    fetchWishlist();
    setShowingWishlist(null);
  };

  const handleModal = (wishlist: WishlistItem) => {
    if (wishlist.whislist_item_detail?.length > 0) {
      setShowingWishlist(wishlist);
    }
  };

  return (
    <>
      <div className={styles.wishListContainer}>
        {wishlist.map((item) => (
          <div
            key={item.whislist_id}
            className={styles.wishListCard}
            onClick={() => handleModal(item)}
          >
            {/* <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/static/${item?.whislist_item_detail[0]?.listing_images[0]}`}
            /> */}
            {item.whislist_item_detail[0] && (
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}/static/${item.whislist_item_detail[0].listing_images[0]}`}
              />
            )}
            <h3>{item.whislist_title}</h3>
            <p>{item.whislist_context}</p>
          </div>
        ))}
      </div>
      <AppModal
        onClose={() => setShowingWishlist(null)}
        showModal={!!showingWishlist}
      >
        <div className={styles.wishlistItems}>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {showingWishlist?.whislist_item_detail.map((item) => (
              <tr key={item.listing_title} className={styles.wishlistItem}>
                <td>
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/static/${item.listing_images[0]}`}
                    width={100}
                    height={100}
                  />
                </td>
                <td>{item.listing_title}</td>
                <td>{item.listing_description}</td>
                <td>{item.listing_price}</td>
                <td>
                  <AppButton
                    variant="danger"
                    onClick={() =>
                      deleteItemFromWishlist(
                        showingWishlist.whislist_id,
                        item.listing_id
                      )
                    }
                  >
                    Remove
                  </AppButton>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </AppModal>
    </>
  );
}
