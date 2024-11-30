import React from "react";
import Instructor from "../../../../assets/About-Us/Instructor.png";
import TeamMemberCard from "./TeamMemberCard";
import person1 from "../../../../assets/About-Us/p1.png";
import person2 from "../../../../assets/About-Us/p2.png";
import person3 from "../../../../assets/About-Us/p3.png";

const FourthSection = () => {
  const teamMembers = [
    {
      image: person1, // Replace with actual image URL
      name: "Sophia Lim",
      role: "English Language Specialist",
    },
    {
      image: person2, // Replace with actual image URL
      name: "Aye Myat Khin",
      role: "Spanish Grammar Instructor",
    },
    {
      image: person3, // Replace with actual image URL
      name: "Aiko Tanaka",
      role: "Japanese Teacher",
    },
  ];
  return (
    <section>
      <div className=" flex flex-col items-center">
        <img src={Instructor} className="size-[12%]" alt="" />
        <div className=" text-4xl mb-4 font-miniHeader_weight font-header_font_style">
          Join With Us
        </div>
        <p className="opacity-25 text-ps_font_size">
          Learn from experienced instructors dedicated to guiding your language
          journey with expertise and care.
        </p>
      </div>
      <div className="max-w-6xl mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
