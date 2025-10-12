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
      <div className="grid xl:grid-cols-2 xl:gap-4 xl:p-0 md:grid-cols-1 lg:h-[1100px] xl:h-[550px] w-full relative">
        {/* Left Column - Text Content */}
        <div className="col-span-1 flex flex-col py-3">
          <div className="flex flex-col h-full md:py-5 lg:py-10 justify-between px-4">
            <p className="md:text-ps_font_size lg:text-pm_font_size">
              🤩 Unlock Your Potential Through Language Today!
            </p>
            <h1 className="md:text-4xl lg:text-6xl font-header_font_style font-bold leading-tight tracking-wide">
              Explore The World <br /> Through Language
            </h1>
            <p className="text-neutral-500 md:text-ps_font_size lg:text-pl_font_size">
              Learn foreign languages effortlessly with expert guidance in your
              native Myanmar language. Start your journey today!
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 duration-300 text-white px-5 py-2 rounded-md self-start mt-6">
              Learn Now
            </button>
          </div>
        </div>

        {/* Right Column - Image & Rating Box */}
        <div className="col-span-1 relative h-full w-full flex items-center justify-center px-4">
          <div className="w-[75%] relative">
            <img
              src={svg}
              alt="Decorative SVG"
              className="absolute z-20 top-0 left-0 -translate-x-20 -translate-y-5"
            />
            <img
              src={heroImg}
              alt="Hero"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Rating Box */}
          <div className="absolute border border-cyan-600 z-30 w-[300px] bg-white rounded-xl shadow-md px-10 py-4 translate-x-7 translate-y-7 bottom-0 right-0">
            <div className="flex justify-between mb-1">
              <p className="font-bold text-lg">4.8</p>
              <RatingStar totalStars={5} initialRating={4.5} />
            </div>
            <p className="text-sm text-neutral-700">Reviewed by 300+ students</p>
          </div>
        </div>
      </div>

      {/* Info Grid Section */}
      <div className="col-span-2 text-center w-full mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 p-4">
          <InformationSection imgUrl={online} color="bg-light-yellow" />
          <InformationSection imgUrl={tutor} color="bg-light-green" />
          <InformationSection imgUrl={student} color="bg-light-purple" />
          <InformationSection imgUrl={certified} color="bg-pink-100" />
        </div>
      </div>

      {/* Language Section */}
      <LanguageSection />
    </div>
  );
};

export default IntroductionSection;
