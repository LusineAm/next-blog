"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import ReactQuill from "react-quill";

const WritePage = () => {
	const router = useRouter();

	const [open, setOpen] = useState(false);
	const [file, setFile] = useState(null);
	const [media, setMedia] = useState("");
	const [value, setValue] = useState("");
	const [title, setTitle] = useState("");
	const [catSlug, setCatSlug] = useState("");

	return (
		<div className={styles.container}>
			<input
				type="text"
				placeholder="Title"
				className={styles.input}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<div className={styles.editor}>
				<button className={styles.button} onClick={() => setOpen(!open)}>
					<Image src="/plus.png" alt="" width={16} height={16} />
				</button>
				{open && (
					<div className={styles.add}>
						<input
							type="file"
							id="image"
							onChange={(e) => setFile(e.target.files[0])}
							style={{ display: "none" }}
						/>
						<button className={styles.addButton}>
							<label htmlFor="image">
								<Image src="/image.png" alt="" width={16} height={16} />
							</label>
						</button>
						<button className={styles.addButton}>
							<Image src="/external.png" alt="" width={16} height={16} />
						</button>
						<button className={styles.addButton}>
							<Image src="/video.png" alt="" width={16} height={16} />
						</button>
					</div>
				)}
				<ReactQuill
					className={styles.textArea}
					theme="bubble"
					value={value}
					onChange={setValue}
					placeholder="Tell your story..."
				/>
			</div>
			<button className={styles.publish}>Publish</button>
		</div>
	);
};

export default WritePage;
