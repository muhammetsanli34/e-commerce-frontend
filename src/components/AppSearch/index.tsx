import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AppSelect from "../AppSelect";

export default function AppSearch() {
  return (
    <div className={style.appSearch}>
      <AppSelect
        options={["All", "Title", "Author"]}
        value="All"
        onChange={() => {}}
      />
      <input type="text" placeholder="Search" />
      <div className={style.searchButton}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}
