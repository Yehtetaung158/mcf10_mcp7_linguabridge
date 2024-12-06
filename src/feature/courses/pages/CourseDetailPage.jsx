import { NavLink, Outlet, useParams } from "react-router-dom";

import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import {
  MyanmarFlag,
  OliviaBeginner,
  oliviaBeginner2,
  oliviaIntermediate,
  TomHardyIntermediate,
} from "../../../assets/Courses/detailImages/courseDetailImages";
import {
  bookIcon,
  clockIcon,
  ratingStarIcon,
} from "../../../assets/Courses/homeImages/coursesHomeImagesPaths";
import { tabData } from "../../../utils/course";
import IncludedCard from "../components/coursesDetail/IncludedCard";
import CourseCard from "../components/coursesHome/CourseCard";

const CourseDetailPage = () => {
  const { slug } = useParams();
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className=" pb-10 ">
      <div className="flex flex-col ">
        {/* First Section */}
        <div className="bg-[#E5FBFF] pt-16 px-4 pb-16 md:pb-14 ">
          <div className="font-heighLight_weight text-sm ">
            Master the Basics: Korean For Beginners
          </div>
          <div>
            <h1 className="text-2xl font-header_weight w-5/6 leading-9 tracking-wide pt-10 lg:text-4xl lg:w-3/6 lg:leading-[3.2rem]">
              Master the Basics: Korean For Beginners
            </h1>
            <p className="pt-6 text-pl_font_size text-gray md:w-2/3 text-sm text-justify md:text-base lg:w-3/5">
              Master the Basics: Korean For Beginners is designed to help you
              learn essential Korean vocabulary, grammar, and phrases. By the
              end of the course, you&apos;ll confidently engage in basic
              conversations and understand the fundamentals of the Korean
              language.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-[#525252] text-white px-4  text-xs rounded-md lg:rounded-lg py-0.5 lg:text-base">
              Beginner
            </button>
            <img src={MyanmarFlag} alt="" className="size-20 md:size-24" />
            <div className="flex items-center gap-2 text-sm md:text-base">
              4.8
              <img src={ratingStarIcon} alt="" className="h-4" />
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row px-4 -mt-10 gap-12 lg:gap-6">
          {/* Left Section */}
          <div className="bg-white lg:w-4/6">
            <div className="border shadow-lg rounded-md">
              <div className=" flex flex-wrap justify-around items-center py-8 md:py-6 px-8 gap-6 border-b-neutral-200 border-b-2 ">
                {tabData(slug).map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end
                    className={({ isActive }) =>
                      `  ${
                        isActive
                          ? "text-white bg-primary-color px-4 rounded-md py-2"
                          : "text-primary-color font-heighLight_weight"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div className="py-10">
                <Outlet />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:flex-1 lg:-mt-48">
            <div className="border shadow-lg rounded-lg">
              {!isTablet && !isDesktop && (
                <img
                  src={OliviaBeginner}
                  alt=""
                  className="size-full object-contain"
                />
              )}
              {isTablet && !isDesktop && (
                <img
                  src={oliviaBeginner2}
                  alt=""
                  className="size-full object-contain"
                />
              )}
              {isDesktop && (
                <img
                  src={OliviaBeginner}
                  alt=""
                  className="size-full object-contain"
                />
              )}
              <div className=" px-4 py-6 flex flex-col md:flex-row lg:flex-col justify-between md:py-4 md:items-center lg:items-start lg:gap-4">
                <div className="font-header_weight text-xl mb-6 md:mb-0 md:text-xl ">
                  80,000 Ks
                </div>
                <button className="bg-primary-color text-white py-2 rounded-md items-center max-md:w-full lg:w-full md:py-1 md:px-3">
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="border shadow-lg rounded-lg px-5 pt-8 mt-12">
              <IncludedCard />
            </div>
          </div>
        </div>

        {/* Last Section  */}
        <div className=" px-4 mt-20 mb-10">
          <h2 className="text-3xl font-header_weight mb-5"> Related Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <CourseCard
              courseImg={oliviaBeginner2}
              title={"Master the Basics: Korean for Beginners"}
              name="Olivia Wilson"
              level={"Beginner"}
              ratingStarImg={ratingStarIcon}
              ratingCount={4.8}
              price={"80,000"}
              clockIcon={clockIcon}
              bookIcon={bookIcon}
              hour={12}
              min={56}
              path={slug}
            />
            <CourseCard
              courseImg={TomHardyIntermediate}
              title={"Intermediate Japanese: Core Mastery"}
              name={"Tom Hardy"}
              level={"Intermediate"}
              ratingStarImg={ratingStarIcon}
              ratingCount={4.9}
              price={"120,000"}
              clockIcon={clockIcon}
              bookIcon={bookIcon}
              hour={20}
              min={20}
              path={slug}
            />
            <CourseCard
              courseImg={oliviaIntermediate}
              title={"Intermediate Korean: Core Mastery"}
              name="Olivia Wilson"
              level={"Intermediate"}
              ratingStarImg={ratingStarIcon}
              ratingCount={4.5}
              price={"120,000"}
              clockIcon={clockIcon}
              bookIcon={bookIcon}
              hour={20}
              min={5}
              path={slug}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailPage;
