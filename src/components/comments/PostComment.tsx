import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import commentsService from "../../services/comments-service";
import Swal from "sweetalert2";
import { PostCommentProps } from "../../@Types";

const PostComment = (props: PostCommentProps) => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const { id } = useParams();

  const validationSchema = Yup.object({
    comment: Yup.string().max(164),
    id: Yup.number(),
  });

  const initialValues = {
    comment: "",
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(formData) => {
        setLoading(true);
        setError(undefined);

        const commentData = {
          content: formData.comment,
        };

        commentsService
          .createComment(commentData, id)
          .then((res) => {
            Swal.fire({
              title: "Comment posted successfully",
              icon: "success",
              timer: 2000,
            });
            setTimeout(() => window.location.reload(), 2000);
          })
          .catch((e) => {
            setError("something went wrong");
          })
          .finally(() => {
            setLoading(false);
          });
      }}
    >
      <Form>
        <div className="bg-white shadow-md rounded-lg my-2 w-2/3 mx-auto p-4 flex flex-col gap-2 dark:bg-slate-800">
          <div className="font-extralight text-lg  my-2 form-group  gap-1 flex flex-col">
            <label htmlFor="comment">Post a comment:</label>
            <Field
              className="px-2 py-1 rounded-md border-blue-300 border-2 dark:text-black"
              placeholder="comment..."
              name="comment"
              type="text"
              id="comment"
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
            className="disabled:bg-slate-300 rounded text-white px-3 py-2 w-full bg-slate-500 dark:bg-slate-600 "
          >
            Post Comment
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default PostComment;
