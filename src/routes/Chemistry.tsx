import { useContext, useState } from "react";
import NewsContext from "../contexts/NewsContext";
import ArticleCard from "../components/article/ArticleCard";
import PaginationBar from "../components/pagination-bar/PaginationBar";
import "/Users/robertmopsik/Projects/Frontend/newsfront/src/components/pagination-bar/pagination.css";
import CategoryHeader from "../components/CategoryHeader";
const Chemistry = () => {
  const { articles, setArticles } = useContext(NewsContext);
  const chemistryArticles = articles.filter(
    (article) => article.category == "Chemistry"
  );

  const [pageNumber, setPageNumber] = useState(0);
  const articlesPerPage = 10;
  const articlesRead = pageNumber * articlesPerPage;

  const pageCount = Math.ceil(chemistryArticles.length / articlesPerPage);
  const displayArticles = chemistryArticles.slice(
    articlesRead,
    articlesRead + articlesPerPage
  );

  const changePage = (event: any) => {
    setPageNumber(event.selected);
  };

  return (
    <>
      <CategoryHeader subject="Chemistry" />
      {displayArticles?.map((article) => (
        <ArticleCard
          key={article.id}
          id={article.id}
          mainImg={article.mainImg}
          title={article.title}
          category={article.category}
          content={article.content}
        />
      ))}

      <PaginationBar pageCount={pageCount} changePage={changePage} />
    </>
  );
};

export default Chemistry;
