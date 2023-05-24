import * as Yup from "yup";

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;

export const signUpValidationSchema = Yup.object({
    name: Yup.string()
        .min(3, "Please enter you real name")
        .matches(/^[a-zA-Z]+$/, "Invalid input")
        .required("Please enter your name"),

    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter your email"),

    password: Yup.string()
        .matches(PASSWORD_REGEX, "Please enter a strong password")
        .min(6, "Password must be at least 6 characters")
        .required("Please enter your password"),

    confirmPassword: Yup.string()
        .required("Please confirm your password")
        .when("password", {
            is: (val) => (val && val.length > 0 ? true : false),
            then: () => Yup.string().oneOf(
                [Yup.ref("password"), null],
                "Password does not match"
            ),
        }),

    // confirmPassword: Yup.string()
    //     .required("Please confirm your password")
    //     .when("password", {
    //         is: (val) => val && val.length > 0,
    //         then: Yup.string().oneOf(
    //             [Yup.ref("password"), null],
    //             "Passwords must match"
    //         ),
    //     }),

});


export const loginValidationSchema = Yup.object({
    email: Yup.string()
        .required("Enter Your Email"),

    password: Yup.string()
        .required("Enter Your Password"),
});


export const applyForDoctorValidationSchema = Yup.object()
    .shape({
        firstName: Yup.string()
            .matches(/^[a-zA-Z]+$/, "Invalid input")
            .required("First Name is required"),

        lastName: Yup.string()
            .matches(/^[a-zA-Z]+$/, "Invalid input")
            .required("Last Name is required"),

        image: Yup.mixed()
            .required("Image is required"),

        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),

        language: Yup.string()
            .matches(/^(?=.*[a-zA-Z])[\w\d]+$/, "Invalid input")
            .required("Language is required"),
        website: Yup.string()
            .url("Invalid URL"),

        experience: Yup.number()
            // .matches(/^(?=.*[a-zA-Z])[\w\d]+$/, "Invalid input")
            .required("Experience is required"),

        expertise: Yup.string()
            .matches(/^(?=.*[a-zA-Z])[\w\d]+$/, "Invalid input")
            .required("Expertise is required"),

        qualification: Yup.string()
            .matches(/^(?=.*[a-zA-Z])[\w\d]+$/, "Invalid input")
            .required("Qualification is required"),

        specialization: Yup.string()
            .matches(/^(?=.*[a-zA-Z])[\w\d]+$/, "Invalid input")
            .required("Specialization is required"),

        // timeslot: Yup.string().required("Time Slot is required"),
    });