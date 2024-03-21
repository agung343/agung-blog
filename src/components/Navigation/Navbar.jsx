import Links from "./Links";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={classes.navLists}>
      <div>
        <h2>Logo</h2>
      </div>
      <div>
        <Links path={'/'} title='Home' />
        <Links path={'/about'} title='About' />
        <Links path={'/contact'} title='Contact' />
        <Links path={'/blog'} title='Blog' />
        <Links path={'/admin'} title='Admin' />
      </div>
    </div>
  );
}
