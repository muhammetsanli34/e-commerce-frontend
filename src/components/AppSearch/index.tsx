import style from "./style.module.scss";
import AppSelect from "../AppSelect";
import categories from "@/src/mock/categories";
import AppIcon from "../AppIcon";
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
        {/* <i className="ti ti-search"></i>{" "} */}
        <AppIcon icon="ti ti-search" />
      </div>
    </div>
  );
}
