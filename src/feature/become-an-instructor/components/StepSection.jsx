import React, { useEffect } from "react";
import dot from "../../../assets/Become an instructor/dot.svg";
import s1 from "../../../assets/Become an instructor/step1.svg";
import s2 from "../../../assets/Become an instructor/step2.svg";
import s3 from "../../../assets/Become an instructor/step3.svg";
import { motion , useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";

const StepSection = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => { 
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  return (
    <section className="w-full  lg:py-[120px]">
      <main className="max-w-[1207px]  lg:flex flex-col justify-between items-center mx-auto  max-lg:p-10">
        <div className=" w-fit h-fit space-y-10 mx-auto text-center  ">
          <motion.div 
           initial="hidden"
           ref={ref}
           animate={controls}
           variants={{
             visible: { opacity: 1, scale: 1 , transition: { duration: 0.6 , delay: 0.2 , ease: "easeInOut" } },
             hidden: { opacity: 0, scale: 0.8 },
           }}

           className=" w-fit mx-auto flex gap-3  rounded-[4px] px-[8px] py-[4px] text-ps_font_size leading-[16.94px] text-neutral-900 bg-secondary-color">
            <img src={dot} width={20} height={10} alt="" />
            <p className="text-neutral-900 text-md">
              Your Path to Inspiring Others: A Simple 3-Step Process
            </p>
          </motion.div>

          <motion.h1 
          initial="hidden"
          ref={ref}
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1 , transition: { duration: 0.6 , delay: 1 , ease: "easeInOut" } },
            hidden: { opacity: 0, scale: 0.5 },
          }}

          className=" w-full px-12 font-header_font_style font-miniHeader_weight text-[15px]  md:text-[40px] leading-[68px] lg:leading-[90px] text-neutral-900 ">
            Become an Instructor: Step-by-Step
          </motion.h1>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-5 md:mt-16">
          <motion.div 
              initial="hidden"
              ref={ref}
              animate={controls}
              variants={{
                visible: { opacity: 1, scale: 1 , transition: { duration: 0.6 , delay: 1.5 , ease: "easeInOut" } },
                hidden: { opacity: 0, scale: 0.5 },
              }}

          className="flex flex-col items-center text-center">
            <img src={s1} alt="" className="w-20 h-20 object-contain mb-4" />
            <h1 className="font-header_font_style font-miniHeader_weight text-neutral-900 my-3">
              Apply
            </h1>
            <p className="text-sm font-normal text-neutral-600 max-w-xs">
              Fill out our simple application form to get started. Tell us about
              your teaching experience and the language(s) you wish to teach.
            </p>
          </motion.div>
          <motion.div
              initial="hidden"
              ref={ref}
              animate={controls}
              variants={{
                visible: { opacity: 1, scale: 1 , transition: { duration: 0.6 , delay: 2 , ease: "easeInOut" } },
                hidden: { opacity: 0, scale: 0.5 },
              }}
               className="flex flex-col items-center text-center">
            <img src={s2} alt="" className="w-20 h-20 object-contain mb-4" />
            <h1 className="font-header_font_style font-miniHeader_weight text-neutral-900 my-3">
              Review and Approval
            </h1>
            <p className="text-sm font-normal text-neutral-600 max-w-xs">
              Once your application is received, our team will review your
              qualifications and get back to you with feedback. We ensure that
              all instructors meet our standards.
            </p>
          </motion.div>
          <motion.div 
              initial="hidden"
              ref={ref}
              animate={controls}
              variants={{
                visible: { opacity: 1, scale: 1 , transition: { duration: 0.6, delay: 2.5 , ease: "easeInOut" } },
                hidden: { opacity: 0, scale: 0.5 },
              }}
              className="flex flex-col items-center text-center">
            <img src={s3} alt="" className="w-20 h-20 object-contain mb-4" />
            <h1 className="font-header_font_style font-miniHeader_weight text-neutral-900 my-3">
              Start Teaching!
            </h1>
            <p className="text-sm font-normal text-neutral-600 max-w-xs">
              Once your course is live, you’ll begin teaching learners from
              around the world. Track your students’ progress, provide feedback,
              and enjoy the teaching experience!
            </p>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default StepSection;
