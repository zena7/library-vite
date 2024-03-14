import { useLayoutEffect, useState } from "react";
import IconBurger from "../assets/HeaderBurgerMenu.svg";
import IconProfile from "../assets/HeaderProfileIcon.svg";
import IconBurgerClose from "../assets/IconBurgerClose.svg";
import * as classes from "./Header.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(navigator.maxTouchPoints > 0);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  function handleBurgerClick() {
    setMenuOpen((prev) => !prev);
  }

  function handleClickProfileIcon() {
    setProfileMenuOpen((prev) => !prev);
  }

  useLayoutEffect(() => {
    if (!isMobile) {
      setMenuOpen(true);
    }
  }, []);

  return (
    <header className={classes.header} id='headerAnchor'>
      <a href='headerAnchor'>
        <h1>Brooklyn Public Library</h1>
      </a>
      <div className={`${classes.menu} ${!isMobile && classes.profileOrder}`}>
        <img
          src={IconProfile}
          alt='Profile'
          className={classes.iconProfile}
          onClick={handleClickProfileIcon}
        />
        {profileMenuOpen && (
          <div className={classes.profileMenuOpen}>
            <h3>Profile</h3>
            <p>Log In</p>
            <p>Register</p>
          </div>
        )}
        {isMobile && (
          <div
            className={classes.iconBurgerContainer}
            onClick={handleBurgerClick}>
            {menuOpen ? (
              <img
                src={IconBurgerClose}
                alt='Burger'
                className={classes.icon}
              />
            ) : (
              <img src={IconBurger} alt='Menu' className={classes.iconBurger} />
            )}
          </div>
        )}
      </div>
      {menuOpen && (
        <div
          className={isMobile ? classes.burgerMenu : classes.burgerMenuDesktop}>
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
