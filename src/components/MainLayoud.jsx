import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Container from "./Container";

const MainLayoud = () => {
  return (
    <Container>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Container>
  );
};

export default MainLayoud;
