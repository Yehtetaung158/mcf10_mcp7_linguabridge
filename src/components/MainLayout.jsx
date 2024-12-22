import { Outlet, useLocation } from "react-router-dom";

import { dateImage } from "../assets/Courses/homeImages/coursesHomeImagesPaths";
import CoursesHero from "../feature/courses/components/coursesHome/CoureseHero";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  const location = useLocation();
  const pathName = location.pathname.startsWith("/courses/");
  const isCoursesPage = location.pathname.includes("/courses");
  const isPrivacyPolicyPage = location.pathname === "/privacy-policy";
  const isTermAndConditionsPage = location.pathname === "/terms-and-conditions";

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-[1208px] w-full mx-auto">
        <Header />
      </div>

      {/* Hero Image */}
      {!pathName && isCoursesPage && (
        <div className="max-w-[1440px] w-full mx-auto">
          <CoursesHero
            title={"What do you want to learn?"}
            text={
              "Grow your skill with the most reliable online courses and certifications"
            }
          />
        </div>
      )}

      {isPrivacyPolicyPage && (
        <div className="max-w-[1440px] w-full mx-auto">
          <CoursesHero
            image={dateImage}
            title={"We Protect What Matters: Your Data"}
          />
        </div>
      )}

      {isTermAndConditionsPage && (
        <div className="max-w-[1440px] w-full mx-auto">
          <CoursesHero image={dateImage} title={"Terms & Conditions"} />
        </div>
      )}

      <div className="max-w-[1208px] w-full mx-auto flex-grow px-3">
        <Outlet />
      </div>

      <div className="max-w-[1440px] w-full mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
