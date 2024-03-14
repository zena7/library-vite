import { useState } from "react";
import IconBurger from "../assets/HeaderBurgerMenu.svg";
import IconProfile from "../assets/HeaderProfileIcon.svg";
import IconBurgerClose from "../assets/IconBurgerClose.svg";
import * as classes from "./Header.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleBurgerClick() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <header className={classes.header}>
      <h1>Brooklyn Public Library</h1>
      <div className={classes.menu}>
        <img src={IconProfile} alt='Profile' className={classes.iconProfile} />
        <div
          className={classes.iconBurgerContainer}
          onClick={handleBurgerClick}>
          {menuOpen ? (
            <img src={IconBurgerClose} alt='Burger' className={classes.icon} />
          ) : (
            <img src={IconBurger} alt='Menu' className={classes.iconBurger} />
          )}
        </div>
      </div>
      {menuOpen && (
        <div className={classes.burgerMenu}>
          <nav>
            <ul>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#favorites'>Favorites</a>
              </li>
              <li>
                <a href='#coffeeShop'>Coffee shop</a>
              </li>
              <li>
                <a href='#contacts'>Contacts</a>
              </li>
              <li>
                <a href='#libraryCard'>Library card</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
