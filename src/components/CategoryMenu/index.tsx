import fetchMockCategories from "@/src/lib/api/fetchMockCategories";
import style from "./style.module.scss";
import AppIcon from "../AppIcon";

export default async function CategoryMenu() {
  const categories = await fetchMockCategories();

  return (
    <div className={style.categoryMenu}>
      <ul>
        {categories.map((category, index) => (
          <li key={`category-${index}`}>
            <AppIcon icon={category.icon} size="lg" />

            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
