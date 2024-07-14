import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AppSelect from "../AppSelect";
import categories from "@/src/mock/categories";

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
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}
