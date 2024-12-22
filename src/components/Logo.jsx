import React from "react";
import lightLogo from "../assets/logo_light.png";
import darkLogo from "../assets/logo.png";

const Logo = ({ theme, className = "" }) => {
  const logoSrc =
    theme === "dark" ? darkLogo : lightLogo;
  const additionalClass = theme === "dark" ? "max-w-[93px]" : "";

  return (
    <img
      className={`${additionalClass} ${className}`}
      src={logoSrc}
      alt="logo"
    />
  );
};

export default Logo;
