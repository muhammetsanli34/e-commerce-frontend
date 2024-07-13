"use client";
import Link from "next/link";
import style from "./style.module.scss";
import TopbarSelect from "../TopbarSelect";
import AppSearch from "../AppSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faHeart} size="xl" />
          <span>Wish List</span>
        </div>
        <Link href={"my-account"} className={style.linkGroup}>
          <FontAwesomeIcon icon={faUser} color="black" size="xl" />
          <span>
            Welcome <br />
            muhammetsanli34@gmail.com
          </span>
        </Link>
        <FontAwesomeIcon icon={faBagShopping} size="xl" />
      </div>
    </header>
  );
}
