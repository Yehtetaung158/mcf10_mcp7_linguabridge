import React from "react";
import markIcon from "../../../../assets/Courses/detailImages/markIcon.png";
import OverViewListItem from "./OverViewListItem";

const OverView = () => {
  const courseData = {
    courseOverview: {
      title: "Course Overview",
      content:
        "This beginner-friendly course introduces you to the Korean language, focusing on mastering the basics. You’ll learn the Korean alphabet (Hangul), essential vocabulary, simple sentence structures, and common phrases to help you start speaking Korean in everyday situations. Whether you're a complete beginner or looking to brush up on your skills, this course will give you a strong foundation to confidently communicate in Korean.",
    },
    whatYouWillLearn: {
      title: "What You Will Learn",
      items: [
        "Introduction to the Korean language",
        "Understanding Hangul (Korean alphabet)",
        "Essential grammar structures",
        "Common Korean phrases",
      ],
    },
    requirements: {
      title: "Requirements",
      items: [
        "No prior knowledge of Korean is required – this course is designed for absolute beginners.",
        "Introduction to the Korean language",
        "Understanding Hangul (Korean alphabet)",
        "Essential grammar structures",
        "Common Korean phrases",
      ],
    },
  };

  return (
    <div className=" px-5">
      <div className="mb-4 ">
        <h2 className="text-2xl font-miniHeader_weight font-header_font_style mb-4">
          {courseData.courseOverview.title}
        </h2>
        <p className="text-pm_font_size text-neutral-600">
          {courseData.courseOverview.content}
        </p>
      </div>

      <div className="mb-4">
        <h1 className="text-2xl font-miniHeader_weight font-header_font_style mb-4">
          {courseData.whatYouWillLearn.title}
        </h1>
        <OverViewListItem
          items={courseData.whatYouWillLearn.items}
          icon={markIcon}
          isBullet={false}
        />
      </div>

      <div className="mb-4">
        <h1 className="text-2xl font-miniHeader_weight font-header_font_style mb-4">
          {courseData.requirements.title}
        </h1>
        <OverViewListItem
          items={courseData.requirements.items}
          icon={markIcon}
          isBullet={true}
        />
      </div>
    </div>
  );
};

export default OverView;
