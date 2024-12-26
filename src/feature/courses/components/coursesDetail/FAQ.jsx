import React, { useState } from "react";
import AccordionButton from "./AccordionButton";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqContents = [
    {
      question: "Who is this course for?",
      answer:
        "This course is designed for complete beginners who want to start learning Korean from scratch. It’s also suitable for anyone looking to strengthen their basics.",
    },
    {
      question: "Do I need any prior experience to take the course?",
      answer:
        "No prior experience is necessary. The course starts with the Korean alphabet (Hangul) and gradually introduces essential vocabulary and basic sentence structures.",
    },
    {
      question: "How long will it take to complete the course?",
      answer:
        "The duration depends on how much time you dedicate. On average, it can take 4-6 weeks to complete, but you can go at your own pace.",
    },
    {
      question: "Will I receive a certificate after completing the course?",
      answer:
        "Yes, upon successful completion of the course, you will receive a certificate of completion to showcase your achievement.",
    },
    {
      question: "What topics are covered in this course?",
      answer:
        "The course includes lessons on the Korean alphabet (Hangul), essential vocabulary, basic grammar, simple sentence structures, and everyday phrases.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index); 
  };

  return (
    <div className="space-y-4 px-4">
      {faqContents.map((item, index) => (
        <div key={index} className="w-full">
          <div className="p-4 border-b border-neutral-200">
            <AccordionButton
              title={item.question}
              isOpen={activeIndex === index}
              onToggle={() => toggleAccordion(index)}
              id={`faq-${index}`}
            />
            <div
              id={`faq-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="">
                <p className="mt-2 text-neutral-500">{item.answer}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
