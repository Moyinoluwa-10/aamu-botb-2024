// react & redux
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { MyTextInput } from "../components/FormComponents";
import NFL1 from "../assets/images/nfl1.webp";
import NFL2 from "../assets/images/nfl2.webp";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const toastID = toast.loading("Submitting...");
          axios
            .post(`${import.meta.env.VITE_API_URL}/api/v1/auth/signin`, values)
            // eslint-disable-next-line
            .then((response) => {
              toast.success("Sign in successful", {
                id: toastID,
              });
              localStorage.setItem("user", response.data.user);
              setSubmitting(false);
              navigate("/");
              resetForm();
            })
            // eslint-disable-next-line
            .catch((error) => {
              toast.error("Incorrect email or password", {
                id: toastID,
              });
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid min-h-screen place-items-center bg-primary px-5 py-10">
            <div className="max-w-md w-full  pt-0 bg-white rounded-md">
              <div className="grid grid-cols-2 text-center border-b border-b-gray-400 mb-5">
                <Link to="/sign-up" className="py-5">
                  Sign Up
                </Link>
                <Link
                  to="/sign-in"
                  className="py-5 border-b-2 border-b-form text-form"
                >
                  Sign In
                </Link>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-center gap-10 mb-7">
                  <img src={NFL1} alt="" />
                  <img src={NFL2} alt="" />
                </div>
                <h1 className="text-center font-semibold text-2xl mb-1">
                  Sign In to Your NFL Account
                </h1>
                <h1 className="mb-10 text-center">
                  Sign in with your email and password
                </h1>

                <div>
                  <div className="mb-7">
                    <MyTextInput
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      label={"Email"}
                    />
                  </div>
                  <div className="mb-7">
                    <MyTextInput
                      name="password"
                      type="password"
                      placeholder="Enter password"
                      label={"Password"}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mb-4 mt-3 py-3 px-5 transition-all duration-200 text-form font-semibold rounded-3xl border border-form"
                  disabled={isSubmitting}
                >
                  Sign In
                </button>
                <div>
                  <p className="text-center text-sm">
                    Don't have an account?{" "}
                    <Link
                      to={"/sign-up"}
                      className="text-form hover:underline transition-all"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
