import Link from "next/link";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={classes.navLists}>
      <div>
        <h2>Logo</h2>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </div>
  );
}
