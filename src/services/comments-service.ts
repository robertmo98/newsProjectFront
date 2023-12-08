import { request } from "../components/utils/axios-interceptors";
import { CommentPostProps } from "../@Types";

const baseUrl = "http://localhost:8080/api/v1/articles";

const createComment = (content: CommentPostProps, id: any) => {
  const config = {
    method: "post",
    url: `${baseUrl}/${id}/comments`,
    data: content,
  };
  return request(config);
};

const getComments = (id: any) => request({ url: `${baseUrl}/${id}/comments` });

const deleteComment = (id: any) => {
  const config = {
    method: "delete",
    url: `http://localhost:8080/api/v1/comments/${id}`,
  };
  return request(config);
};

const commentsService = { createComment, getComments, deleteComment };
export default commentsService;
