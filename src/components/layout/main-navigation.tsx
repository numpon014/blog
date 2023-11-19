import Link from "next/link";
import Logo from "./logo";
import styles from "./main-navigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
