import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContsxt";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Spinner from "../components/spinner/Spinner";
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
            Swal.fire(
              "Picture has been updated.\n Please re-login to the site",
              "",
              "success"
            );
            authService
              .changeProfilePic(profileData)
              .then((promise) => {
                updateProfilePic(promise.data.profilePic);
              })
              .catch((e) => {
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
      <div className="flex  justify-center">
        <div className="w-2/3 font-bold text-lg">
          <div>
            <h1 className="mt-6 dark:text-white ">Username: {username}</h1>
          </div>

          <Form>
            {loading && <Spinner title="" />}
            {error && (
              <p className="text-red-500 flex justify-center w-fit mx-auto px-10 py-5 mt-4 rounded-3xl italic shadow-md">
                {error}
              </p>
            )}
            <div className="bg-inherit bg-gray-200 my-2 w-fit rounded-lg mt-10">
              <div className="flex flex-col  my-2 form-group gap-2 dark:text-white">
                <label htmlFor="profilePic">Profile image (URL):</label>
                <Field
                  className="px-2 py-1 rounded-md border-blue-300 border-2"
                  placeholder="Profile image (URL)..."
                  name="profilePic"
                  type="text"
                  id="profilePic"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="disabled:bg-gray-400 rounded text-white px-3 py-2 w-full bg-gray-600 h-fit "
                >
                  Change profile picture
                </button>
                {/* error message for the input */}
                <ErrorMessage
                  name="profilePic"
                  component="div"
                  className="text-red-500"
                />
              </div>
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
                        Swal.fire("Something went wrong", "", "error");
                      })
                      .finally(() => {
                        authService.logout();
                        authService.reload();
                      });
                  }
                })
              }
              className="text-red-600 mt-10 p-2 border-2 border-red-400"
            >
              DELETE USER
            </button>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default UserProfile;
