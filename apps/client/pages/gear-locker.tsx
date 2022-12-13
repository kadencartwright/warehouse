import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/GearLocker.module.css";

const GearLocker: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gear Locker</title>
        <meta name="description" content="Your Gear" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}> Title</h3>
          <p className={styles.description}> some info about this gear</p>
          <div className={styles.thumb}></div>

          {/* need the following
            - card border
            - drop shadow
            - photo thumbnail
            - title
            ? date acquired
            ? cost
            ? last used
           */}
        </div>
      </main>
    </div>
  );
};

export default GearLocker;
