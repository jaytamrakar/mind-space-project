import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginValidationSchema } from "../../schemas/index.js";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { showLoading ,hideLoading } from "../../redux/features/alertSlice.js";


const initialValues = {
  email: "",
  password: "",
};


const verifyPassword = async (values, navigate, dispatch) => {
  try {
    toast.dark("Checking the details...");
    dispatch(showLoading());
    const res = await axios.post('api/user/login', values);
    dispatch(hideLoading());
    if (res.status === 200) {
      if (res.data.success) {
        toast.success(res.data.message);
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      } else {
        console.log("Error:", res.data.message);
        toast.error(res.data.message);
      }
    } else if (res.status === 404) {
      console.log("User not found:", res.data.message);
      toast.error("User not found");
    } else if (res.status === 412) {
      console.log("Invalid Email or Password:", res.data.message);
      toast.error("Invalid Email or Password");
    } else if (res.status === 500) {
      console.error("Internal Server Error:", res.data.message);
      toast.error("An error occurred. Please try again.");
    } else {
      console.error("Unhandled Error:", res.data.message);
      toast.error("An error occurred. Please try again.");
    }
  } catch (error) {
    dispatch(hideLoading());
    if (error.response) {
      console.error("Server Error:", error.response.data.message);
      toast.error(error.response.data.message);
    } else if (error.request) {
      console.error("Network Error:", error.message);
      toast.error("Network error occurred. Please try again.");
    } else {
      console.error("Unhandled Error:", error.message);
      toast.error("An error occurred. Please try again.");
    }
  }
}


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      validateOnBlur: true,
      initialValues: initialValues,
      validationSchema: loginValidationSchema,
      onSubmit: async (values, action) => {
        console.log(values);
        
        verifyPassword(values, navigate, dispatch);
        
        action.resetForm();
      }
      ,
    })

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your Email"
                    // required
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
                      placeholder="Enter your Password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      // required
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

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-default"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <Link to='/forgetpassword' className="text-sm font-medium text-primary-600 hover:underline text-violet-900">Forgot password</Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-violet-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Not a user? Don't hesitate to
                  <span className="ml-2">
                    <Link
                      to="/signup"
                      className="font-medium text-violet-600 hover:underline "
                    >
                      Sign up
                    </Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
        {/* <Toaster /> */}
      </section>
    </>
  );
};

export default Login;
