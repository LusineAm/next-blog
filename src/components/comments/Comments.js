import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment.." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="./login"> Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>john doe</span>
              <span className={styles.date}>20.02.2024</span>
            </div>
          </div>
          <p className={styles.desc}>



            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            mi, accumsan sed interdum blandit, maximus bibendum ex. Etiam
            ultrices mollis dolor, tristique sollicitudin enim tempus pharetra.
            Vivamus bibendum tortor diam, at imperdiet risus maximus sed. Nam
            finibus ac odio sit amet suscipit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
