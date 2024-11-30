import React from "react";

const Logo = ({ theme }) => {
  return (
    <>
      {theme === "dark" ? (
        <img src="../src/assets/logo.png" alt="logo" />
      ) : (
        <img src="src/assets/logo_light.png" alt="logo" />
      )}
    </>
  );
};

export default Logo;
