import React from "react";
import Third from "../../../../assets/About-Us/ThirdImg.png";
import Mission from "../../../../assets/About-Us/MissionImg.png";
import Green from "../../../../assets/About-Us/Green.png";

const ThirdSection = () => {
  return (
    <section className="w-full flex">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <img src={Third} className="" alt="" />
        </div>
        <div className="col-span-6 ml-4">
          <img src={Mission} className="w-20" alt="" />
          <div className="text-3xl font-miniHeader_weight font-header_font_style">
            {" "}
            Why should choose our{" "}
          </div>
          <div className="text-3xl font-miniHeader_weight font-header_font_style">
            {" "}
            platform?
          </div>

          <div className="opacity-25 text-ps_font_size">
            {" "}
            We understand the unique needs of Myanmar learners. That’s why our
            lessons are designed to bridge the gap between your native language
            and the one you want to learn.
          </div>

          <div className="flex inline ">
            <img src={Green} className="size-7 inline " alt="" />
            <div className="text-ps_font_size">
              {" "}
              Designed specifically to help Myanmar speakers easily transition
              to learning new languages.
            </div>
          </div>
          <div className="flex inline">
            <img src={Green} className="size-7 inline " alt="" />
            <div className="text-ps_font_size">
              {" "}
              Accessible on mobile, tablet, and desktop—perfect for your busy
              schedule.
            </div>
          </div>
          <div className="flex inline">
            <img src={Green} className="size-7  " alt="" />
            <div className="text-ps_font_size">
              {" "}
              Explore a wide variety of languages, including English, Chinese,
              Korean, and more.
            </div>
          </div>
          <div className="flex inline">
            <img src={Green} className="size-7 inline " alt="" />
            <div className="text-ps_font_size">
              Join a growing community of learners to share experiences and stay
              motivated.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;