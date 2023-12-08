import { useState } from "react";
import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import Spinner from "../components/spinner/Spinner";
import articlesService from "../services/articles-service";
import Swal from "sweetalert2";

const PostArticle = () => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const validationSchema = Yup.object({
    title: Yup.string().min(6).required(),
    category: Yup.string().required(),
    content: Yup.string().min(128).required(),
    secondaryTitle: Yup.string(),
    mainImg: Yup.string(),
    mainImgDescription: Yup.string(),
    mainImgCredit: Yup.string(),
    secondImg: Yup.string(),
    secondImgDescription: Yup.string(),
    secondImgCredit: Yup.string(),
  });

  const initialValues = {
    title: "",
    category: "",
    content: "",
    secondaryTitle: "",
    mainImg: "",
    mainImgDescription: "",
    mainImgCredit: "",
    secondImg: "",
    secondImgDescription: "",
    secondImgCredit: "",
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(formData) => {
        setLoading(true);
        setError(undefined);

        const articleData = {
          title: formData.title,
          category: formData.category,
          content: formData.content,
          secondaryTitle: formData.secondaryTitle,
          mainImg: formData.mainImg,
          mainImgDescription: formData.mainImgDescription,
          mainImgCredit: formData.mainImgCredit,
          secondImg: formData.secondImg,
          secondImgDescription: formData.secondImgDescription,
          secondImgCredit: formData.secondImgCredit,
        };

        articlesService
          .createArticle(articleData)
          .then((res) => {
            Swal.fire({
              title: "Article posted successfully",
              icon: "success",
              timer: 2000,
            });
            // get the article id and redirect to article's page.
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
        {loading && <Spinner title="" />}
        {error && (
          <p className="text-red-500 flex justify-center w-fit mx-auto px-10 py-5 mt-4 rounded-3xl italic shadow-md">
            {error}
          </p>
        )}

        <div className="bg-white shadow-md rounded-lg my-2 lg:w-1/2 mx-auto p-4 flex flex-col gap-2 dark:bg-slate-400">
          <div className="font-extralight text-lg  my-2 form-group  gap-1 flex flex-col">
            <label htmlFor="title">Title:</label>
            <Field
              className="px-2 py-1 rounded-md border-blue-300 border-2  "
              placeholder="title..."
              name="title"
              type="text"
              id="title"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="font-extralight text-lg  my-2 form-group  gap-1 flex flex-col">
            <label htmlFor="category">Category:</label>
            <Field
              className="font-extralight text-lg  my-2 form-group  gap-1 flex flex-col border-2 border-blue-300 rounded-md"
              name="category"
              as="select"
            >
              <option value="">Choose...</option>
              <option value="biology">Biology</option>
              <option value="chemistry">Chemistry</option>
              <option value="physics">Physics</option>
              <option value="space">Space</option>
              <option value="tech">Tech</option>
            </Field>
            <ErrorMessage
              name="category"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="font-extralight text-lg  my-2 h- form-group  gap-1 flex flex-col">
            <label htmlFor="content">Article content:</label>
            <Field
              className="px-2 py-1 rounded-md border-blue-300 border-2 h-64"
              as="textarea"
              placeholder="content..."
              name="content"
              type="content"
              id="content"
            />
            <ErrorMessage
              name="content"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="font-extralight text-lg  my-2 form-group  gap-1 flex flex-col">
            <label htmlFor="secondaryTitle">Secondary title:</label>
            <Field
              className="px-2 py-1 rounded-md border-blue-300 border-2"
              placeholder="secondaryTitle..."
              name="secondaryTitle"
              type="text"
              id="secondaryTitle"
            />
          </div>

          <div className="font-extralight text-lg  my-2 form-group  gap-1 flex flex-col">
            <label htmlFor="mainImg">Main Image URL</label>
            <Field
              className="px-2 py-1 rounded-md border-blue-300 border-2"
              placeholder="Main image URL..."
              name="mainImg"
              type="text"
              id="mainImg"
            />
          </div>

          <div className="font-extralight text-lg  my-2 form-group  gap-1 flex flex-col">
            <label htmlFor="mainImgDescription">Main image description</label>
            <Field
              className="px-2 py-1 rounded-md border-blue-300 border-2"
              placeholder="Main image description..."
              name="mainImgDescription"
              type="text"
              id="mainImgDescription"
            />
          </div>

          <div className="font-extralight text-lg  my-2 form-group  gap-1 flex flex-col">
            <label htmlFor="mainImgCredit">Main image credits</label>
            <Field
              className="px-2 py-1 rounded-md border-blue-300 border-2"
              placeholder="Main image credits..."
              name="mainImgCredit"
              type="text"
              id="mainImgCredit"
            />
          </div>

          <div className="font-extralight text-lg  my-2 form-group  gap-1 flex flex-col">
            <label htmlFor="secondImg">Second Image URL</label>
            <Field
              className="px-2 py-1 rounded-md border-blue-300 border-2"
              placeholder="Second image URL..."
              name="secondImg"
              type="text"
              id="secondImg"
            />
          </div>

          <div className="font-extralight text-lg  my-2 form-group  gap-1 flex flex-col">
            <label htmlFor="secondImgDescription">
              Second Image description
            </label>
            <Field
              className="px-2 py-1 rounded-md border-blue-300 border-2"
              placeholder="Second image description..."
              name="secondImgDescription"
              type="text"
              id="secondImgDescription"
            />
          </div>

          <div className="font-extralight text-lg  my-2 form-group  gap-1 flex flex-col">
            <label htmlFor="secondImgCredit">Second image credits</label>
            <Field
              className="px-2 py-1 rounded-md border-blue-300 border-2"
              placeholder="Second image credits..."
              name="secondImgCredit"
              type="text"
              id="secondImgCredit"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="disabled:bg-blue-200 rounded text-white px-3 py-2 w-full bg-blue-400"
          >
            Publish
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default PostArticle;
