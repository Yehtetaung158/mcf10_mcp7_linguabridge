import React from "react";
import FirstSection from "./components/FirstSection";
import SecondSecting from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import Container from "../../../components/Container";

const AboutPage = () => {
  return (
    <>
      <Container>
        <FirstSection />
        <SecondSecting />
        <ThirdSection />
        <FourthSection />
      </Container>
    </>
  );
};

export default AboutPage;
