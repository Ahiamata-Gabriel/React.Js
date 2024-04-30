import { Outlet } from "react-router-dom";
import styles from "./SideBar.module.css";
import AppNav from "./AppNav.jsx";
import Logo from "./Logo.jsx";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <p>list of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by worldwise Inc.
        </p>
      </footer>
    </div>
  );
};

export default SideBar;
