import React from "react";
import { IoIosArrowUp } from "react-icons/io";

// Reusable AccordionButton Component
const AccordionButton = ({ title, isOpen, onToggle, id }) => (
  <button
    onClick={onToggle}
    className="w-full flex justify-between items-center text-left text-neutral-600 text-lg font-semibold"
    aria-expanded={isOpen}
    aria-controls={id}
  >
    <h1 className="truncate max-w-full">{title}</h1>
    <IoIosArrowUp
      className={`${
        isOpen ? "rotate-180" : ""
      } text-xl transition-transform duration-300 ease-in-out text-neutral-500`}
    />
  </button>
);

export default AccordionButton;
