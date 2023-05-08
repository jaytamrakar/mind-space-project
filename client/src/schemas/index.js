import * as Yup from "yup";

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;

export const signUpValidationSchema = Yup.object({
    name: Yup.string()
        .min(3, "Please enter you real name")
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
            then: Yup.string().oneOf(
                [Yup.ref("password"), null],
                "Password does not match"
            ),
        }),
});
