import { useMediaQuery } from "react-responsive";
import {
  starGroup,
  starGroupBig,
} from "../../../../assets/Courses/detailImages/courseDetailImages";
import { ratingStarIcon } from "../../../../assets/Courses/homeImages/coursesHomeImagesPaths";
import { testimonialData } from "../../../../utils/course";

const Reviews = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <section>
      <div className="px-5">
        <h2 className="font-miniHeader_weight text-xl">
          How students rated this courses
        </h2>
        <div className="flex flex-col items-center mt-6 md:flex-row md:items-end md:gap-4">
          <div className="md:flex md:flex-col md:items-center ">
            <span className="font-header_weight text-3xl pb-3 md:text-5xl">
              4.8
            </span>
            <img src={ratingStarIcon} alt="" />
            <div className="pb-4 text-gray">(Based on 144 reviews)</div>
          </div>
          {isDesktop ? (
            <img src={starGroupBig} alt="" />
          ) : (
            <img src={starGroup} alt="" />
          )}
        </div>
      </div>
      <hr className="h-0.5 bg-neutral-100 mt-6 " />

      {testimonialData.map((item, index) => (
        <div
          className={`border-b-neutral-100 border-b-2 ${
            index === testimonialData.length - 1 ? "border-b-0" : ""
          }`}
          key={index}
        >
          <div
            className={`flex gap-4 px-5 py-8 ${
              index === testimonialData.length - 1 ? "pb-0" : ""
            }`}
          >
            <img src={item.image} alt="" className="size-12" />
            <div className="">
              <h3 className="font-miniHeader_weight pb-1">{item.name}</h3>
              <img src={item.icon} alt="" />
              <p className="text-sm text-gray pt-4">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Reviews;
