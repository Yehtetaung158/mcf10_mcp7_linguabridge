/* eslint-disable react/prop-types */

import {
  heroImg,
  heroMobile,
  heroTablet,
} from "../../../../assets/Courses/homeImages/coursesHomeImagesPaths";

const CoursesHero = ({ text, image, title }) => {
  return (
    <section className="relative text-white bg-primary-color h-[250px] ">
      <img
        src={heroMobile}
        alt="hero image"
        className="transform scale-x-[-1] absolute left-0 top-0 sm:hidden"
      />
      <img
        src={heroTablet}
        alt="hero image"
        className="transform scale-x-[-1] absolute left-0 top-0 sm:block lg:hidden max-sm:hidden"
      />
      <img
        src={heroImg}
        alt="hero image"
        className="transform scale-x-[-1] absolute left-0 top-0 hidden lg:block"
      />

      <div className="flex flex-col justify-center items-center h-full w-[80%] mx-auto text-center">
        {image && <img src={image} alt="title image" className="pb-3 " />}
        {title && (
          <h2 className="font-miniHeader_weight text-3xl leading-10 pb-3">
            {title}
          </h2>
        )}
        {text && <p className="text-sm">{text}</p>}
      </div>
      <img
        src={heroMobile}
        alt="hero image"
        className="absolute top-0 right-0  sm:hidden"
      />
      <img
        src={heroTablet}
        alt="hero image"
        className="absolute top-0 right-0 sm:block lg:hidden max-sm:hidden"
      />
      <img
        src={heroImg}
        alt="hero image"
        className="absolute top-0 right-0 hidden lg:block"
      />
    </section>
  );
};

export default CoursesHero;
