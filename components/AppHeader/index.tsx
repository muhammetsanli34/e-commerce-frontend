"use client";
import Link from "next/link";
import style from "./style.module.scss";
import TopbarSelect from "../TopbarSelect";

export default function AppHeader() {
  return (
    <header>
      <div className={`${style.topbar} container`}>
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
    </header>
  );
}
