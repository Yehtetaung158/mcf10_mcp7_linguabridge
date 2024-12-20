import React from "react";
import certified from "../../../assets/Home/certified.png";
import heroImg from "../../../assets/Home/heroImg.png";
import online from "../../../assets/Home/online.png";
import student from "../../../assets/Home/student.png";
import svg from "../../../assets/Home/SVG.svg";
import tutor from "../../../assets/Home/tutor.png";
import InformationSection from "./InformationSection";
import LanguageSection from "./LanguageSection";
import RatingStar from "./RatingStar";

const IntroductionSection = () => {
  return (
    <div className="mx-auto">
      <div className="grid md:grid-cols-1 lg:h-[1100px] xl:h-[550px] w-full xl:p-0 xl:grid-cols-2 xl:gap-4 relative">
        <div className="col-span-1 md:h-1/2 xl:h-1/2 flex flex-col py-3">
          <div className="flex flex-col max-sm:gap-5 md:gap-10 md:h-full md:py-5 justify-between">
            <p className="max-sm:text-sm md:text-pm_font_size sm:mb-5 md:mb-10">
              🤩 Unlock Your Potential Through Language Today!
            </p>
            <h1 className="md:text-4xl lg:text-5xl font-header_font_style font-bold leading-tight tracking-wide [word-spacing:0.25em] sm:mb-5 md:mb-10">
              Explore the World <br /> Through Language
            </h1>
            <p className="max-sm:text-sm text-neutral-500 md:text-pl_font_size sm:mb-5 md:mb-7">
              Learn foreign languages effortlessly with expert guidance in your
              native Myanmar language. Start your journey today!
            </p>
            <button className="max-sm:text-sm max-sm:mb-10 bg-cyan-500 hover:bg-cyan-600 duration-300 text-neutral-100 px-6 py-2 rounded-md self-start mt-auto">
              Learn Now
            </button>
          </div>
        </div>

        <div className="col-span-1 relative h-full md:w-3/4 sm:mt-5 md:mx-auto md:mt-5 lg:mx-auto flex xl:w-full xl:justify-end">
          <div className="w-[85%] md:h-full relative md:mx-auto lg:mx-auto">
            <img
              src={svg}
              alt=""
              className="absolute z-20 top-0 left-0 -translate-x-20 -translate-y-5 rounded-lg"
            />
            <img
              src={heroImg}
              alt="Hero Image"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="max-sm:w-[265px]  max-sm:h-[85px] max-sm:px-4 max-sm:py-2 absolute border border-cyan-600 z-30 w-[300px]w-[300px] h-[100px] bg-white rounded-xl shadow-md px-10 py-4 max-sm:translate-y-10 md:translate-x-11 md:translate-y-9 xl:translate-x-10 xl:translate-y-9 bottom-0 right-0">
            <div className="max-sm:mt-3 flex justify-between">
              <p className="max-sm:text-sm font-bold text-xl mb-1">4.8</p>
              <RatingStar totalStars={5} initialRating={4.5} />
            </div>
            <p className="max-sm:text-sm text-pm_font_size text-neutral-700">
              Reviewed by 300+ students
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-2 text-center w-full mt-32 lg:mt-44 xl:mt-28">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 md:p-5 lg:p-0 xl:grid-cols-4 gap-5 w-full">
          <InformationSection imgUrl={online} color="bg-light-yellow" />
          <InformationSection imgUrl={tutor} color="bg-light-green" />
          <InformationSection imgUrl={student} color="bg-light-purple" />
          <InformationSection imgUrl={certified} color="bg-pink-100" />
        </div>
      </div>
      <LanguageSection />
    </div>
  );
};

export default IntroductionSection;
