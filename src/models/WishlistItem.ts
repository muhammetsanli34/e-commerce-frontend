export default interface WishlistItem {
    wishlist_context: string;
    wishlist_id: string;
    wishlist_title: string;
    wishlist_item_detail: {
      listing_id: string;
      listing_categories: string[];
      listing_description: string;
      listing_price: number;
      listing_title: string;
      listing_images: string[];
    }[];
  }
  