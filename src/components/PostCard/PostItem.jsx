import Image from "next/image"
import Link from "next/link"
import classes from "./PostItem.module.css";
import { dateFormatted } from "@/lib/dateFormatted";

export default function PostItem({imgSource, title, description, date, slug}) {

    return(
        <article className={classes.post}>
            <header className={classes.postHeader}>
                <div className={classes.postImg}>
                    <Image src={imgSource} alt={title} width={250} height={450} />
                </div>
                <span className={classes.postDate}>{dateFormatted(date)}</span>
            </header>
            <main className={classes.postDetails}>
                <h1>{title}</h1>
                <p>{description}</p>
                <Link href={`/blog/${slug}`}>Read more ...</Link>
            </main>
        </article>
    )
}