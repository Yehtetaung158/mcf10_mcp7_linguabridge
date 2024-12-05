import { Link, NavLink, Outlet, useParams } from "react-router-dom";

import { courseTitleByUrl } from "../../../utils/course";
import BeginnerDetail from "../components/coursesDetail/BeginnerDetail";
import ElementaryDetail from "../components/coursesDetail/ElementaryDetail";
import IntermediateDetail from "../components/coursesDetail/IntermeDiateDetail";

const CourseDetailPage = () => {
  const { slug } = useParams();
  const country = slug.split("-")[3];

  const title = courseTitleByUrl[slug];
  const isBeginner = title.includes("Beginner");
  const isElementary = title.includes("Elementary");
  const isIntermediate = title.includes("Intermediate");

  return (
    <section className="pt-16 pb-10">
      {/* {isBeginner && (
        <BeginnerDetail title={title} slug={slug} country={country} />
      )}
      {isElementary && <ElementaryDetail title={title} />}
      {isIntermediate && <IntermediateDetail title={title} />} */}
      <div className="max-w-[1208px] mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-5 gap-10 w-full bg-red-400">
          <div className=" col-span-4 bg-green-200">
            <div>
              <h1>Master the Basics: Korean For Beginners</h1>
              <p>
                Master the Basics: Korean For Beginners is designed to help you
                learn essential Korean vocabulary, grammar, and phrases. By the
                end of the course, you'll confidently engage in basic
                conversations and understand the fundamentals of the Korean
                language.
              </p>
            </div>

            {/* CourseInformation Card  */}
            <div className="flex flex-col w-full gap-10">
              <div className="w-full flex flex-wrap justify-around items-center bg-yellow-200 p-4">
                {[
                  { label: "Overview", path: `/courses/${slug}` },
                  {
                    label: "Contents",
                    path: `/courses/${slug}/contents`,
                  },
                  {
                    label: "Instructor",
                    path: `/courses/${slug}/instructor`,
                  },
                  {
                    label: "Reviews",
                    path: `/courses/${slug}/reviews`,
                  },
                  { label: "FAQ", path: `/courses/${slug}/faq` },
                ].map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end
                    className={({ isActive }) =>
                      `px-4 py-2 ${
                        isActive ? "text-blue-600 underline" : "text-gray-800"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div>
                <Outlet />
              </div>
            </div>
          </div>

          {/* card */}
          <div>
            <h1>I am card</h1>
            <h1>I am card</h1>
          </div>
        </div>

        {/* related card  */}
        <div className="bg-blue-500">
          <h1> Related Courses</h1>
          <div>card1</div>
          <div>card1</div>
          <div>card1</div>
          <div>card1</div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailPage;
