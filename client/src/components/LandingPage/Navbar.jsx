import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {logoutUser} from '../../redux/features/userSlice';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.user.user !== null);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    toast.success("Logout Successfully", "Successfully logged out");
    localStorage.clear();
  };

  return (
    <nav className="w-full bg-white drop-shadow-md sticky top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="font-bold text-3xl">
          Mind Space
        </Link> 
        <ul
          className="bg-white flex justify-between items-center flex-col gap-5 text-gray-400 absolute overflow-y-scroll w-full left-0 top-20 px-6 transition-all duration-500 ease-out h-0 md:static md:flex-row md:h-auto md:top-auto md:overflow-auto md:justify-center md:w-fit"
          id="navbar-menu"
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/doctors">Doctors</Link>
        </ul>
        <div className="flex">
          {isAuthenticated ? (
            <>
              <Link
                className="bg-blue-700 transition-colors hover:bg-blue-800 text-white py-2 px-7 mr-2 rounded-md hidden md:block"
                to="/dashboard"
              >
                Dashboard
              </Link>
              <Link to="/"
                onClick={logoutHandler}
                className="bg-indigo-600 transition-colors hover:bg-blue-800 text-white py-2 px-7 rounded-md hidden md:block"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                className="bg-blue-700 transition-colors hover:bg-blue-800 text-white py-2 px-7 mr-2 rounded-md hidden md:block"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="bg-indigo-600 transition-colors hover:bg-blue-800 text-white py-2 px-7 rounded-md hidden md:block"
                to="/signup"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
        <button className="md:hidden" id="menu-btn">
          <i className="fas fa-bars text-2xl md:hidden"></i>
        </button>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
