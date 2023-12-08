import { ErrorMessage,Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Spinner from "../components/spinner/Spinner";
import authService from "../services/auth-service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Register = () => {

  const nav = useNavigate();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const validationSchema = Yup.object({
    username: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(6)
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?\W).{8,20}$/, "Password must contain at least one lowercase letter, one uppercase , a number, and a symbol")
      .required(),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={({ username, email, password }) => {
        setLoading(true); //show progress spinner
        setError(undefined); //new round - clean slate
        authService
          .register(username, email, password)
          .then((res) => {
            Swal.fire({
              title: "Registered successfully",
              icon: "success",
              timer: 2000,
            });
            //navigate
            nav("/login");
          })
          .catch((e) => {
            setError(e.response.data.message);
          })
          .finally(() => {
            setLoading(false);
          });
      }}
    >
      <Form>
      {error && (
          <p className="text-red-500 flex justify-center w-fit mx-auto px-10 py-5 mt-4 rounded-3xl italic shadow-md">
            {error}
          </p>
        )}
        {loading && <Spinner/>}
      <div className="bg-white shadow-md rounded-lg my-2 w-1/2 mx-auto p-4 flex flex-col gap-2">
        <div className="font-extralight text-lg my-2 form-group gap-1 flex flex-col">
          <label htmlFor="username">User name:</label>
          <Field
            className="px-2 py-1 rounded-md border-blue-300 border-2"
            placeHoldar="username..."
            name="username"
            type="text"
            id="username"
          />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500"
          />
        </div>

        <div className="font-extralight text-lg my-2 form-group gap-1 flex flex-col">
          <label htmlFor="email">Email address:</label>
          <Field
            className="px-2 py-1 rounded-md border-blue-300 border-2"
            placeHoldar="email..."
            name="email"
            type="email"
            id="email"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>

        <div className="font-extralight text-lg my-2 form-group gap-1 flex flex-col">
          <label htmlFor="password">password:</label>
          <Field
            className="px-2 py-1 rounded-md border-blue-300 border-2"
            placeHoldar="password..."
            name="password"
            type="password"
            id="password"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500"
          />
        </div>

        <button
            disabled={loading}
            className="bg-blue-400 disabled:bg-blue-200 rounded text-white px-3 py-2 w-full "
          >
            Register
          </button>
      </div>
      </Form>
    </Formik>
  );
};

export default Register;
