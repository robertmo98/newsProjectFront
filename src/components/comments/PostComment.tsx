import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import commentsService from "../../services/comments-service";
import Swal from "sweetalert2";
import Comment from "./Comment";
import { PostCommentProps } from "../../@Types";

const PostComment = (props: PostCommentProps) => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const { id } = useParams();

  const validationSchema = Yup.object({
    content: Yup.string().required(),
    id: Yup.number(),
  });

  const initialValues = {
    content: "",
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(formData) => {
        setLoading(true);
        setError(undefined);

        const commentData = {
          content: formData.content,
        };

        commentsService
          .createComment(commentData, id)
          .then((res) => {
            Swal.fire({
              title: "Comment posted successfully",
              icon: "success",
              timer: 2000,
            });
          })
          .catch((e) => {
            setError("something went wrong");
          })
          .finally(() => {
            setLoading(false);
            props.refresh();
          });
      }}
    >
      <Form>
        <div className="bg-white shadow-md rounded-lg my-2 w-1/2 mx-auto p-4 flex flex-col gap-2">
          <div className="font-extralight text-lg  my-2 form-group  gap-1 flex flex-col">
            <label htmlFor="">Comment:</label>
            <Field
              className="px-2 py-1 rounded-md border-blue-300 border-2"
              placeholder="comment..."
              name="content"
              type="text"
              id="content"
            />
            <ErrorMessage
              name="comment"
              component="div"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="disabled:bg-fuchsia-700/50 rounded text-white px-3 py-2 w-full bg-fuchsia-700"
          >
            Post Comment
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default PostComment;
