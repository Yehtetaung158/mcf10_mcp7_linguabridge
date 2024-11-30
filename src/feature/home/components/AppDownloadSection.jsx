import React from "react";
import android from "../../../assets/Home/android.png";
import ios from "../../../assets/Home/ios.png";
import Iphone_Mockup from "../../../assets/Home/Iphone_Mockup.png";

const AppDownloadSection = () => {
  return (
    <div className="border w-full h-[350px] bg-cyan-500 rounded-xl grid grid-cols-2 px-14">
      <div className="flex flex-col gap-7 py-7">
        <h1 className="text-xl font-bold text-neutral-100">
          Download Our App - Learn Any Time, Anywhere
        </h1>
        <div className="flex gap-5">
          <img src={ios} alt="" />
          <p className="text-neutral-100">
            Download our app for easy access to all courses, progress tracking,
            and more. Learn languages at your convenience, wherever you are.
          </p>
        </div>

        <div className="flex gap-5 justify-start">
          <img src={android} alt="Android" className="size-32 object-contain" />
          <img src={ios} alt="iOS" className="size-32 object-contain" />
        </div>
      </div>
      <img
        src={Iphone_Mockup}
        alt="Iphone Mockup"
        className="h-[450px] absolute top-0 right-24"
      />
    </div>
  );
};

export default AppDownloadSection;
