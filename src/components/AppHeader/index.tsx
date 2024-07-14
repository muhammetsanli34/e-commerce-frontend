"use client";
import Link from "next/link";
import style from "./style.module.scss";
import TopbarSelect from "../TopbarSelect";
import AppSearch from "../AppSearch";
import AppIcon from "../AppIcon";

export default function AppHeader() {
  return (
    <header className="container">
      <div className={style.topbar}>
        <ul>
          <li>
            <Link href="/">FAQ</Link>
          </li>
          <li>
            <Link href={"/"}>My Account</Link>
          </li>
          <li>
            <Link href={"/"}>About Us</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/"}>Order Tracking</Link>
          </li>
          <li>
            <TopbarSelect
              elements={["English", "Turkish", "German", "Spanish"]}
              onChange={() => {}}
            />
          </li>
        </ul>
      </div>
      <hr />
      <div className={style.header}>
        <Link href={"/"}>
          <img src={"/images/logo.png"} />
        </Link>
        <AppSearch />
        <div className={style.linkGroup}>
          <AppIcon icon="ti ti-heart" size="md" />
          <span>Wish List</span>
        </div>
        <Link href={"my-account"} className={style.linkGroup}>
          <AppIcon icon="ti ti-user" size="md" />
          <span>
            Welcome <br />
            muhammetsanli34@gmail.com
          </span>
        </Link>
        <AppIcon icon="ti ti-shopping-bag" size="md" />
      </div>
    </header>
  );
}
