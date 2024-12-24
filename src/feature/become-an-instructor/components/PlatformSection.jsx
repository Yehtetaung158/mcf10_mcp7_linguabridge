import React from "react";
import p1 from "../../../assets/Become an instructor/platform.svg";
import p2 from "../../../assets/Become an instructor/bulb.svg";
import p3 from "../../../assets/Become an instructor/Check2.svg";

const PlatformSection = () => {
  return (
    <section className="w-full  md:py-[120px]">
      <main className="max-w-[1207px]  lg:flex justify-between  mx-auto p-5  max-lg:p-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div className=" flex items-center">
            <img src={p1} alt="" className="mx-auto" />
          </div>
          <div className="items-center max-lg:mt-10">
            <div className=" w-fit mx-auto flex gap-3  rounded-[4px] px-[8px] py-[4px] text-ps_font_size leading-[16.94px] text-neutral-900 bg-secondary-color">
              <img src={p2} width={20} height={10} alt=""  />
              <p className="text-neutral-900 text-md">
                Inspire, Educate, and Empower Learners Around the World.
              </p>
            </div>
            <h1 className=" w-full px-12 mt-7 font-header_font_style font-miniHeader_weight text-p_font_size  md:text-[40px]  text-neutral-900 ">
              Why Start Teaching on Our Platform?
            </h1>
            <p className=" w-full px-12 mt-5 text-sm font-normal text-neutral-600 max-w-lg">
            Share your love for languages! Create impactful courses and inspire students worldwide with our tools and support. Let’s make language learning accessible and fun together.
            </p>
            <div className="flex justify-start items-start gap-2 px-12 mt-10">
              <img src={p3}  width={20} height={10} alt="" />
              <p className=" w-full  text-sm font-normal text-neutral-600 max-w-lg">
              <span className="font-bold">Exclusively for Language Learners</span> – Join a platform tailored to language education, connecting with passionate students.
            </p>
            </div>
            <div className="flex justify-start items-start gap-2 px-12 mt-5">
              <img src={p3}  width={20} height={10} alt="" />
              <p className=" w-full  text-sm font-normal text-neutral-600 max-w-lg">
              <span className="font-bold"> Global Impact </span> – Share your expertise with learners worldwide, breaking language barriers everywhere.
            </p>
            </div>
            <div className="flex justify-start items-start gap-2 px-12 mt-5 ">
              <img src={p3}  width={20} height={10} alt="" />
              <p className=" w-full  text-sm font-normal text-neutral-600 max-w-lg">
              <span className="font-bold"> Passive Income Potential</span> – Create courses once and earn continuously as students enroll at their own pace.
            </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default PlatformSection;
