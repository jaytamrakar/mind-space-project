import { useState } from "react";
import { BiAlarmExclamation, BiAlarmAdd, BiAdjust, BiAddToQueue, BiAbacus,BiLeftArrow,BiRightArrow } from "react-icons/bi";
import {  RiCreativeCommonsSaLine } from "react-icons/ri";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Profile", icon: BiAlarmExclamation },
    { title: "Apply for Doctor", icon: RiCreativeCommonsSaLine },
    { title: "Appointments", icon: BiAlarmExclamation, gap: true },
    { title: "Schedule", icon: BiAlarmAdd },
    { title: "Search", icon: BiAdjust },
    { title: "Analytics", icon: BiLeftArrow },
    { title: "Files", icon: BiAbacus, gap: true },
    { title: "Settings", icon: BiAddToQueue },
  ];

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={`flex ${open ? "w-72" : "w-20"} bg-violet-950 h-screen p-5 pt-8 relative duration-300`}>
        <div
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={toggleSidebar}
        >
          {open ? <BiLeftArrow /> : <BiRightArrow />}
        </div>
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            alt=""
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          />
          {/* <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
            Designer
          </h1> */}
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white"}`}
            >
              {open && <Menu.icon className="text-white" />}
              <span className={`${!open && "hidden"} origin-left duration-200 text-white`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
      </>
  );
};

export default Sidebar;
