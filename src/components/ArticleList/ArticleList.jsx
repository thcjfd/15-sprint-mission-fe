import ArticleCard from "../ArticleCard/ArticleCard";
import * as styles from "./ArticleList.css.js"

export default function ArticleList({ articles }) {
  const recentArticles = articles.slice(0, 3);

  return (
    <ul className={styles.articlesGrid}> 
      {recentArticles.map((article) => (
        <li key={article.id}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  );
}
