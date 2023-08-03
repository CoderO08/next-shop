import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>Home</h3>
      <br />
      <h3>Github profils</h3>
      <br />
      <p>https://github.com/CoderO08</p>
      <p>https://github.com/Mono439</p>
      <br />
      <p>http://localhost:3000/api</p>
    </div>
  );
};

export default Home;
