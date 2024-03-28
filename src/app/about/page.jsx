import Image from "next/image";
import classes from "./page.module.css";
import Features from "@/components/Features";

export default function AboutPage() {
  return (
    <>
      <main className={classes.mainContainer}>
        <div className={classes.text}>
          <h2>About Agency</h2>
          <h1>
            We create digital ideas that are bigger, bolder, brawer and better
          </h1>
          <p>
            We create digital ideas that are bigger, bolder , brawer and better.
            We believe ing good ideas flexibility and precission. We're world's
            Out Special Team best consulting & finance solution provider.Wide
            range of web and software development services.
          </p>
          <div className={classes.features}>
            <Features title='10 K+' description='Years of experience' />
            <Features title='234 K+' description='People reached' />
            <Features title='5 K+' description='Services and plugin' />
          </div>
        </div>
        <div className={classes.imgAbout}>
          <Image src='/about.png' alt="about" height={500} width={500} />
        </div>
      </main>
    </>
  );
}
