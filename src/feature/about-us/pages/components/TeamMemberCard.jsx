import React from "react";

const TeamMemberCard = ({ image, name, role }) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full mb-4 object-cover shadow-md"
        />

        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>

        <div className="flex gap-3 mt-4">
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <i>hello</i>
          </a>

          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <i className="fab fa-instagram text-black"></i>
          </a>

          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <i className="fab fa-twitter text-black"></i>
          </a>

          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300"
          >
            <i className="fab fa-linkedin-in text-black"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
