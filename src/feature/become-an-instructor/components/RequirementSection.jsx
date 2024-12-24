import React from "react";
import p1 from "../../../assets/Become an instructor/platform.svg";
import p2 from "../../../assets/Become an instructor/bulb.svg";
import p3 from "../../../assets/Become an instructor/Check2.svg";
import p4 from "../../../assets/Become an instructor/crown.svg";
import p5 from "../../../assets/Become an instructor/requirement.svg";
import frame from "../../../assets/Become an instructor/Frame.svg";

const RequirementSection = () => {
  return (
    <section className="w-full  lg:py-[120px]">
      <main className="max-w-[1207px]  lg:flex justify-between  mx-auto p-5  max-lg:p-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="items-center max-lg:mt-10">
            <div className=" w-fit mx-auto flex gap-3  rounded-[4px] px-[8px] py-[4px] text-ps_font_size leading-[16.94px] text-neutral-900 bg-secondary-color">
              <img src={p4} width={20} height={10} alt="" />
              <p className="text-neutral-900 text-md">
                What It Takes to Lead and Inspire
              </p>
            </div>
            <h1 className=" w-full px-12 mt-7 font-header_font_style font-miniHeader_weight text-p_font_size  md:text-[40px]  text-neutral-900 ">
              Job Requirements For Instructor
            </h1>
            <div className="flex justify-start items-start gap-2 px-12 mt-10">
              <img src={p3} width={20} height={10} alt="" />
              <p className=" w-full  text-sm font-normal text-neutral-600 max-w-lg">
                Proficiency in the language you teach, with strong communication
                skills.{" "}
              </p>
            </div>
            <div className="flex justify-start items-start gap-2 px-12 mt-5">
              <img src={p3} width={20} height={10} alt="" />
              <p className=" w-full  text-sm font-normal text-neutral-600 max-w-lg">
                Ability to create engaging and easy-to-follow course content.{" "}
              </p>
            </div>
            <div className="flex justify-start items-start gap-2 px-12 mt-5 ">
              <img src={p3} width={20} height={10} alt="" />
              <p className=" w-full  text-sm font-normal text-neutral-600 max-w-lg">
                Passion for teaching and helping students achieve their goals.{" "}
              </p>
            </div>
            <div className="flex justify-start items-start gap-2 px-12 mt-5 ">
              <img src={p3} width={20} height={10} alt="" />
              <p className=" w-full  text-sm font-normal text-neutral-600 max-w-lg">
                Prior teaching or tutoring experience is a plus but not
                required.{" "}
              </p>
            </div>
          </div>

          <div className="relative flex items-start max-lg:mt-10">
            <img src={p5} alt="" className="mx-auto" />
            <img
              src={frame}
              width={50}
              alt=""
              className="absolute max-lg:hidden md:top-[-20px] md:right-[80px] lg:top-[-20px] lg:right-[-80px] -translate-x-16"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default RequirementSection;
