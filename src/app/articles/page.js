import ArticleList from "@/components/ArticleList/ArticleList";
import { getArticles  } from "@/lib/api/articles";
import * as styles from "./page.css.js"

export default async function ArticlesPage() {
  const {list: articles} = await getArticles();

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>베스트 게시글</h1>
      <ArticleList articles={articles}/>
    </section>
  );
}
