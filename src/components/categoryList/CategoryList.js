import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            className={styles.image}
            src="/style.png"
            alt=""
            width={32}
            height={32}
          />
          style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            className={styles.image}
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
          />
          fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            className={styles.image}
            src="/food.png"
            alt=""
            width={32}
            height={32}
          />
          style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            className={styles.image}
            src="/style.png"
            alt=""
            width={32}
            height={32}
          />
          style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            className={styles.image}
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
          />
          fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            className={styles.image}
            src="/food.png"
            alt=""
            width={32}
            height={32}
          />
          style
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
