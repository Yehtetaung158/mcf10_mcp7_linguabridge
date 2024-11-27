import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <Link to="/" className=" size-24 flex items-center justify-center ">
        <Logo/>
      </Link>
      <div className="flex gap-4 items-center justify-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className=" flex gap-4 items-center justify-center">
        <NavLink to="/become-an-instructor">Become an Instructor</NavLink>
        <button>Login</button>
        <div />
      </div>
    </nav>
  );
};

export default Header;
