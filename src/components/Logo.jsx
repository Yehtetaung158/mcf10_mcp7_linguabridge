import React from "react";

const Logo = ({ theme, className = "" }) => {
  const logoSrc =
    theme === "dark" ? "src/assets/logo.png" : "src/assets/logo_light.png";
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
