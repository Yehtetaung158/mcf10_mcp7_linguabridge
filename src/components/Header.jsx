import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
// const wave = "../src/assets/Become an instructor/wave.svg";
import wave from "../assets/Become an instructor/wave.svg";
import Dropdown from "./nav/Dropdown";
import userIcon from "../assets/icons/navigation/User.svg";
import menuIcon from "../assets/icons/navigation/hamburger_menu.svg";


const Header = () => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full relative">
      <img src={wave} alt="wave" className="absolute top-0 left-3" />
      <div className="flex justify-between items-center text-neutral-900 px-2 h-[80px] max-w-[1208px] mx-auto">
        <Link to="/" className="size-24 flex items-center justify-center">
          <Logo theme={"dark"} />
        </Link>
        <div className="gap-4 items-center justify-center hidden md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <NavLink to="/become-an-instructor" className="hidden md:flex">
            Become an Instructor
          </NavLink>
          <div className="flex gap-2 items-center justify-center relative">
            <Link to={"/login"}>
              <img src={userIcon} alt="userIcon" />
            </Link>
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
              ref={buttonRef}
            >
              <img src={menuIcon} alt="menuIcon" />
            </button>
            {open && (
              <div ref={dropdownRef}>
                {/* <Dropdown setOpen={setOpen} /> */}
                <Dropdown setOpen={setOpen} />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
