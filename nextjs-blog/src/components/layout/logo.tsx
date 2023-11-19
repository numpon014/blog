import Link from "next/link";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <span className="ml-2 text-xl font-bold">Oat Next.js Blog</span>
      </Link>
    </div>
  );
};

export default Logo;
