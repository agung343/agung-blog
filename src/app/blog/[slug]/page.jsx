import Image from "next/image";
import classes from "./post.module.css";

export default function BlogPostPage({ params }) {
  return (
    <main className={classes.post}>
      <div className={classes.postImage}>
        <Image src="/vienna-concert.jpeg" alt="vienna concert" fill />
      </div>
      <div className={classes.details}>
        <h1>Title</h1>
        <div className={classes.detail}>
          <Image
            src="/vienna-concert.jpeg"
            alt="vienna concert"
            height={50}
            width={50}
          />
          <div className={classes.detailText}>
            <p>
              <span className={classes.title}>Author</span> -{" "}
              <span className={classes.value}>Agung Wahyudi</span>
            </p>
          </div>
          <div className={classes.detailText}>
            <p>
              <span className={classes.title}>Published</span> -{" "}
              <span className={classes.value}>01-03-2020</span>
            </p>
          </div>
        </div>
        <div className={classes.content}>
          Lorelajsdlbcasd askjiuwqnas isadqwkjp
        </div>
      </div>
    </main>
  );
}
