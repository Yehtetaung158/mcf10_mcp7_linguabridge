import React from "react";
import dot from "../../../assets/Become an instructor/dot.svg";
import s1 from "../../../assets/Become an instructor/step1.svg";
import s2 from "../../../assets/Become an instructor/step2.svg";
import s3 from "../../../assets/Become an instructor/step3.svg";

const StepSection = () => {
  return (
    <section className="w-full  lg:py-[120px]">
      <main className="max-w-[1207px]  lg:flex flex-col justify-between items-center mx-auto  max-lg:p-10">
        <div className=" w-fit h-fit space-y-10 mx-auto text-center  ">
          <div className=" w-fit mx-auto flex gap-3  rounded-[4px] px-[8px] py-[4px] text-ps_font_size leading-[16.94px] text-neutral-900 bg-secondary-color">
            <img src={dot} width={20} height={10} alt="" />
            <p className="text-neutral-900 text-md">
              Your Path to Inspiring Others: A Simple 3-Step Process
            </p>
          </div>

          <h1 className=" w-full px-12 font-header_font_style font-miniHeader_weight text-[15px]  md:text-[40px]  text-neutral-900 ">
            Become an Instructor: Step-by-Step
          </h1>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-5 md:mt-16">
          <div className="flex flex-col items-center text-center">
            <img src={s1} alt="" className="w-20 h-20 object-contain mb-4" />
            <h1 className="font-header_font_style font-miniHeader_weight text-neutral-900 my-3">
              Apply
            </h1>
            <p className="text-sm font-normal text-neutral-600 max-w-xs">
              Fill out our simple application form to get started. Tell us about
              your teaching experience and the language(s) you wish to teach.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={s2} alt="" className="w-20 h-20 object-contain mb-4" />
            <h1 className="font-header_font_style font-miniHeader_weight text-neutral-900 my-3">
              Review and Approval
            </h1>
            <p className="text-sm font-normal text-neutral-600 max-w-xs">
              Once your application is received, our team will review your
              qualifications and get back to you with feedback. We ensure that
              all instructors meet our standards.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={s3} alt="" className="w-20 h-20 object-contain mb-4" />
            <h1 className="font-header_font_style font-miniHeader_weight text-neutral-900 my-3">
              Start Teaching!
            </h1>
            <p className="text-sm font-normal text-neutral-600 max-w-xs">
              Once your course is live, you’ll begin teaching learners from
              around the world. Track your students’ progress, provide feedback,
              and enjoy the teaching experience!
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default StepSection;
