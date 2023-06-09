import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


export default function ApplyForDoctor() {
  const initialValues = {
    firstName: "",
    lastName: "",
    image: "",
    email: "",
    language: "",
    website: "",
    experience: "",
    expertise: "",
    qualification: "",
    specialization: "",
    // timeslot: "",

    // add more fields here as needed
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Invalid input")
    .required("First Name is required"),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Invalid input")
    .required("Last Name is required"),
    image: Yup.mixed().required("Image is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    language: Yup.string()
      .matches(/^(?=.*[a-zA-Z])[\w\d]+$/, "Invalid input")
      .required("Language is required"),
    website: Yup.string().url("Invalid URL"),
    experience: Yup.string()
      // .matches(/^(?=.*[a-zA-Z])[\w\d]+$/, "Invalid input")
      .required("Experience is required"),
    expertise: Yup.string()
      // .matches(/^(?=.*[a-zA-Z])[\w\d]+$/, "Invalid input")
      .required("Expertise is required"),
    qualification: Yup.string()
      .matches(/^(?=.*[a-zA-Z])[\w\d]+$/, "Invalid input")
      .required("Qualification is required"),
    specialization: Yup.string()
      .matches(/^(?=.*[a-zA-Z])[\w\d]+$/, "Invalid input")
      .required("Specialization is required"),
    // timeslot: Yup.string().required("Time Slot is required"),
  });
  

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Add your form submission logic here
  // };

  const { values, handleBlur, handleChange, handleSubmit ,errors, touched} =
    useFormik({
      initialValues: initialValues,
      validationSchema,
      //validationSchema: signUpValidationSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="flex justify-center my-5">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="firstName"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="firstName"
              name="firstName"
              placeholder="First Name"
        
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                touched.firstName && errors.firstName
                  ? "border-red-500"
                  : "border-gray-200"
              } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.firstName && errors.firstName && (
              <p className="text-red-500 text-xs italic">{errors.firstName}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="lastName"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="lastName"
              name="lastName"
              placeholder="Last Name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.lastName && errors.lastName && (
              <p className="text-red-500 text-xs italic">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="image"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Image
            </label>
            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.image && errors.image && (
              <p className="text-red-500 text-xs italic">{errors.image}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="email"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="language"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Language
            </label>
            <input
              id="language"
              type="language"
              name="language"
              placeholder="Language"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={values.language}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.language && errors.language && (
              <p className="text-red-500 text-xs italic">{errors.language}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="website"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Website
            </label>
            <input
              id="website"
              type="text"
              name="website"
              placeholder="Website"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={values.website}
              onChange={handleChange}
              onBlur={handleBlur}
            />
           {touched.website && errors.website && (
              <p className="text-red-500 text-xs italic">{errors.website}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="experience"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Experience
            </label>
            <input
              id="experience"
              type="number"
              name="experience"
              placeholder="Experience"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={values.experience}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.experience && errors.experience && (
              <p className="text-red-500 text-xs italic">{errors.experience}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="expertise"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Expertise
            </label>
            <input
              id="expertise"
              type="text"
              name="expertise"
              placeholder="Expertise"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={values.expertise}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.expertise && errors.expertise && (
              <p className="text-red-500 text-xs italic">{errors.expertise}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="qualification"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Qualification
            </label>
            <input
              id="qualification"
              type="text"
              name="qualification"
              placeholder="Qualification"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={values.qualification}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.qualification && errors.qualification && (
              <p className="text-red-500 text-xs italic">{errors.qualification}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="specialization"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Specialization
            </label>
            <input
              id="specialization"
              type="text"
              name="specialization"
              placeholder="Specialization"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={values.specialization}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.specialization && errors.specialization && (
              <p className="text-red-500 text-xs italic">{errors.specialization}</p>
            )}
          </div>
        </div>

        {/* <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="timeSlot"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Time Slot
            </label>
            <input
              id="timeSlot"
              type="time"
              name="timeSlot"
              placeholder="Time Slot"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={values.timeslot}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div> */}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full min-w-full"
        >
          Apply
        </button>
      </form>
    </div>
  );
}
