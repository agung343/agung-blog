import PostItem from "@/components/PostCard/PostItem";
import classes from "./blog.module.css";

export default function BlogPage() {
  return (
    <>
      <main className={classes.blog}>
        <div className={classes.post}>
          <PostItem
            imgSource="/vienna-concert.jpeg"
            title="Visiting Vienna Concert"
            description="Grand Concert at Vienna City Hall"
            date="01-03-2020"
            slug="vienna-concert"
          />
        </div>
        <div className={classes.post}>
          <PostItem
            imgSource="/vienna-concert.jpeg"
            title="Visiting Vienna Concert"
            description="Grand Concert at Vienna City Hall"
            date="01-03-2020"
            slug="vienna-concert"
          />
        </div>
        <div className={classes.post}>
          <PostItem
            imgSource="/vienna-concert.jpeg"
            title="Visiting Vienna Concert"
            description="Grand Concert at Vienna City Hall"
            date="01-03-2020"
            slug="vienna-concert"
          />
        </div>
        <div className={classes.post}>
          <PostItem
            imgSource="/vienna-concert.jpeg"
            title="Visiting Vienna Concert"
            description="Grand Concert at Vienna City Hall"
            date="01-03-2020"
            slug="vienna-concert"
          />
        </div>
      </main>
    </>
  );
}
