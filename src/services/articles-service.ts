import { request } from "../components/utils/axios-interceptors";
import { ArticleProps, ArticleUpdateProps } from "../@Types";

const baseUrl = "http://localhost:8080/api/v1/articles";

const createArticle = (articleData: ArticleProps) => {
  const config = {
    method: "post",
    url: baseUrl,
    data: articleData,
  };
  return request(config);
};

export const updateArticle = (articleData: ArticleUpdateProps, id: string) => {
  const config = {
    method: "put",
    url: `${baseUrl}/${id}`,
    data: articleData,
  };
  return request(config);
};

export const deleteArticle = (id: any) => {
  const config = {
    method: "delete",
    url: `${baseUrl}/${id}`,
  };
  return request(config);
};

const articlesService = { createArticle, updateArticle, deleteArticle };
export default articlesService;
