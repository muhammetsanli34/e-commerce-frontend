"use client";

import { useRouter } from "next/navigation";
import AppIcon from "../AppIcon";
import getUser from "@/src/api/getUser";
import Swal from "sweetalert2";
import style from "./style.module.scss";
import { useEffect, useState } from "react";
import Product from "@/src/models/Product";
import AppModal from "../AppModal";
import WishlistItem from "@/src/models/WishlistItem";

type iconType = "filled" | "outline";

export default function SaveWishList({
  product,
  wishlists,
}: {
  product: Product;
  wishlists: WishlistItem[];
}) {
  const [iconType, setIconType] = useState<iconType>("outline");
  const [modalOpen, setModalOpen] = useState(false);

  const router = useRouter();

  const handleWishlist = async () => {
    const user = await getUser();
    if (!user) {
      const result = await Swal.fire({
        title: "You need to login to add this product to your wishlist.",
        showDenyButton: true,
        confirmButtonText: "Login",
        denyButtonText: "Cancel",
      });
      if (result.isConfirmed) {
        router.push("/auth");
      }
      return;
    }
    setModalOpen(true);
  };

  return (
    <div
      onClick={handleWishlist}
      onMouseOver={() => setIconType("filled")}
      onMouseOut={() => setIconType("outline")}
    >
      <AppIcon
        icon={iconType === "filled" ? "ti ti-heart-filled" : "ti ti-heart"}
        size="md"
        className={style.wishlistIcon}
      />
      <AppModal showModal={modalOpen} onClose={() => setModalOpen(false)}>
        <div className={style.modalContent}>
          <div className={style.modalHeader}>
            <h1 className={style.modalTitle}>Add to Wishlist</h1>
            <AppIcon
              icon="ti ti-close"
              size="md"
              className={style.modalCloseIcon}
              onClick={() => setModalOpen(false)}
            />
          </div>
          <div className={style.modalBody}>
            <div className={style.wishlistList}>
              {wishlists.map((wishlist) => (
                <div key={wishlist.whislist_id} className={style.wishlistItem}>
                  <AppIcon icon="ti ti-heart" size="sm" />
                  <span>{wishlist.whislist_title}</span>
                </div>
              ))}
            </div>
            <button className={style.createNewWishlistButton}>
              Create New Wishlist
            </button>
          </div>
        </div>
      </AppModal>
    </div>
  );
}
