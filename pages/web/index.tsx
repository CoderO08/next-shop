import React from "react";
import styles from "./web.module.scss";
import Head from "next/head";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api");
  const repo = await res.json();

  return { props: { repo } };
};
const Web = ({ repo }: any) => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.h1}>Products</h1>
      <div className={styles.container}>
        <div className={styles.web}>
          {repo?.products.map((p: any) => (
            <Link key={p.id} href={`/web/${p.id}`}>
              <div className={styles.card}>
                <div className={styles.card_image}>
                  <img src={p.img} alt="logo" />
                </div>

                <div className={styles.card_description}>
                  <p className={styles.text_title}>{p.title}</p>
                  <p className={styles.text_body}>{p.description}</p>
                  <p className={styles.price}>{p.price}$</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Web;
