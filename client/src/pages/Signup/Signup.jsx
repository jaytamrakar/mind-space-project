import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpValidationSchema } from "../../schemas/index.js";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { showLoading ,hideLoading } from "../../redux/features/alertSlice.js";
import axios from 'axios';

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const registerUser = async (values, navigate) => {
  try {
    toast.dark("Checking the details...");
    const res = await axios.post('api/user/register', values);
    console.log(res);
    if (res.status === 201) {
      if (res.data.success) {
        toast.success(res.data.message);
        toast.success("Registered Successfully!");
        navigate("/login");
      } else {
        console.log("Error:", res.data.message);
        toast.error(res.data.message);
      }
    } else if (res.status === 404) {
      console.error("Conflict Error:", res.data.message);
      toast.error("Email already exists. Please use a different email.");
    } else if (res.status === 500) {
      console.error("Internal Server Error:", res.data.message);
      toast.error("An error occurred. Please try again later.");
    } else {
      console.error("Unhandled Error:", res.data.message);
      toast.error("An error occurred. Please try again.");
    }
  } catch (error) {
    if (error.response) {
      console.error("Server Error:", error.response.data.message);
      toast.error(error.response.data.message);
    }else if (error.request) {
      console.error("Network Error:", error.message);
      toast.error("Network error occurred. Please try again.");
    }else {
    console.error("Error:", error.message);
    toast.error("An error occurred. Please try again.");
    }
  }
};



const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpValidationSchema,
      onSubmit: (values, action) => {
        // console.log(values);
        dispatch(showLoading());
        registerUser(values, navigate);
        dispatch(hideLoading());
        // action.resetForm();
      },
    });

    const navigate = useNavigate();
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Welcome to Mind Space
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your Full Name"
                    autoComplete="off"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? (
                    <p className="text-xs text-red-700">{errors.name}</p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Yourname@email.com"
                    autoComplete="off"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="text-xs text-red-700">{errors.email}</p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      autoComplete="off"
                      placeholder="Enter Your Password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div
                      className="absolute inset-y-0 right-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-gray-500 dark:text-gray-400 cursor-pointer" />
                      ) : (
                        <FaEye className="text-gray-500 dark:text-gray-400 cursor-pointer" />
                      )}
                    </div>
                  </div>
                  {errors.password && touched.password ? (
                    <p className="text-xs text-red-700">{errors.password}</p>
                  ) : null}
                </div>

                <div className="input-block">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      autoComplete="off"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm Your Password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div
                      className="absolute inset-y-0 right-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash className="text-gray-500 dark:text-gray-400 cursor-pointer" />
                      ) : (
                        <FaEye className="text-gray-500 dark:text-gray-400 cursor-pointer" />
                      )}
                    </div>
                  </div>
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <p className="text-xs text-red-700">{errors.confirmPassword}</p>
                  ) : null}
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <Link to='/termsandconditions' className="font-medium text-violet-600 hover:underline dark:text-primary-500">Terms and Conditions</Link>
                    </label>
                  </div>
                </div>

                <div className="modal-buttons">
                  <button
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 bg-violet-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    type="submit"
                    onClick={()=> navigate('/otpverification')}
                  >
                    Registration
                  </button>
                </div>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-violet-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Signup;
