import * as style from "./ArticleList.css";
import ArticleCard from "@/components/articlesPage/ArticleCard/ArticleCard";

export default function ArticleList({ articles }) {
  return (
    <ul className={style.articlesList}>
      {articles.map((article) => (
        <li key={article.id}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  );
}
