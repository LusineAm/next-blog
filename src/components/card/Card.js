import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

function Card() {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src="/p1.jpeg" alt="" fill className={styles.image} />
			</div>
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<span className={styles.date}>11.02.2023 - </span>
					<span className={styles.category}>culture</span>
				</div>
				<Link href="/">
					<h1 className={styles.header}>some header</h1>
				</Link>

				<p className={styles.desc}>there is a description</p>
				<Link href="/" className={styles.link}>
					Read more
				</Link>
			</div>
		</div>
	);
}

export default Card;
