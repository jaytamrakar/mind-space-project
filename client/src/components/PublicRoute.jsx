import React from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
    if (localStorage.getItem("token")) {
        return <Navigate to="/" />;
    } else {
        return children;
    }
}
// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// export default function PublicRoute({ children }) {
//   const isAuthenticated = useSelector((state) => state.user.user !== null);

//   if (isAuthenticated) {
//     return <Navigate to="/" />;
//   } else {
//     return children;
//   }
// }
