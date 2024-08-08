export default interface Product {
  listing_id: string;
  owner_market_id: string;
  owner_user_id: string;
  listing_title: string;
  listing_order_count: number;
  listing_price: number;
  listing_description: string;
  listing_categories: string[];
  listing_images: string[];
}
