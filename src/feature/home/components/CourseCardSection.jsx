import React from "react";
import RatingStar from "../components/RatingStar";

const CourseCardSection = ({ course }) => {
  return (
    <div className="bg-white p-5 mb-5 rounded-lg shadow-md flex flex-col gap-2 border group">
      <img
        src={course.imgUrl}
        alt=""
        className="h-52 object-cover object-center"
      />
      <h3 className="font-bold text-lg  text-neutral-700 group-hover:text-cyan-600 duration-75">
        {course.title}
      </h3>
      <h3 className=" font-bold text-lg text-neutral-700 group-hover:text-cyan-600 duration-75">
        {course["sub-title"]}
      </h3>
      <div className="flex justify-between">
        <p className="inline-block">{course.name}</p>
        <p className="px-2 py-0.5 inline-block border bg-neutral-400 text-white rounded-md">
          {course.course}
        </p>
      </div>

      <div className="flex gap-2">
        <p className="inline-block">{course.rating}</p>
        <RatingStar />
      </div>

      <p className="group-hover:text-cyan-600 duration-75 text-pl_font_size font-miniHeader_weight">
        {course.fee}
      </p>
      <div className="border-b-2 mb-2"></div>

      <div className="flex justify-between items-center">
        <p className="inline-block">{course.hour}</p>
        <p className="inline-block ">{course.lecture}</p>
      </div>
    </div>
  );
};

export default CourseCardSection;
