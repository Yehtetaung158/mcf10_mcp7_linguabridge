import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CourseCard = ({
  courseImg,
  title,
  name,
  level,
  ratingCount,
  ratingStarImg,
  price,
  hour,
  min,
  clockIcon,
  bookIcon,
  path,
}) => {
  return (
    <Link
      to={`/courses/${path}`}
      className="shadow-lg border border-gray-300 rounded-md group "
    >
      <img
        src={courseImg}
        alt="course image"
        className="rounded-t-md h-[200px] lg:h-[238px] object-cover max-lg:object-contain size-full"
      />
      <div className="p-5 space-y-2.5">
        <h3 className="font-miniHeader_weight text-xl group-hover:text-primary-color">
          {title}
        </h3>
        <div className="flex justify-between items-center">
          <div className="text-gray">{name}</div>
          <div className="bg-neutral-600 text-white text-[12px] rounded-sm px-3 py-1">
            {level}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span>{ratingCount}</span>
          <img src={ratingStarImg} alt="start image" className="h-5" />
        </div>
        <div className="font-header_weight group-hover:text-primary-color">
          {price} Ks
        </div>
        <hr className="border-t-neutral-200" />
        <div className="flex justify-between text-xs text-gray">
          <div className="flex items-center gap-1">
            <img src={clockIcon} alt="clock icon" />
            <span>
              {hour} h {min} min
            </span>
          </div>
          <div className="flex items-center gap-1">
            <img src={bookIcon} alt="book icon" />
            <span>15 Lectures</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
