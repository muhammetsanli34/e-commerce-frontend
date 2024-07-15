import AppBanner from "../components/AppBanner";
import CategoryMenu from "../components/CategoryMenu";

export default function Page() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        gap: "1rem",
      }}
    >
      <CategoryMenu />
      <AppBanner
        title="Welcome to our store"
        description="We have prepared the most special discounts for you on the most popular products you need. Don't miss these opportunities..."
        image="https://klbtheme.com/bevesi/wp-content/uploads/2024/04/slider-02.jpg"
        link="/"
      />
    </div>
  );
}
