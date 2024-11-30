import { useParams } from "react-router-dom";

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
      {isBeginner && (
        <BeginnerDetail title={title} slug={slug} country={country} />
      )}
      {isElementary && <ElementaryDetail title={title} />}
      {isIntermediate && <IntermediateDetail title={title} />}
    </section>
  );
};

export default CourseDetailPage;
