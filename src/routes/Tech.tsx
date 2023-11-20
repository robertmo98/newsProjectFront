import { useContext, useState } from "react";
import NewsContext from "../contexts/NewsContext";
import ArticleCard from "../components/article/ArticleCard";
import PaginationBar from "../components/pagination-bar/PaginationBar";
import "/Users/robertmopsik/Projects/Frontend/newsfront/src/components/pagination-bar/pagination.css";
import CategoryHeader from "../components/CategoryHeader";
const Tech = () => {
  const { articles, setArticles } = useContext(NewsContext);
  const techArticles = articles.filter((article) => article.category == "Tech");

  const [pageNumber, setPageNumber] = useState(0);
  const articlesPerPage = 10;
  const articlesRead = pageNumber * articlesPerPage;

  const pageCount = Math.ceil(techArticles.length / articlesPerPage);
  const displayArticles = techArticles.slice(
    articlesRead,
    articlesRead + articlesPerPage
  );

  const changePage = (event: any) => {
    setPageNumber(event.selected);
  };

  return (
    <>
      <CategoryHeader subject="Tech" />
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

export default Tech;
