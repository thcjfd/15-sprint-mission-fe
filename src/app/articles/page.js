import BestArticleList from "@/components/articlesPage/BestArticleList/BestArticleList.js";
import { getArticles } from "@/lib/api/articles";
import * as styles from "./page.css";
import Link from "next/link.js";
import SearchBar from "@/components/articlesPage/SearchBar/SearchBar";
import SortDropdown from "@/components/articlesPage/SortDropdown/SortDropdown";

export default async function ArticlesPage() {
  const { list: articles } = await getArticles();

  return (
    <div className={styles.container}>
      <section className={styles.bestArticlesContainer}>
        <h2 className={styles.title}>베스트 게시글</h2>
        <BestArticleList articles={articles} />
      </section>

      <section className={styles.articlesListContainer}>
        <div className={styles.articlesListHeader}>
          <h2 className={styles.title}>게시글</h2>
          <Link href={"/register"} className={styles.registerButton}>
            글쓰기
          </Link>
        </div>
        <div className={styles.optionsContainer}>
          <SearchBar />
          <SortDropdown />
        </div>
      </section>
    </div>
  );
}
