import React from "react";
import img1 from "../../../assets/Become an instructor/instructor_hero.png";

const HeroSection = () => {
  return (
    <div className="w-full h-[640px] py-[120px]">
      <div className="w-[1207px]  flex justify-between items-center mx-auto">
        <div className="w-[695.03px] space-y-[40px]">
         
            <p className=" w-full rounded-[4px] px-[8px] py-[4px] text-ps_font_size leading-[16.94px] text-neutral-900 bg-secondary-color">
             
              🚀 Transform Lives Through the Power of Language Education
            </p>
          
          <h1 className=" w-full h-[180px] font-header_font_style font-header_weight text-[60px] leading-[90px] text-neutral-900 ">
            Join Our Community of Language Experts
          </h1>
          <p className="w-full h-[54px] text-[18px] leading-[27px] text-neutral-600">Learn foreign languages effortlessly with expert guidance in your native Myanmar language. Start your journey today!</p>
          <button className="w-[137px]  rounded-[4px] px-[8px] py-[12px] bg-primary-color text-neutral">Apply Now</button>
        </div>
        <div className="w-[418px] h-64">
            <img src={img1} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
