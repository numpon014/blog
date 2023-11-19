import styles from "./styles.module.css";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src={"/images/site/profile.jpeg"}
          alt={"An image showing Oat"}
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Oat</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        and also Node.js.
      </p>
    </section>
  );
};

export default Hero;
