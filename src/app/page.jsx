import Feautured from "@/components/featured/Feautured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import Pagination from "@/components/pagination/Pagination";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Feautured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
