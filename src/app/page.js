import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";

export default function Homepage() {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>Creative Thoughts Agency</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sem
          justo, ultricies at eros ac, iaculis condimentum felis. Nullam quis.
        </p>
        <div className={classes.cta}>
          <button className={classes.btn}>
            <Link href={"/about"}>Learn more</Link>
          </button>
          <button className={classes.btn}>
            <Link href={"/contact"}>Contact</Link>
          </button>
        </div>
        <div className={classes.brands}>
          <Image src="/brands.png" alt="brands" fill />
        </div>
      </div>
      <div className={classes.imgContainer}>
        <Image src="/hero.gif" alt="hero" fill />
      </div>
    </div>
  );
}
