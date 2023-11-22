import axios from "axios";
import { request } from "../components/utils/axios-interceptors";
import { ArticleProps } from "../@Types";

const baseUrl = "http://localhost:8080/api/v1/articles";

const createArticle = (articleData: ArticleProps) => {
  const config = {
    method: "post",
    url: baseUrl,
    data: articleData,
  };
  return request(config);
};

export const updateArticle = (articleData: ArticleProps, id: string) => {
  const config = {
    method: "put",
    url: `${baseUrl}/${id}`,
    data: articleData,
  };
  return request(config);
};

const articlesService = { createArticle, updateArticle };
export default articlesService;
