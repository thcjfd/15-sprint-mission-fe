import * as styles from "./ArticleCard.css.js";
import Image from "next/image";
import thumbnail from "@/assets/images/thumbnail.svg";

export default function ArticleCard() {
  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <p>제목이 들어올 자리</p>
        <Image src={thumbnail} className={styles.thumbnail} alt="썸네일" />
      </div>
      <span>총명한 판다</span>
      <span>♡ 9999+</span>
      <span>2024.04.16</span>
    </div>
  );
}
