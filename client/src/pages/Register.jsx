// react & redux
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import {
  MyCheckbox,
  MySelect,
  MyTextInput,
} from "../components/FormComponents";
import NFL1 from "../assets/images/nfl1.webp";
import NFL2 from "../assets/images/nfl2.webp";
import axios from "axios";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          favoriteClub: "",
          termsAndConditions: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
          favoriteClub: Yup.string().required("Required"),
          termsAndConditions: Yup.boolean().oneOf(
            [true],
            "You must agree to the terms and conditions to submit the form"
          ),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const toastID = toast.loading("Submitting...");
          axios
            .post(`${import.meta.env.VITE_API_URL}/api/v1/auth/signup`, values)
            // eslint-disable-next-line
            .then((response) => {
              console.log(response.data);
              toast.success("Sign in successful", {
                id: toastID,
              });
              localStorage.setItem("user", response.data.user);
              setSubmitting(false);
              navigate("/sign-in");
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
                <Link
                  to="/sign-up"
                  className="py-5 border-b-2 border-b-form text-form"
                >
                  Sign Up
                </Link>
                <Link to="/sign-in" className="py-5">
                  Sign In
                </Link>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-center gap-10 mb-7">
                  <img src={NFL1} alt="" />
                  <img src={NFL2} alt="" />
                </div>
                <h1 className="text-center font-semibold text-2xl mb-1">
                  One Account is All You Need
                </h1>
                <h1 className="mb-10">
                  Get the latest news on your team, follow your favorite
                  players, and manage your subscriptions
                </h1>

                <div>
                  <div className="mb-7">
                    <MyTextInput
                      name="firstName"
                      type="text"
                      placeholder="Enter first name"
                      label={"First Name"}
                    />
                  </div>
                  <div className="mb-7">
                    <MyTextInput
                      name="lastName"
                      type="text"
                      placeholder="Enter last name"
                      label={"Last Name"}
                    />
                  </div>
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
                  <div className="mb-7">
                    <MySelect name="favoriteClub" label={"Favorite Club"}>
                      <option value="">Select favorite club</option>
                      <option value="chiefs">Chiefs</option>
                      <option value="packers">Packers</option>
                      <option value="49ers">49ers</option>
                    </MySelect>
                    <div className="text-red-500 text-sm">
                      <ErrorMessage name="favoriteClub" />
                    </div>
                  </div>

                  <div className="mb-7">
                    <MyCheckbox name="termsAndConditions">
                      <p>
                        I agree that the NFL, including member clubs, may send
                        me content, offers and all.
                      </p>
                    </MyCheckbox>
                    <div className="text-red-500 text-sm">
                      <ErrorMessage name="termsAndConditions" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mb-4 mt-3 py-3 px-5 transition-all duration-200 text-form font-semibold rounded-3xl border border-form"
                  disabled={isSubmitting}
                >
                  Create Account
                </button>
                <div>
                  <p className="text-center text-sm">
                    Already have an account?{" "}
                    <Link
                      to={"/sign-in"}
                      className="text-form hover:underline transition-all"
                    >
                      Sign in
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

export default Register;
