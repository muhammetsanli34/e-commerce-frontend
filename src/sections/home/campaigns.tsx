import ProductGrid from "@/src/components/ProductGrid";

export default async function Campaigns() {
  const response = await fetch(`
        ${process.env.NEXT_PUBLIC_API_URL}/listing/get_campain_items
    `);

  const data = await response.json();

  const campaignItems = data.listing_data;

  return <ProductGrid products={campaignItems} itemPerRow={6} />;
}
