import Link from "next/link";
import style from "./web.module.scss";
export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api`);
  const repo = await res.json();
  const paths = repo?.products.map((p: any) => {
    return {
      params: {
        id: `${p?.id}`,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  //   console.log(context);
  const { params } = context;

  const res = await fetch(`http://localhost:3000/api/${params.id}`);
  const repo = await res.json();
  return { props: { repo } };
};

export default function DetailedProduct({ repo }: any) {
  console.log(repo);

  return (
    <>
      <Link className={style.back} href={"/web"}>
        {" "}
        {"back <-"}
      </Link>
      <div className={style.container}>
        <div className={style.img}>
          <img src={repo.product.img} alt="img" />
        </div>
        <div className={style.texts}>
          <h2>{repo.product.title}</h2>
          <p>{repo.product.description}</p>
        </div>
      </div>
    </>
  );
}
