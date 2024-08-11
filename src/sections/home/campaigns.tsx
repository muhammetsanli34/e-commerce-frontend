import getWishlists from "@/src/api/wishlist";
import ProductCard from "@/src/components/ProductCard";
import ProductGrid from "@/src/components/ProductGrid";
import Product from "@/src/models/Product";

export default async function Campaigns() {
  const response = await fetch(`
        ${process.env.NEXT_PUBLIC_API_URL}/listing/get_campaign_items`);

  console.log("response", response);

  const data = await response.json();

  const campaignItems: Array<Product> = data.listing_data;

  const wishlists = await getWishlists();

  return (
    <ProductGrid itemPerRow={6}>
      <>
        {campaignItems.map((item) => (
          <ProductCard
            key={item.listing_id}
            product={item}
            wishlists={wishlists}
          />
        ))}
      </>
    </ProductGrid>
  );
}
