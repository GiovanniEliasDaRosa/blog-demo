import { Link } from "react-router";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to={"/"} className={styles.home}>
          Blog Demo
        </Link>

        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
