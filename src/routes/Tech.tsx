import { useContext, useState } from "react";
import NewsContext from "../contexts/NewsContext";
import ArticleCard from "../components/article/ArticleCard";
import PaginationBar from "../components/pagination-bar/PaginationBar";
import CategoryHeader from "../components/navbar/CategoryHeader";
import AddsZone from "../components/advertisements/AdsZone";
const Tech = () => {
  const { articles } = useContext(NewsContext);
  const techArticles = articles.filter((article) => article.category === "Tech");

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
      <div className="flex justify-between ">
        <div className="w-2/3 lg:pl-24">
          {displayArticles?.map((article) => (
            <ArticleCard
              id={article.id}
              user={article.user}
              key={article.id}
              category={article.category}
              title={article.title}
              content={article.content}
              mainImg={article.mainImg}
              date={article.date}
            />
          ))}
        </div>
        <AddsZone
          img1="https://images.pexels.com/photos/1819650/pexels-photo-1819650.jpeg?auto=compress&cs=tinysrgb&w=800"
          img2="https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          img3="https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=800"
          header1="This ad can be yours"
          header2="This ad can be yours"
          header3="This ad can be yours"
        />
      </div>
      <PaginationBar pageCount={pageCount} changePage={changePage} />
    </>
  );
};

export default Tech;
