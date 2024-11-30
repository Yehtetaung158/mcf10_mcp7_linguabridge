import React from "react";
import certified from "../../../assets/Home/certified.png";
import heroImg from "../../../assets/Home/heroImg.png";
import online from "../../../assets/Home/online.png";
import student from "../../../assets/Home/student.png";
import tutor from "../../../assets/Home/tutor.png";
import InformationSection from "./InformationSection";
import LanguageSection from "./LanguageSection";
import RatingStar from "./RatingStar";

const IntroductionSection = () => {
  return (
    <div className="mx-auto">
      <div class="grid grid-cols-2 gap-4 h-[600px] w-full">
        <div class="col-span-1 h-full flex flex-col py-3 ">
          <div class="flex flex-col h-full py-10 justify-between">
            <p class="text-pm_font_size">
              🤩 Unlock Your Potential Through Language Today!
            </p>
            <h1 class="text-6xl font-header_font_style font-bold leading-tight">
              Explore The World <br /> Through Language
            </h1>
            {/* <h1 class="text-pl_font_size font-header_font_style font-header_weight leading-tight">
              Explore The World <br /> Through Language
            </h1> */}
            <p class="text-neutral-500 text-pl_font_size">
              Learn foreign languages effortlessly with expert guidance in your
              native Myanmar
              <br /> language. Start your journey today!
            </p>
          </div>

          <button class="bg-cyan-500 text-neutral-100 px-5 py-2 rounded-md self-start mt-auto mb-10">
            Learn Now
          </button>
        </div>

        <div class="col-span-1 relative h-full w-full  flex items-center justify-center">
          <div class="w-[75%]">
            <img
              src={heroImg}
              alt="Hero Image"
              class="h-full w-full object-cover object-center"
            />
          </div>

          <div class="absolute border border-cyan-600 z-30 w-[300px] bg-white p-2 rounded-lg shadow-md px-10 py-4 translate-x-7 translate-y-7 bottom-0 right-0">
            <div class="flex justify-between">
              <p class="font-bold text-lg">4.8</p>
              <RatingStar totalStars={5} initialRating={4.5} />
            </div>
            <p>Reviewed by 300+ students</p>
          </div>
        </div>
      </div>

      <div class="col-span-2 text-center w-full mt-28">
        <div className="grid grid-cols-4 gap-5 w-full">
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
