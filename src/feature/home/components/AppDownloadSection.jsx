import React from "react";
import android from "../../../assets/Home/android.png";
import ios from "../../../assets/Home/ios.png";
import Iphone_Mockup from "../../../assets/Home/Iphone_Mockup.png";
import vector from "../../../assets/Home/Vector.png";

const AppDownloadSection = () => {
  return (
    <div className="border w-full h-auto md:h-[350px] bg-cyan-500 rounded-xl grid grid-cols-1 md:grid-cols-2 px-6 md:px-14 py-10 md:py-7 mb-16 relative overflow-hidden">
      <div className="flex flex-col gap-7 justify-center">
        <h1 className="text-xl md:text-2xl font-bold text-neutral-50">
          Download Our App - Learn Anytime, Anywhere
        </h1>

        <div className="flex gap-5 items-center">
          <img
            src={vector}
            alt="vector"
            className="border p-2 w-16 h-16 object-contain"
          />
          <p className="text-neutral-50 text-sm md:text-base">
            Download our app for easy access to all courses, progress tracking,
            and more. Learn languages at your convenience, wherever you are.
          </p>
        </div>

        <div className="flex gap-5 mt-3">
          <img
            src={android}
            alt="Android"
            className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
          />
          <img
            src={ios}
            alt="iOS"
            className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain "
          />
        </div>
      </div>

      <div className="relative flex items-center justify-center mt-10 md:mt-0">
        <img
          src={Iphone_Mockup}
          alt="Iphone Mockup"
          className="h-[300px] sm:h-[400px] md:h-[450px] absolute sm:-top-12 md:-top-16 lg:-top-20 right-0 md:right-6 object-contain"
        />
      </div>
    </div>
  );
};

export default AppDownloadSection;
