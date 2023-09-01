import { MenuItems } from "./MenuItems";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpen, setISNavbarOpen] = useState({clicked : false});

  const navbarClickHandler = () => {
    setISNavbarOpen(!isNavbarOpen);
  }

  return (
    <nav className={styles.NavbarItems}>
      <h1 className={styles["navbar-logo"]}>Trippy</h1>

      <div className={styles["menu-icons"]} onClick={navbarClickHandler}>
        <i className={!isNavbarOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={`${styles["nav-menu"]} ${!isNavbarOpen ? styles["active"] : ""}`}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link  to={item.url} className={styles[item.cName]}>
                <i className={item.icon}></i> {item.title}
              </Link>
            </li>
          );
        })}
        <button className={`${styles["signup-btn"]} btn`}>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
