import React from "react";
import Logo from "./Logo";
import icon from "../assets/icons/footericon-svg/Symbol.svg";
import icon1 from "../assets/icons/footericon-svg/Symbol-1.svg";
import icon2 from "../assets/icons/footericon-svg/Symbol-2.svg";
import icon3 from "../assets/icons/footericon-svg/Symbol-3.svg";
import icon4 from "../assets/icons/footericon-svg/Symbol-4.svg";
import PhoneCallIcon from "../assets/icons/footericon-svg/PhoneCall.svg";
import MapPin from "../assets/icons/footericon-svg/MapPin.svg";
import EnvelopeSimple from "../assets/icons/footericon-svg/EnvelopeSimple.svg";
import { Link, NavLink, useLocation, useSearchParams } from "react-router-dom";

const Footer = () => {
  const currentParth = useLocation().pathname;
  console.log(currentParth);
  const isIputFooter =
    currentParth === "/become-an-instructor" ||
    currentParth === "/apply-form" ||
    currentParth === "/";
    console.log(isIputFooter);
  return (
    <footer className=" mt-auto">
      <div className=" h-[200px] w-full lg:h-[150px]">{/* spaceer */}</div>
      <div className=" bg-neutral-700  text-neutral-100 text-xs sm:text-ps_font_size lg:text-pm_font_size w-full relative ">
        <div className="  bg-primary-color lg:w-[1212px] lg:h-[264px h-[232px] w-[363px] sm:w-[768px] sm:h-[207px] absolute lg:left-0 lg:right-0 lg:-top-[132px] left-0 right-0 -top-[190px] mx-auto rounded-xl">
          <h1>hello</h1>
        </div>
        <div className="min-h-[503px] flex justify-center items-center">
          <div className=" flex justify-center w-full max-w-[1208px] mx-auto">
            <div className="grid grid-cols-1 gap-8 sm:gap-6 lg:grid-cols-3 w-full p-4 lg:p-0">
              <div>
                <ul className=" dark:text-gray-400">
                  <li className=" w-[100px]">
                    <Logo />
                  </li>
                  <li className="mb-4">Explore the World Through Language</li>
                  <li className="flex gap-2">
                    <span className=" p-2 bg-neutral-400 rounded-sm  ">
                      <img
                        className="text-neutral-100 size-[12px] rounded-sm fill-current "
                        src={icon}
                        alt="icon1"
                      />
                    </span>
                    <span className=" p-2 bg-neutral-400 rounded-sm">
                      <img
                        className="text-neutral-100 size-[12px] rounded-sm fill-current"
                        src={icon4}
                        alt="icon4"
                      />
                    </span>
                    <span className=" p-2 bg-neutral-400 rounded-sm">
                      <img
                        className="text-neutral-100 size-[12px] rounded-sm fill-current"
                        src={icon3}
                        alt="icon3"
                      />
                    </span>
                    <span className=" p-2 bg-neutral-400 rounded-sm ">
                      <img
                        className="text-neutral-100 size-[12px] rounded-sm fill-current"
                        src={icon2}
                        alt="icon1"
                      />
                    </span>
                    <span className=" p-2 bg-neutral-400 rounded-sm ">
                      <img
                        className="text-neutral-100 size-[12px] rounded-sm fill-current"
                        src={icon1}
                        alt="icon1"
                      />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-4 gap-8 sm:gap-6 col-span-2">
                <div className="col-span-2">
                  <h2 className="mb-6 text-sm font-semibold uppercase">
                    Get in Touch
                  </h2>
                  <ul className=" flex flex-col gap-6 ">
                    <li className=" flex gap-2">
                      <img
                        className=" w-[16px] sm:w-[21px] "
                        src={MapPin}
                        alt=""
                      />
                      <span>1744(A), Shwe Myitter Street, Thaketa, Yangon</span>
                    </li>
                    <li className=" flex gap-2">
                      <img
                        className=" w-[16px] sm:w-[21px]"
                        src={PhoneCallIcon}
                        alt=""
                      />
                      <span className=" flex flex-col">
                        <span>+959 785568747</span>
                        <span>+959 785568748</span>
                      </span>
                    </li>
                    <li className=" flex gap-2">
                      <img
                        className=" w-[16px] sm:w-[21px]"
                        src={EnvelopeSimple}
                        alt="envelopeicon"
                      />
                      <span className=" flex flex-col">
                        <span>linguabridge@gmail.com</span>
                        <span>linguabridge645@gmail.com</span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-span-1">
                  <h2 className="mb-6 text-sm font-semibold uppercase">
                    Pages
                  </h2>
                  <ul className="flex flex-col">
                    <NavLink to="/" className="mb-4">
                      Home
                    </NavLink>
                    <NavLink to="/about" className="mb-4">
                      About Us
                    </NavLink>
                    <NavLink to="/contact" className="mb-4">
                      Contact
                    </NavLink>
                    <NavLink to={"/become-an-instructor"} className={"mb-4"}>
                      Become an Instructor
                    </NavLink>
                    <NavLink to="/courses">Courses</NavLink>
                  </ul>
                </div>
                <div className=" col-span-1">
                  <h2 className="mb-6 text-sm font-semibold uppercase ">
                    Legal
                  </h2>
                  <ul className="flex flex-col">
                    <NavLink to="/privacy-policy" className="mb-4">
                      Privacy Policy
                    </NavLink>
                    <NavLink to="/terms-and-conditions">
                      Terms &amp; Conditions
                    </NavLink>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between bg-neutral-900 w-full h-[115px] text-ps_font_size sm:text-pm_font_size px-4">
          <span className="text-sm text-neutral-100 sm:text-center">
            © 2024{" "}
            <a href="https://flowbite.com" className="hover:underline">
              | MCP7/MCF10
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <p>MMSIT Connection</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// className=" w-full "
