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
    <div className="w-[90%] mx-auto">
      <div class="grid grid-cols-2 gap-4 h-[600px]">
        <div class="col-span-1 h-full flex flex-col py-3 justify-between">
          <div class="flex flex-col justify-evenly h-full">
            <p>🤩 Unlock Your Potential Through Language Today!</p>
            <h1 class="text-6xl font-bold">
              Explore The World <br /> Through Language
            </h1>
            <p className="text-gray-500 text-lg">
              Learn foreign languages effortlessly with expert guidance in your
              native Myanmar <br /> language. Start your journey today!
            </p>
          </div>

          <button class="border border-green-600 bg-green-600 px-5 py-2 rounded-md self-start mt-auto">
            Learn Now
          </button>
        </div>

        <div class="col-span-1 relative h-full w-full">
          <div className="w-3/4 mx-auto">
            <img
              src={heroImg}
              alt="Hero Image"
              class="absolute top-0 left-0 h-full w-full  object-cover object-center"
            />
          </div>

          <div class="absolute border border-cyan-300  z-30 w-[300px] bg-white p-2 rounded-lg shadow-md px-10 py-4 translate-x-14 translate-y-7 bottom-0 right-0">
            <div className="flex justify-between">
              <p class="font-bold text-lg">4.8</p>
              <RatingStar totalStars={5} initialRating={4.5} />
            </div>
            <p>Reviewed by 300+ students</p>
          </div>
        </div>
      </div>

      <div class="col-span-2 text-center w-full mt-28">
        <div className="grid grid-cols-4 gap-4 w-full">
          <InformationSection imgUrl={online} color="bg-yellow-100" />
          <InformationSection imgUrl={tutor} color="bg-cyan-100" />
          <InformationSection imgUrl={student} color="bg-purple-100" />
          <InformationSection imgUrl={certified} color="bg-pink-100" />
        </div>
      </div>

      <LanguageSection />
    </div>
  );
};

export default IntroductionSection;
