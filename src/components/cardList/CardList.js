import styles from "./cardList.module.css";

import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Resent Posts</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
