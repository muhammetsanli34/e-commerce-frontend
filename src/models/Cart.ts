export default interface CartItem {
  market_data: {
    market_id: string;
    market_name: string;
    market_description: string;
    market_owner_id: string;
    listing_count: number;
    orders_count: number;
  };
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
