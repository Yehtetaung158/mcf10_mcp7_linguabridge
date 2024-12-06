import AboutPage from "../feature/about-us/pages/AboutPage";
import ApplyFormPage from "../feature/become-an-instructor/pages/ApplyFormPage";
import BecomeAnInstructorPage from "../feature/become-an-instructor/pages/BecomeAnInstructorPage";
import ContactPage from "../feature/contact/pages/ContactPage";
import Contents from "../feature/courses/components/coursesDetail/Contents";
import FAQ from "../feature/courses/components/coursesDetail/FAQ";
import Instructor from "../feature/courses/components/coursesDetail/Instructor";
import OverView from "../feature/courses/components/coursesDetail/OverView";
import Reviews from "../feature/courses/components/coursesDetail/Reviews";
import CourseDetailPage from "../feature/courses/pages/CourseDetailPage";
import CoursesHomePage from "../feature/courses/pages/CoursesHomePage";
import LessonDetailPage from "../feature/courses/pages/LessonDetailPage";
import HomePage from "../feature/home/pages/HomePage";
import PrivacyPolicyPage from "../feature/privacy-policy/pages/PrivacyPolicyPage";
import TermsAndConditionsPages from "../feature/terms-and-conditions/pages/TermsAndConditionsPages";

const PageRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "courses",
    children: [
      {
        index: true,
        element: <CoursesHomePage />,
      },
      {
        path: ":slug",
        element: <CourseDetailPage />,
        children: [
          {
            index: true,
            element: <OverView />,
          },
          {
            path: "contents",
            element: <Contents />,
          },
          {
            path: "instructor",
            element: <Instructor />,
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
          {
            path: "faq",
            element: <FAQ />,
          },
        ],
      },
      {
        path: ":slug/:lessonSlug",
        element: <LessonDetailPage />,
      },
      {
        path: "*", // Catch-all for unmatched routes
        element: <div>not found</div>, // Replace with a proper 404 page
      },
    ],
  },
  {
    path: "become-an-instructor",
    children: [
      {
        index: true,
        element: <BecomeAnInstructorPage />, // This will render as the default when the parent route is accessed
      },
      {
        path: "apply-form",
        element: <ApplyFormPage />, // This will render when navigating to /become-an-instructor/apply-form
      },
    ],
  },
  {
    path: "terms-and-conditions",
    element: <TermsAndConditionsPages />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicyPage />,
  },
];

export default PageRoutes;
