import React, { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems"
import { useSelector } from "react-redux";

const Sidebar = () => {

  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const { user } = useSelector((state) => state.user);

  const userType = user?.isDoctor
    ? "doctor"
    : user?.isAdmin
      ? "admin"
      : "user";

  const items = MenuItems[userType];

  return (
    <div className={`flex ${open ? "w-72" : "w-20"} bg-violet-950 h-screen p-5 pt-8 relative transition-all duration-300`}>
      <div
        className={`absolute cursor-pointer right-3 top-9 w-7 border-dark-purple border-2 rounded-full transform ${!open && "rotate-180"}`}
        onClick={toggleSidebar}
      >
        {open ? <BiLeftArrow /> : <BiRightArrow />}
      </div>
      <ul className="pt-6">
        {items.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
              }`}
          >
            {open && <Menu.icon className="text-white" />}
            <Link to={Menu.link} className={`${!open && "hidden"} origin-left duration-200 text-white`}>
              {Menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
