import React, { useState } from "react";
import videoIcon from "../../../../assets/Courses/detailImages/videoIcon.png";
import AccordionButton from "./AccordionButton"; 

const Contents = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const contents = [
    {
      title: "Content 1",
      content: [
        { text: "Welcome to Korean Language Learning", duration: "10 mins" },
        { text: "Why Learn Korean? An Overview", duration: "12 mins" },
        {
          text: "Understanding the Korean Alphabet (Hangul)",
          duration: "15 mins",
        },
        { text: "Korean Pronunciation Basics", duration: "8 mins" },
      ],
    },
    {
      title: "Content 2",
      content: [
        { text: "Basic Korean Grammar Structures", duration: "20 mins" },
        { text: "Subject-Object-Verb Sentence Order", duration: "18 mins" },
        { text: "Polite Forms of Korean Speech", duration: "16 mins" },
        { text: "Verb Conjugation in Korean", duration: "25 mins" },
      ],
    },
    {
      title: "Content 3",
      content: [
        { text: "Common Korean Vocabulary for Beginners", duration: "10 mins" },
        { text: "Numbers and Counting in Korean", duration: "8 mins" },
        {
          text: "Basic Korean Phrases for Daily Conversations",
          duration: "15 mins",
        },
        { text: "Greetings and Introductions in Korean", duration: "12 mins" },
      ],
    },
    {
      title: "Content 4",
      content: [
        {
          text: "Mastering Korean Pronunciation: Vowels and Consonants",
          duration: "20 mins",
        },
        { text: "Understanding Korean Particles", duration: "18 mins" },
        { text: "Using Honorifics in Korean", duration: "14 mins" },
        {
          text: "Korean Sentence Structures Beyond Basics",
          duration: "22 mins",
        },
      ],
    },
    {
      title: "Content 5",
      content: [
        { text: "Korean Idiomatic Expressions", duration: "15 mins" },
        { text: "Traveling in Korea: Useful Phrases", duration: "12 mins" },
        { text: "Ordering Food in Korean", duration: "10 mins" },
        { text: "Shopping and Bargaining in Korean", duration: "18 mins" },
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index); 
  };

  return (
    <div className="space-y-4 px-4">
      {contents.map((item, index) => (
        <div key={index} className="w-full">
          <div className="p-4 border-b border-neutral-200">
            <AccordionButton
              title={item.title}
              isOpen={activeIndex === index}
              onToggle={() => toggleAccordion(index)}
              id={`content-${index}`} 
            />
            <div
              id={`content-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul className="p-4 pl-8 rounded-md space-y-4">
                {item.content.map((subItem, subIndex) => (
                  <li key={subIndex} className="mb-2 text-neutral-500 flex gap-2 items-center">
                    <img src={videoIcon} alt="video icon" className="w-5 h-5" />
                    <span className="flex-1 text-base">{subItem.text}</span>
                    <span className="text-sm text-neutral-400 ml-2">
                      ({subItem.duration})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contents;
