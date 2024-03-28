import Link from "next/link";
import NavLinks from "./NavLinks";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={classes.navLists}>
      <div>
        <Link href={"/"}>
          <h2>Logo</h2>
        </Link>
      </div>
      <div>
        <NavLinks />
      </div>
    </div>
  );
}
