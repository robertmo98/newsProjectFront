import { useContext, useEffect, useState } from "react";
import NewsContext from "../contexts/NewsContext";
import { ArticleProps } from "../@Types";
import ArticleCard from "../components/article/ArticleCard";
import PaginationBar from "../components/pagination-bar/PaginationBar";
import AddsZone from "../components/advertisements/AdsZone";

const AllTopics = () => {
  const { articles, setArticles } = useContext(NewsContext);

  const [pageNumber, setPageNumber] = useState(0);
  const articlesPerPage = 10;
  const articlesRead = pageNumber * articlesPerPage;

  const [search, setSearch] = useState<string>("");

  const pageCount = Math.ceil(articles.length / articlesPerPage);

  const displayArticles = articles.slice(
    articlesRead,
    articlesRead + articlesPerPage
  );

  const changePage = (event: any) => {
    setPageNumber(event.selected);
  };

  const filteredArticles = articles.filter((article) => {
    return search.toLowerCase() === ""
      ? article
      : article.title.toLowerCase().includes(search);
  });

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-sky-900 font- font-mono pl-12  lg:pl-24 dark:text-white">
          Dicsover the latest topics
        </h2>

        <input
          className="lg:pr-64 bg-inherit dark:bg-inherit dark:placeholder-yellow-100 dark:text-yellow-100"
          placeholder="Search title" //todo: add a search icon
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        ></input>
      </div>
      <hr />

      <div className="flex justify-between">
        <div className="w-2/3 lg:pl-24">
          {search == "" &&
            displayArticles?.map((article: ArticleProps) => (
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
          {search !== "" &&
            filteredArticles.map((article) => (
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
        {search == "" && (
          <AddsZone
            img1="https://images.pexels.com/photos/1819650/pexels-photo-1819650.jpeg?auto=compress&cs=tinysrgb&w=800"
            img2="https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            img3="https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=800"
            header1="This ad can be yours"
            header2="This ad can be yours"
            header3="This ad can be yours"
          />
        )}
      </div>

      {search == "" && (
        <PaginationBar pageCount={pageCount} changePage={changePage} />
      )}
    </>
  );
};

export default AllTopics;
