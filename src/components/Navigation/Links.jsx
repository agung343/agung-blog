'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./Links.module.css";

export default function Links({ path, title }) {
  const pathName = usePathname();

  return (
    <>
      <Link
        href={path}
        className={`${classes.links} ${
          pathName === path && classes.active
        }`}
      >
        {title}
      </Link>
    </>
  );
}
