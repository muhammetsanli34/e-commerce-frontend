import style from "./style.module.scss";
import AppSelect from "../AppSelect";
import categories from "@/src/mock/categories";
import { IconSearch } from "@tabler/icons-react";
export default function AppSearch() {
  return (
    <div className={style.appSearch}>
      <AppSelect
        options={categories}
        value="All"
        onChange={() => {}}
        style={{ padding: "5px" }}
      />
      <input type="text" placeholder="Search" />
      <div className={style.searchButton}>
        <IconSearch stroke={2} />
      </div>
    </div>
  );
}
