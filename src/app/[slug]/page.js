import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ispoum folar esim inch</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>20.02.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor mi, accumsan sed interdum blandit, maximus bibendum ex.
              Etiam ultrices mollis dolor, tristique sollicitudin enim tempus
              pharetra. Vivamus bibendum tortor diam, at imperdiet risus maximus
              sed. Nam finibus ac odio sit amet suscipit. Maecenas semper
              venenatis rutrum.
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor mi, accumsan sed interdum blandit, maximus bibendum ex.
              Etiam ultrices mollis dolor, tristique sollicitudin enim tempus
              pharetra. Vivamus bibendum tortor diam, at imperdiet risus maximus
              sed. Nam finibus ac odio sit amet suscipit. Maecenas semper
              venenatis rutrum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tortor mi, accumsan sed interdum blandit, maximus bibendum ex.
              Etiam ultrices mollis dolor, tristique sollicitudin enim tempus
              pharetra. Vivamus bibendum tortor diam, at imperdiet risus maximus
              sed. Nam finibus ac odio sit amet suscipit. Maecenas semper
              venenatis rutrum.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
