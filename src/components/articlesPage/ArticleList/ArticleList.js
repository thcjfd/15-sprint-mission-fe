import * as style from "./ArticleList.css";
import ArticleCard from "@/components/articlesPage/ArticleCard/ArticleCard";
import icSearchEmpty from "@/assets/images/ic-search-empty.svg";
import Image from "next/image";

export default function ArticleList({ articles }) {
  if (articles.length === 0) {
    return (
      <div className={style.emptyBox}>
        <Image src={icSearchEmpty} alt="" width={160} height={160} />
        <p className={style.emptyText}>검색 결과가 없어요!</p>
      </div>
    );
  }

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
