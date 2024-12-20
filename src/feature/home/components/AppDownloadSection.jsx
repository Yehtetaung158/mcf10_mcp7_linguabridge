import React from "react";
import android from "../../../assets/Home/android.png";
import ios from "../../../assets/Home/ios.png";
import Iphone_Mockup from "../../../assets/Home/Iphone_Mockup.png";
import vector from "../../../assets/Home/vector.png";

const AppDownloadSection = () => {
  return (
    <>
      <div className="border w-full sm:h-[650px] md:h-[300px] lg:h-[340px] xl:h-[300px] bg-cyan-500 rounded-xl mb-16">
        <div className="sm:h-1/2 flex flex-col sm:p-5 md:py-8 md:px-2 sm:w-full md:w-1/2 lg:p-10 h-full ">
          <h1 className="lg:text-lg xl:text-xl font-bold text-neutral-50 sm:mb-6 md:mb-4 lg:mb-7">
            Download Our App - Learn Any Time, Anywhere
          </h1>
          <div className="flex gap-5 items-center justify-center lg:mb-3 xl:mb-0">
            <img src={vector} alt="" className="border p-2" />
            <p className="md:text-md max-sm:bg-pink-100 text-neutral-50">
              Download our app for easy access to all courses, progress
              tracking, and more. Learn languages at your convenience, wherever
              you are.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:justify-start">
            <img
              src={android}
              alt="Android"
              className="sm:size-24 md:size-28 lg:size-32 object-contain"
            />
            <img
              src={ios}
              alt="iOS"
              className="sm:size-24 md:size-28 lg:size-32 object-contain"
            />
          </div>
        </div>
      </div>

      <img
        src={Iphone_Mockup}
        alt="Iphone Mockup"
        className="
    h-[450px] 
    absolute 
    sm:-bottom-4 sm:left-36 
    md:right-9 md:-top-16 
    lg:-top-14 
    xl:-top-9 xl:right-5 
    tracking-wide 
    md:bottom-auto md:left-auto"
      />
    </>
  );
};

export default AppDownloadSection;
