import { Link, NavLink } from "react-router";
import styles from "./Header.module.css";

export default function Header() {
  function navLinkStyles({ isActive }) {
    return styles.link + (isActive ? ` ${styles.active}` : "");
  }

  return (
    <header className={`${styles.header}`}>
      <nav>
        <Link to="/" className={`${styles.home}`}>
          <img src={`${import.meta.env.BASE_URL}assets/icons/logo.svg`} alt="" />
          Blog Demo
        </Link>

        <ul>
          <li>
            <NavLink className={navLinkStyles} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkStyles} to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
