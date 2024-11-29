import React from "react";
import Frame2 from "../../../../assets/About-Us/Frame2.png";
import Second from "../../../../assets/About-Us/SecondImg.png";

const SecondSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        {" "}
        <img src={Frame2} className="w-20 mb-4 mt-20" alt="" />
        <p className="text-3xl font-miniHeader_weight font-header_font_style mb-8">
          {" "}
          Connected, Multilingual World
        </p>
        <img src={Second} className="mt-10 mb-4 mt-6" alt="" />
      </div>
    </div>
  );
};

export default SecondSection;
