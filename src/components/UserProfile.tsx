import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContsxt";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Spinner from "./spinner/Spinner";
import authService from "../services/auth-service";
import Swal from "sweetalert2";

const UserProfile = () => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const { updateProfilePic, username } = useContext(AuthContext);

  const validationSchema = Yup.object({
    profilePic: Yup.string().min(2).required(),
  });

  const intiailValues = {
    profilePic: "",
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={intiailValues}
      onSubmit={(formData) => {
        setLoading(true); //show progress spinner
        setError(undefined); //new round - clean slate
        const profileData = {
          profilePic: formData.profilePic,
        };

        Swal.fire({
          title: "Are you sure you want to change your profile picture?",
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: "Yes, change it",
          denyButtonText: "Cancel",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Picture has been updated", "", "success");
            authService
              .changeProfilePic(profileData)
              .then((promise) => {
                updateProfilePic(promise.data.profilePic);
              })
              .catch((e) => {
                console.log(e.response.data);
                setError("Something went wrong..");
              })
              .finally(() => {
                setLoading(false);
              });
          } else if (result.isDenied) {
            Swal.fire("Canceled", "", "info");
            setLoading(false);
          }
        });
      }}
    >
      <>
        <div>
          <h1>Username: {username}</h1>
        </div>

        <Form>
          {loading && <Spinner title="" />}
          {error && (
            <p className="text-red-500 flex justify-center w-fit mx-auto px-10 py-5 mt-4 rounded-3xl italic shadow-md">
              {error}
            </p>
          )}
          <div className="bg-white shadow-md rounded-lg my-2 w-1/2 mx-auto p-4 flex flex-col gap-2">
            <div className="font-extralight text-lg  my-2 form-group  gap-1 flex flex-col">
              <label htmlFor="profilePic">Profile image (URL):</label>
              <Field
                className="px-2 py-1 rounded-md border-blue-300 border-2"
                placeholder="Profile image (URL)..."
                name="profilePic"
                type="text"
                id="profilePic"
              />
              {/* error message for the input */}
              <ErrorMessage
                name="profilePic"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="disabled:bg-fuchsia-700/50 rounded text-white px-3 py-2 w-full bg-fuchsia-700"
            >
              Change profile picture
            </button>
          </div>
        </Form>
        <div>
          <button
            onClick={() =>
              Swal.fire({
                title:
                  "Are you sure? Your account will be permanently deleted!",
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: "No, DO-NOT delete my account.",
                denyButtonText: "Yes, delete my account.",
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire("Deletion is canceled", "", "info");
                } else if (result.isDenied) {
                  authService
                    .deleteUser()
                    .then(() => {
                      Swal.fire(
                        "Account has been deleted! You will now dissconect",
                        "",
                        "success"
                      );
                    })
                    .catch((e) => {
                      console.log(e.response.data);
                      Swal.fire("Something went wrong", "", "error");
                    })
                    .finally(() => {
                      authService.logout();
                      authService.reload();
                    });
                }
              })
            }
            className="text-red-600"
          >
            DELETE USER
          </button>
        </div>
      </>
    </Formik>
  );
};

export default UserProfile;
