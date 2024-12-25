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
import Bgimg from '../../../assets/Home/Frame1000006721.png';
import GirlImg from '../../../assets/Home/young-asian-business-woman-isolated-background-showing-victory-sign-with-both-hands 1.png';
import HeaderAnimation from "./HeaderAnimation";

const IntroductionSection = () => {
  return (
    <div className="mx-auto">
      <div className="grid md:grid-cols-1 lg:h-[1100px] xl:h-[550px] w-full xl:p-0 xl:grid-cols-2 xl:gap-4 relative mb-8">
        <div className="col-span-1 md:h-1/2 xl:h-1/2 flex flex-col py-3">
          <div className="flex flex-col space-y-4 justify-between">
            <p className="md:text-pm_font_size sm:mb-5 md:mb-10">
              🤩 Unlock Your Potential Through Language Today!
            </p>
            <h1 className="md:text-4xl lg:text-5xl font-header_font_style font-bold leading-tight tracking-wide [word-spacing:0.25em] sm:mb-5 md:mb-10 relative">
              Explore the World <br /> Through <span className="inline-block absolute w-1/2 "><HeaderAnimation/></span>
            </h1>
            <p className="text-neutral-500 md:text-pl_font_size sm:mb-5 md:mb-7">
              Learn foreign languages effortlessly with expert guidance in your native Myanmar Language
             
              . Start your journey today!
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 duration-300 text-neutral-100 px-6 py-2 rounded-md self-start mt-auto">
              Learn Now
            </button>
          </div>
        </div>
        <div className=" w-full h-full flex justify-center items-center relative">
          <div className="  relative w-4/5 h-5/6 max-w-[500px] min-h-[500px] max-sm:min-h-[370px] flex justify-center items-end">
            <div className={`w-full h-full flex justify-center items-end`}>
              <img src={svg} alt="" className=" absolute top-0 left-0 max-sm:size-20 " />
              <img src={Bgimg} alt="" className=" absolute max-sm:max-h-[370px]" />
              <img src={GirlImg} alt="" className=" absolute max-sm:max-h-[370px]" />
            </div>
            <div className=" z-10 bg-neutral-50 rounded-lg p-4 absolute  transform sm:translate-y-1/2 sm:translate-x-[70%] xl:translate-x-[80%]  -translate-y-1/2">
              <div className=" flex  gap-4">
                <h1>4.8</h1>
                <div><RatingStar /></div>
              </div>
              <p className=" text-neutral-600">Reviewed by 300+ students</p>
            </div>
          </div>
        </div>


      </div>

      <div className="col-span-2 text-center w-full sm:mt-32 lg:mt-44 xl:mt-28">
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