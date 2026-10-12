import ArticleCard from "../ArticleCard/ArticleCard";

export default function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  );
}
