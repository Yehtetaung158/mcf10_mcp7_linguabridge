import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({setOpen}) => {
  return (
    <div
      id="dropdown"
      className="z-10 absolute md:hidden top-12 right-0 bg-primary-color divide-y divide-gray-100 rounded-lg shadow w-[320px] h-[440px] flex items-center justify-cennter px-8"
    >
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200  flex flex-col justify-around h-4/5 w-4/5"
        aria-labelledby="dropdownDefaultButton"
      >
        <NavLink
          to="/"
      
      onClick={()=>setOpen(false)}    className={({ isActive }) =>
            `block px-4 py-2 ${
              isActive ? "text-neutral-900" : " text-neutral"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/courses"
          onClick={()=>setOpen(false)}
          className={({ isActive }) =>
            `block px-4 py-2 ${
              isActive ? "text-neutral-900" : " text-neutral"
            }`
          }
        >
          Courses
        </NavLink>
        <NavLink
          to="/about"
 
 onClick={()=>setOpen(false)}         className={({ isActive }) =>
            `block px-4 py-2 ${
              isActive ? "text-neutral-900" : " text-neutral"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          onClick={()=>setOpen(false)}
          className={({ isActive }) =>
            `block px-4 py-2 ${
              isActive ? "text-neutral-900" : " text-neutral"
            }`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/become-an-instructor"
          onClick={()=>setOpen(false)}
          className={({ isActive }) =>
            `block px-4 py-2 ${
              isActive ? "text-neutral-900" : " text-neutral"
            }`
          }
        >
          Become an Instructor
        </NavLink>
      </ul>
    </div>
  );
};

export default Dropdown;
