import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);

  const formik = useFormik({
    initialValues: {
      email: "",
      feedback: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter your email"),
      feedback: Yup.string().required("Feedback is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data:", { ...values, rating });
    },
  });

  return (
    <>
      {/* component */}
      <section>
        <div className="bg-slate-300 text-black py-20">
          <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 p-8">
              {/* <p className="ml-6 text-violet-600 text-lg uppercase tracking-loose">
              REVIEW
            </p> */}
              <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
                Leave us a feedback!
              </p>
              <p className="text-sm md:text-base leading-snug text-black text-opacity-100">
                Please provide your valuable feedback and something something
                ...
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-2/3 justify-center">
              <div className="container w-full px-4">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                      <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl mb-4 text-black font-semibold">
                          Have a suggestion?
                        </h4>
                        <form id="feedbackForm" onSubmit={formik.handleSubmit}>
                          <div className="w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className={`border-0 px-3 py-3 rounded text-sm shadow w-full
                bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
                              placeholder=" "
                              style={{ transition: "all 0.15s ease 0s" }}
                              required=""
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                              <div className="text-red-500 text-xs mt-1">
                                {formik.errors.email}
                              </div>
                            ) : null}
                          </div>
                          <div className="w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="message"
                            >
                              Message
                            </label>
                            <textarea
                              maxLength={300}
                              name="feedback"
                              id="feedback"
                              rows={4}
                              cols={80}
                              className={`border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full ${
                                formik.touched.feedback &&
                                formik.errors.feedback
                                  ? "border-red-500"
                                  : ""
                              }`}
                              placeholder=""
                              required=""
                              defaultValue={formik.values.feedback}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.feedback &&
                            formik.errors.feedback ? (
                              <div className="text-red-500 text-xs mt-1">
                                {formik.errors.feedback}
                              </div>
                            ) : null}
                          </div>
                          <div className="w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              htmlFor="rating"
                            >
                              Rating
                            </label>
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((value) => (
                                <label
                                  key={value}
                                  htmlFor={`rating-${value}`}
                                  className={`text-xl ${
                                    rating >= value
                                      ? "text-yellow-400"
                                      : "text-gray-400"
                                  }`}
                                >
                                  ★
                                  <input
                                    type="radio"
                                    id={`rating-${value}`}
                                    name="rating"
                                    value={value}
                                    className="sr-only"
                                    checked={rating === value}
                                    onChange={() => setRating(value)}
                                  />
                                </label>
                              ))}
                            </div>
                          </div>
                          <div className="text-center mt-6">
                            <button
                              id="feedbackBtn"
                              className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="submit"
                              style={{ transition: "all 0.15s ease 0s" }}
                              disabled={!formik.isValid || formik.isSubmitting}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedbackForm;
