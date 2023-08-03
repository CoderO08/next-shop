import styles from "./styles.module.scss";
// fetch("http://localhost:3000/api", {
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   method: "POST",
//   body: JSON.stringify({
//     img: "https://i.etsystatic.com/6037284/r/il/edcaa3/4084290008/il_fullxfull.4084290008_400v.jpg",
//     title: "Blue T-shirt",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus culpa sequi. Modi, cupiditate sunt.",
//     price: 400,
//   }),
// });

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboad</h1>
    </div>
  );
};

export default Dashboard;
