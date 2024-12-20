import React from "react";
import android from "../../../assets/Home/android.png";
import ios from "../../../assets/Home/ios.png";
import Iphone_Mockup from "../../../assets/Home/Iphone_Mockup.png";
import vector from "../../../assets/Home/vector.png";
import { div } from "framer-motion/client";

const AppDownloadSection = () => {
  return (
    // <>
    //   <div className="border w-full max-sm:h-[650px] md:h-[300px] lg:h-[340px] xl:h-[300px] bg-cyan-500 rounded-xl mb-16">
    //     <div className="sm:h-1/2 flex flex-col sm:p-5 md:py-8 md:px-2 sm:w-full md:w-1/2 lg:p-10 h-full ">
    //       <h1 className="lg:text-lg xl:text-xl font-bold text-neutral-50 sm:mb-6 md:mb-4 lg:mb-7">
    //         Download Our App - Learn Any Time, Anywhere
    //       </h1>
    //       <div className="flex gap-5 items-center justify-center lg:mb-3 xl:mb-0">
    //         <img src={vector} alt="" className="border p-2" />
    //         <p className="md:text-md text-neutral-50">
    //           Download our app for easy access to all courses, progress
    //           tracking, and more. Learn languages at your convenience, wherever
    //           you are.
    //         </p>
    //       </div>

    //       <div className="flex gap-5 md:justify-start">
    //         <img
    //           src={android}
    //           alt="Android"
    //           className="sm:size-24 md:size-28 lg:size-32 object-contain"
    //         />
    //         <img
    //           src={ios}
    //           alt="iOS"
    //           className="sm:size-24 md:size-28 lg:size-32 object-contain"
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <img
    //     src={Iphone_Mockup}
    //     alt="Iphone Mockup"
    //     className="
    // h-[450px]
    // absolute
    // sm:-bottom-4 sm:left-36
    // md:right-9 md:-top-16
    // lg:-top-14
    // xl:-top-9 xl:right-5
    // tracking-wide
    // md:bottom-auto md:left-auto"
    //   />
    // </>
    <div className="bg-primary-color h-full md:h-[310px] grid grid-cols-2 max-sm:grid-cols-1 max-sm:min-h-[450px] justify-between rounded-lg">
      <div className=" col-span-1 flex flex-col justify-center px-6 py-8 max-md:justify-start">
        <h1 className="text-neutral-50 text-lg font-bold mb-6 font-header_font_style">
          Download Our App – Learn Anytime, Anywhere
        </h1>
        <div className="flex gap-5 items-center mb-6">
          <img
            src={vector}
            alt="Vector Icon"
            className="border p-2 max-w-[60px] sm:max-w-[80px]"
          />
          <p className="text-sm md:text-md lg:text-lg text-neutral-50">

const AppDownloadSection = () => {
  return (
    <div className="border w-full h-[350px] bg-cyan-500 rounded-xl grid grid-cols-2 px-14">
      <div className="flex flex-col gap-7 py-7">
        <h1 className="text-xl font-bold text-neutral-50">
          Download Our App - Learn Any Time, Anywhere
        </h1>
        <div className="flex gap-5 items-center justify-center">
          <img src={vector} alt="" className="border p-2" />
          <p className="text-neutral-50">
            Download our app for easy access to all courses, progress tracking,
            and more. Learn languages at your convenience, wherever you are.
          </p>
        </div>
        <div className="flex gap-5">
          <img
            src={android}
            alt="Android"
            className="h-10 max-md:w-[120px] sm:h-12 md:h-14 lg:h-16 object-contain"
          />
          <img
            src={ios}
            alt="iOS"
            className="h-10 max-md:w-[120px] sm:h-12 md:h-14 lg:h-16 object-contain"
          />
        </div>
      </div>
      <div className="col-span-1 relative flex items-center justify-center max-sm:h-[318px]">
        <img
          src={Iphone_Mockup}
          alt="Iphone Mockup"
          className=" z-50 h-[318px] sm:h-[450px] absolute sm:-top-20 -bottom-8 sm:right-6"
        />
      </div>
    </div>
  );
};

export default AppDownloadSection;
