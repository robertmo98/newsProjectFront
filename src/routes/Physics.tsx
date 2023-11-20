import { useContext, useState } from "react";
import NewsContext from "../contexts/NewsContext";
import ArticleCard from "../components/article/ArticleCard";
import PaginationBar from "../components/pagination-bar/PaginationBar";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import "/Users/robertmopsik/Projects/Frontend/newsfront/src/components/pagination-bar/pagination.css";
import CategoryHeader from "../components/CategoryHeader";
const Physics = () => {
  const { articles, setArticles } = useContext(NewsContext);
  const physicsArticles = articles.filter(
    (article) => article.category == "Physics"
  );

  const [pageNumber, setPageNumber] = useState(0);
  const articlesPerPage = 10;
  const articlesRead = pageNumber * articlesPerPage;

  const pageCount = Math.ceil(physicsArticles.length / articlesPerPage);
  const displayArticles = physicsArticles.slice(
    articlesRead,
    articlesRead + articlesPerPage
  );

  const changePage = (event: any) => {
    setPageNumber(event.selected);
  };

  return (
    <>
      <CategoryHeader subject="Physics" />
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

export default Physics;
