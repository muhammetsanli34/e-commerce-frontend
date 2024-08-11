"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import AppModal from "@/src/components/AppModal";
import AppButton from "@/src/components/AppButton";
import Swal from "sweetalert2";
import WishlistItem from "@/src/models/WishlistItem";
import getWishlists from "@/src/api/wishlist";
import FormBase from "@/src/components/FormBase";
import BaseInput from "@/src/components/BaseInput";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const [showingWishlist, setShowingWishlist] = useState<WishlistItem | null>(
    null
  );

  const fetchWishlist = async () => {
    const wishlists = await getWishlists();
    setWishlist(wishlists);
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const deleteItemFromWishlist = async (
    wishlist_id: string,
    listing_id: string
  ) => {
    const selectedWishlist = wishlist.find(
      (item) => item.wishlist_id === wishlist_id
    );
    const payload = {
      wishlist_title: selectedWishlist?.wishlist_title,
      wishlist_context: selectedWishlist?.wishlist_context,
      wishlist_item_ids: selectedWishlist?.wishlist_item_detail.reduce(
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
      `${process.env.NEXT_PUBLIC_API_URL}/user/update_wishlist/${wishlist_id}`,
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
    if (wishlist.wishlist_item_detail?.length > 0) {
      setShowingWishlist(wishlist);
    }
  };

  const createNewWishlist = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/create_wishlist`,
      {
        method: "POST",
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
        body: JSON.stringify(formValues),
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
  };

  const formValues = {
    wishlist_title: "",
    wishlist_context: "",
    wishlist_item_ids: [],
  };

  return (
    <>
      <div className={styles.wishListContainer}>
        {wishlist?.map((item) => (
          <div
            key={item.wishlist_id}
            className={styles.wishListCard}
            onClick={() => handleModal(item)}
          >
            {item.wishlist_item_detail[0] && (
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}/static/${item.wishlist_item_detail[0].listing_images[0]}`}
              />
            )}
            <h3>{item.wishlist_title}</h3>
            <p>{item.wishlist_context}</p>
          </div>
        ))}
        <AppButton variant="primary">Create New Wishlist</AppButton>
        <FormBase
          rules="Wishlist"
          values={formValues}
          submit={createNewWishlist}
        >
          <BaseInput type="text" name="wishlist_title" label="Title*" />
          <BaseInput type="text" name="wishlist_context" label="Context*" />
          <AppButton variant="primary" type="submit">
            {" "}
            Create{" "}
          </AppButton>
        </FormBase>
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
            {showingWishlist?.wishlist_item_detail.map((item) => (
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
                        showingWishlist.wishlist_id,
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
