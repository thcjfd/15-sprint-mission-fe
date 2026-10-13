import BestArticleCard from "@/components/articlesPage/BestArticleCard/BestArticleCard";
import * as styles from "./BestArticleList.css.js"

export default function BestArticleList({ articles }) {
  const recentArticles = articles.slice(0, 3);

  return (
    <ul className={styles.articlesGrid}> 
      {recentArticles.map((article) => (
        <li key={article.id}>
          <BestArticleCard article={article} />
        </li>
      ))}
    </ul>
  );
}
