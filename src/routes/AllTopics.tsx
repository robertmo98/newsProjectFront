import React, { useContext, useEffect, useState } from "react";
import NewsContext from "../contexts/NewsContext";
import { ArticleProps } from "../@Types";
import ArticleCard from "../components/article/ArticleCard";
import PaginationBar from "../components/pagination-bar/PaginationBar";

const AllTopics = () => {
  const { articles, setArticles } = useContext(NewsContext);

  const [pageNumber, setPageNumber] = useState(0);
  const articlesPerPage = 5;
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
    <div>
   
      <div className="flex justify-between">
        <h2 className="text-sky-900 font- font-mono pl-4 dark:text-white">
          Dicsover the latest topics
        </h2>

        <input
          className="pr-64 bg-slate-100 dark:bg-inherit dark:placeholder-yellow-100 dark:text-yellow-100"
          placeholder="Search title"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        ></input>
      </div>
      <hr />
      <div className="">
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
          />
        ))}
      {search !== "" &&
        filteredArticles.map((article) => (
          <ArticleCard
            id={article.id}
            key={article.id}
            category={article.category}
            title={article.title}
            content={article.content}
            mainImg={article.mainImg}
          />
        ))}

      {search == "" && (
        <PaginationBar pageCount={pageCount} changePage={changePage} />
      )}
      </div>
    </div>
  );
};

export default AllTopics;
