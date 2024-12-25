import React, { useEffect } from "react";
import img1 from "../../../assets/Become an instructor/instructor_hero.png";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const HeroSection = () => {
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
    <section className="w-full  md:py-[120px] relative">
      <main className="max-w-[1207px]  lg:flex justify-between items-center  mx-auto px-5  max-lg:p-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.5 },
            },
            hidden: { opacity: 0, x: -50 },
          }}
          className=" w-fit h-fit space-y-16 flex flex-col justify-end mt-auto "
        >
          <p className=" w-fit rounded-[4px] px-[8px] py-[4px] text-ps_font_size leading-[16.94px] text-neutral-900 bg-secondary-color">
            🚀 Transform Lives Through the Power of Language Education
          </p>

          <h1 className=" w-fit items-center font-header_font_style font-header_weight text-[35px] md:text-[40px]  text-neutral-900 ">
            Join Our Community of Language Experts
          </h1>
          <p className="w-fit  text-[18px] leading-[27px] text-neutral-600">
            Learn foreign languages effortlessly with expert guidance in your
            native Myanmar language. Start your journey today!
          </p>
          <Link
            to={"/become-an-instructor/apply-form"}
            className="w-[137px] text-center rounded-[4px] px-[8px] py-[12px] bg-primary-color text-neutral mt-10 active:scale-75 transition-all duration-200 ease-in-out"
          >
            Apply Now
          </Link>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.5 },
            },
            hidden: { opacity: 0, x: 50 },
          }}
          className="  max-lg:mt-10"
        >
          <img src={img1} className="w-full " alt="" />
        </motion.div>
      </main>
    </section>
  );
};

export default HeroSection;
