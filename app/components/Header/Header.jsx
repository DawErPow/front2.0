"use client";
import Styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { AuthForm } from "../AuthForm/AuthForm";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/app/store/app-store" 

export const Header = () => {
  const [popupIsOpened, setPopupIsOpened] = useState(false);
  

  const authContext = useStore();

  const openPopup = () => {
    setPopupIsOpened(true);
  };

  const closePopup = () => {
    setPopupIsOpened(false);
  };

  const handleLogout = () => {
    authContext.logout();
  };

  const pathname = usePathname();

  

  return (
    <header className={Styles["header"]}>
      <a href="/" className={Styles["logo"]}>
        <img
          className={Styles["logo__image"]}
          src="./images/logo.svg"
          alt="Логотип Pindie"
        ></img>
      </a>
      <nav className={Styles["menu"]}>
        <ul className={Styles["menu__list"]}>
          <li className={Styles["menu__item"]}>
            <Link
              href="/new"
              className={`${Styles["menu__link"]} ${
                pathname === "/new" ? Styles["menu__link_active"] : ""
              }`}
            >
              {" "}
              Новинки
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/popular"
              className={`${Styles["menu__link"]} ${
                pathname === "/popular" ? Styles["menu__link_active"] : ""
              }`}
            >
              Популярные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/shooters"
              className={`${Styles["menu__link"]} ${
                pathname === "/shooters" ? Styles["menu__link_active"] : ""
              }`}
            >
              Шутеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/runners"
              className={`${Styles["menu__link"]} ${
                pathname === "/runner" ? Styles["menu__link_active"] : ""
              }`}
            >
              Ранеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/pixel-games"
              className={`${Styles["menu__link"]} ${
                pathname === "/pixel" ? Styles["menu__link_active"] : ""
              }`}
            >
              Пиксельные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/TDS"
              className={`${Styles["menu__link"]} ${
                pathname === "/TDS" ? Styles["menu__link_active"] : ""
              }`}
            >
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles["auth"]}>
          {authContext.isAuth ? (
            <button className={Styles["auth__button"]} onClick={handleLogout}>
              Выйти
            </button>
          ) : (
            <button className={Styles["auth__button"]} onClick={openPopup}>
              Войти
            </button>
          )}
        </div>
      </nav>
      <Overlay popupIsOpened={popupIsOpened} closePopup={closePopup}/>
      <Popup popupIsOpened={popupIsOpened} closePopup={closePopup}>
        <AuthForm close={closePopup} />
      </Popup>
    </header>
  );
};