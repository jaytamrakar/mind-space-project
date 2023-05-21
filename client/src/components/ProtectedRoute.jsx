import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import { setUser } from "../redux/features/userSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ProtectedRoute({ children }) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    //get user
    // eslint-disable-next-line
    const getUser = async () => {
        try {
            dispatch(showLoading());
            const res = await axios.post(
                "/api/user/getUserData",
                { token: localStorage.getItem("token") },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            dispatch(hideLoading());
            if (res.data.success) {
                dispatch(setUser(res.data.data));
            } else {
                localStorage.clear();
                // <Navigate to="/login" />;
            }
        } catch (error) {
            localStorage.clear();
            dispatch(hideLoading());
            console.log(error);
            if (axios.isAxiosError(error)) {
                console.log(error.response.data); // Error response data
                console.log(error.response.status); // Error status code
                console.log(error.response.headers); // Error response headers

                // Handle specific errors based on the status code
                if (error.response.status === 401) {
                    toast.error("Unauthorized error occurred.");
                } else if (error.response.status === 400) {
                    toast.error("Bad request error occurred.");
                } else if (error.response.status === 500) {
                    toast.error("Internal server error occurred.");
                } else {
                    toast.error("An error occurred.");
                }
            } else {
                // Handle non-Axios errors
                console.log(error);
                toast.error("An error occurred.", error);
            }

        }
    };

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, [user, getUser]);

    if (localStorage.getItem("token")) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}
