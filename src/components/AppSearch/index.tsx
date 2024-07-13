import style from "./style.module.scss";

export default function AppSearch() {
  return (
    <div className={style.appSearch}>
      <input type="text" placeholder="Search" />
    </div>
  );
}
