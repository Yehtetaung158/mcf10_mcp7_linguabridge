import React from "react";
import img1 from "../../../assets/Become an instructor/instructor_hero.png";

const HeroSection = () => {
  return (
    <section className="w-full  md:py-[120px] relative">
      <main className="max-w-[1207px]  lg:flex justify-between  mx-auto  max-lg:p-10">
        <div className=" w-fit h-fit space-y-10  ">
          <p className=" w-fit rounded-[4px] px-[8px] py-[4px] text-ps_font_size leading-[16.94px] text-neutral-900 bg-secondary-color">
            🚀 Transform Lives Through the Power of Language Education
          </p>

          <h1 className=" w-fit font-header_font_style font-header_weight text-[35px] md:text-[60px] leading-[68px] lg:leading-[90px] text-neutral-900 ">
            Join Our Community of Language Experts
          </h1>
          <p className="w-fit  text-[18px] leading-[27px] text-neutral-600">
            Learn foreign languages effortlessly with expert guidance in your
            native Myanmar language. Start your journey today!
          </p>
          <button className="w-[137px]  rounded-[4px] px-[8px] py-[12px] bg-primary-color text-neutral mt-10 ">
            Apply Now
          </button>
        </div>
        <div className="  max-lg:mt-10">
          <img src={img1} className="w-full h-full" alt="" />
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
