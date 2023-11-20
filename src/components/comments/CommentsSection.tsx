import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { CommentProps } from "../../@Types";
import Comment from "./Comment";
import PostComment from "./PostComment";
import commentsService from "../../services/comments-service";

const CommentsSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const fetchComments = () => commentsService.getComments(id);
  const { isLoading, data: res } = useQuery("get-comments", fetchComments);
  const [comments, setComments] = useState([]);

  const[shouldReload, setShouldReload] = useState(0);

  const reload = () => {
    fetchComments()
    setShouldReload(shouldReload+1);
  };

  useEffect(() => {
    if (res && res.data) {
      setComments(res.data);
    }
  }, [res]);

  return (
    <div>
      <hr />
      <h2>Comments</h2>
      <PostComment refresh={reload}/>
      <hr />

      {comments?.map((comment: CommentProps) => (
        <Comment
          key={comment.id}
          id={comment.id}
          content={comment.content}
          user={comment.user}
          date={comment.date}
          refresh={reload}
        />
      ))}
    </div>
  );
};

export default CommentsSection;
