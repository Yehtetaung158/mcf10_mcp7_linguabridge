import React from "react";
import Container from "../../../components/Container";
import AddressSection from "./components/AddressSection";
import MessageBox from "./components/MessageBox";
import FaqSection from "./components/FaqSection";

const ContactPage = () => {
  return (
    <>
      <Container>
        <AddressSection />
        <MessageBox />
        <FaqSection />
      </Container>
    </>
  );
};

export default ContactPage;
