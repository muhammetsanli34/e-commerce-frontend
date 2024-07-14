import categories from "@/src/mock/categories";

type Category = {
  name: string;
  icon: string;
};

export default function fetchMockCategories() {
  return new Promise<Array<Category>>((resolve) => {
    setTimeout(() => {
      resolve([...categories]);
    }, 1000);
  });
}
