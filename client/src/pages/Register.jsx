// react & redux
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { MyCheckbox, MyTextInput } from "../components/FormComponents";
import NFL1 from "../assets/images/nfl1.webp";
import NFL2 from "../assets/images/nfl2.webp";

const Register = () => {
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
          termsAndConditions: Yup.boolean().oneOf(
            [true],
            "You must agree to the terms and conditions to submit the form"
          ),
        })}
        onSubmit={(values) => {
          console.log(values);
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
                    <MyTextInput
                      name="favoriteClub"
                      type="text"
                      placeholder="Enter favorite club"
                      label={"Favorite Club"}
                    />
                  </div>

                  <MyCheckbox name="termsAndConditions">
                    <p>
                      I agree that the NFL, including member clubs, may send me
                      content, offers and all.
                    </p>
                  </MyCheckbox>
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
