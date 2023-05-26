import React, { useState } from "react";
import { useFormik } from "formik";
import { applyForDoctorValidationSchema } from "../../../schemas"
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useSelector } from "react-redux";

const ApplyForDoctor = () => {


    const { user } = useSelector((state) => state.user);

    // const [uploadedImage, setUploadedImage] = useState(null);

    // const handleImageUpload = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //             setUploadedImage(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    const initialValues = {
        firstName: user && user.firstName ? user.firstName : '',
        lastName: user && user.lastName ? user.lastName : '',
        // image: "",
        email: user && user.email ? user.email : '',
        language: "",
        website: "",
        experience: "",
        expertise: "",
        qualification: "",
        specialization: "",
        // timeslot: "",

        // add more fields here as needed
    };


    const applyForDoctor2 = async (values) => {
        try {
            const response = await axios.post('http://localhost:8080/api/user/applyDoctor', values);
            const { success, message, doctorId } = response.data;

            if (success) {
                toast.success(message);
                // return setMyData(doctorId);
            } else {
                // console.error(error);
                throw new Error(message);
            }
        } catch (error) {
            console.error(error);
            // return setIsError(error.message);
        }
    };


    const applyForDoctor = async (values) => {
        try {

            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            };

            const response = await axios.post('http://localhost:8080/api/user/applyDoctor',

                ...values

                ,
                config
            );

            const { success, message, doctorId } = response.data;

            if (success) {
                console.log('Success', success);
                // return setMyData(doctorId);
            } else {
                console.log('Error', message)
                throw new Error(message);
            }
        } catch (error) {
            console.log('Error',error);
            // return setIsError(error.message);
        }
    };
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues: initialValues,
            validationSchema: applyForDoctorValidationSchema,
            onSubmit: (values, action) => {
                console.log(values);
                applyForDoctor(values);
                // action.resetForm();
            },
        });

    return (
        <div className="flex justify-center my-5">
            <form className="w-full max-w-5xl" onSubmit={handleSubmit}>
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

                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${touched.firstName && errors.firstName
                                ? "border-red-500"
                                : "border-gray-200"
                                } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        // readOnly
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
                        // readOnly
                        />
                        {touched.lastName && errors.lastName && (
                            <p className="text-red-500 text-xs italic">{errors.lastName}</p>
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
                        // readOnly
                        />
                        {touched.email && errors.email && (
                            <p className="text-red-500 text-xs italic">{errors.email}</p>
                        )}
                    </div>
                </div>

                {/* <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label htmlFor="image" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Image
                        </label>
                        <div className="flex items-center">
                            <div className="rounded-full overflow-hidden border border-gray-200">
                                {uploadedImage ? (
                                    <img src={uploadedImage} alt="Uploaded Image" className="w-20 h-20" />
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-20 w-20 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 2a4 4 0 110 8 4 4 0 010-8zm0 1a3 3 0 100 6 3 3 0 000-6zm6.5 10.3c-.7-.5-1.4-1.1-1.9-1.8l-.7-.7C14.2 10.5 14 9.8 14 9V8.7c.3-1.9-1.1-3.5-3-3.8h-.1c-1.9.3-3.4 1.9-3.2 3.8V9c0 .8-.2 1.5-.5 2.2l-.7.7c-.6.6-1.2 1.3-1.9 1.8-.4.3-.7.7-.7 1.2V16h14v-1.5c0-.5-.3-.9-.7-1.2zM4 9c0-1.7 1.3-3 3-3s3 1.3 3 3v.7C9.2 10.3 9 9.7 9 9V8.7c0-1.1-.9-2-2-2s-2 .9-2 2V9zm6 6H5v-1h5v1zm0-2H5V9h5v4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </div>
                            <div className="ml-3">
                                <label htmlFor="image" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                                    Upload Image
                                </label>
                                <input
                                    id="image"
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    className="hidden"
                                    value={values.displayPicture}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        {touched.image && errors.image && (
                            <p className="text-red-500 text-xs italic">{errors.image}</p>
                        )}
                    </div>
                </div> */}

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
            <ToastContainer />
        </div>
    );
}
export default ApplyForDoctor
