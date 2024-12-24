import React from "react";
import instructorImg from "../../../../assets/Courses/detailImages/instructorImg.png";
import insteergramIcon from "../../../../assets/Courses/detailImages/instergram.png";
import linkinIcon from "../../../../assets/Courses/detailImages/linkin.png";
import twitterIcon from "../../../../assets/Courses/detailImages/twitter.png";
import facebookIcon from "../../../../assets/Courses/detailImages/facebook.png";
import VideoIcon from "../../../../assets/Courses/detailImages/videoIcon.png";
import starImg from "../../../../assets/Courses/detailImages/starImg.png";
import viewedIcon from "../../../../assets/Courses/detailImages/viewedIcon.png";

const Instructor = () => {
  const instructorData = {
    img: instructorImg,
    name: "Olivia Wilson",
    role: "Korean Instructor",
    socialLinks: [
      { icon: facebookIcon, link: "#" },
      { icon: insteergramIcon, link: "#" },
      { icon: twitterIcon, link: "#" },
      { icon: linkinIcon, link: "#" },
    ],
    courseInfo: {
      duration: "8 Hour Course",
      rating: "4.8",
      views: "144",
    },
    about: `Olivia Wilson is a passionate Korean language instructor with over 8 years of experience helping students achieve fluency. With a strong background in linguistics and a deep understanding of Korean culture, Olivia specializes in making language learning practical, engaging, and enjoyable. She has taught hundreds of students worldwide, from complete beginners to advanced learners, focusing on building confidence in speaking and understanding Korean. Olivia's teaching approach combines structured lessons with fun, interactive activities, ensuring that every learner feels supported and inspired.`,
  };

  return (
    <div className=" px-6 py-10">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 w-full justify-between items-center mb-8 gap-2">
        <div className="col-span-1 w-full max-w-[320px] flex justify-center pt-10 border border-neutral-200 rounded-lg">
          <img
            className=" "
            src={instructorData.img}
            alt={instructorData.name}
          />
        </div>
        <div className="w-full col-span-1 flex flex-col gap-2">
          <h1 className="text-primary-color font-header_font_style text-2xl font-miniHeader_weight">
            {instructorData.name}
          </h1>
          <p className="text-neutral-500">{instructorData.role}</p>
          <div className="flex gap-4">
            {instructorData.socialLinks.map((social, index) => (
              <a key={index} href={social.link}>
                <img src={social.icon} alt="" />
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex gap-2 items-center">
              <span>
                <img src={VideoIcon} alt="Video Icon" className=" size-7" />
              </span>
              <span className=" max-sm:text-xs">{instructorData.courseInfo.duration}</span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={starImg} alt="Rating" className=" size-7" />
              <span className=" max-sm:text-xs">{instructorData.courseInfo.rating}</span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={viewedIcon} alt="Viewed Icon" className=" size-7" />
              <span className=" max-sm:text-xs">{instructorData.courseInfo.views}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="mb-4 text-neutral-900 font-miniHeader_weight font-header_font_style text-2xl">
          About Instructor
        </h1>
        <p className="text-neutral-600">{instructorData.about}</p>
      </div>
    </div>
  );
};

export default Instructor;
