import React from "react";
import styles from "./web.module.scss";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api");
  const repo = await res.json();
  return { props: { repo } };
};
const Web = ({ repo }: any) => {
  return (
    <div className={styles.web}>
      {repo?.products.map((p: any) => (
        <div className={styles.card} key={p.id}>
          <div className={styles.card_image}>
            <img src={p.img} alt="logo" />
          </div>

          <div className={styles.card_description}>
            <p className={styles.text_title}>{p.title}</p>
            <p className={styles.text_body}>{p.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Web;
