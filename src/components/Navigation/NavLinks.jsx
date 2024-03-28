"use client";
import { useState } from "react";
import Links from "./Links";
import classes from "./NavLinks.module.css";

export default function NavLinks() {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const [open, setOpen] = useState(false);

  //TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={classes.container}>
      <div className={classes.navLinks}>
        {links.map((link) => (
          <Links key={link.title} title={link.title} path={link.path} />
        ))}
        {session ? (
          <>
            {isAdmin && <Links title="Admin" path="/admin" />}
            <button className={classes.logout}>Logout</button>
          </>
        ) : (
          <Links title="Login" path="/login" />
        )}
      </div>
      <button className={classes.menuBtn} onClick={() => setOpen(prev => !prev)}>Menu</button>
      {open && (
        <div className={classes.mobile}>
          {links.map((link) => (
            <Links title={link.title} key={link.title} path={link.path} />
          ))}
        </div>
      )}
    </div>
  );
}
