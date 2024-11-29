import React from "react";
import decorationImg from "../../../../assets/About-Us/decoration.png";
import frame from "../../../../assets/About-Us/frameNew2.png";
import FirstImg from "../../../../assets/About-Us/aboutUs_hero.png";
import Review from "../../../../assets/About-Us/Review.png";

const FirstSection = () => {
  return (
    <section className="mx-auto">
      <img
        src={decorationImg}
        className="absolute  top-0 left-0 w-45 h-auto"
        alt=""
      />
      <div className="grid grid-cols-5 justify-center">
        <div className="col-span-2">hello</div>
        <div className="col-span-3">World</div>
      </div>
    </section>
  );
};

export default FirstSection;
