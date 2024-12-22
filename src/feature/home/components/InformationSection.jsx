import React from "react";

const InformationSection = ({ imgUrl, color }) => {
  return (
    <div
      className={`border ${color} rounded-lg shadow-lg flex items-center justify-center sm:h-[170px] md:h-[150px] lg:h-[170px] xl:h-[150px] mb-5 w-full`}
    >
      <img
        src={imgUrl}
        alt="Centered Image"
        className="max-w-full max-h-full"
      />
    </div>
  );
};

export default InformationSection;
