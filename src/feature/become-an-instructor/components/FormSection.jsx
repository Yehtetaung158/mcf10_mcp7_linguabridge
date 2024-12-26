import { RiExpandUpDownLine } from "react-icons/ri";
import { GoUpload } from "react-icons/go";
import { useRef } from "react";

const FormSection = () => {
  const uploadRef = useRef();
  return (
    <section className="w-full md:py-[10px]">
      <main>
        <div className="w-full h-[250px] bg-mobile md:bg-tablet lg:bg-pc bg-cover bg-center rounded-2xl"></div>
        <div className="w-full h-fit">
          <form className="w-full flex flex-col justify-center items-center py-20">
            <h1 className="font-header_font_style font-miniHeader_weight text-[15px] md:text-[24px] text-neutral-900 mb-16">
              Personal Information
            </h1>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-normal text-neutral-900">
                Name
              </label>
              <input
                className="lg:w-[500px] h-[40px] rounded-[4px] mb-5 border border-[#A3A3A3] px-4"
                type="text"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-normal text-neutral-900">
                Email
              </label>
              <input
                className="lg:w-[500px] h-[40px] rounded-[4px] mb-5 border border-[#A3A3A3] px-4"
                type="text"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-normal text-neutral-900">
                Phone Number
              </label>
              <input
                className="lg:w-[500px] h-[40px] rounded-[4px] mb-5 border border-[#A3A3A3] px-4"
                type="text"
                id="phone"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="experience"
                className="font-normal text-neutral-900"
              >
                Teaching Experience
              </label>
              <div className="relative lg:w-[500px]">
                <select
                  id="experience"
                  name="experience"
                  className="w-[250px] lg:w-[500px] h-[40px] rounded-[4px] border border-[#A3A3A3] px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Korean">Korean</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Spanish">Spanish</option>
                  <option value="English">English</option>
                </select>
                <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-600">
                  <RiExpandUpDownLine />
                </span>
              </div>
            </div>
            <div className="mt-16">
              <h1 className="font-header_font_style font-miniHeader_weight text-[15px] md:text-[24px] text-neutral-900 mb-16 text-center">
                Qualifications
              </h1>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="edu_file"
                  className="font-normal text-neutral-900"
                >
                  Educational Background
                </label>
                <input
                  className="lg:w-[500px] h-[40px] rounded-[4px] border border-[#A3A3A3] px-4"
                  type="text"
                  id="edu_file"
                />
                <input
                  ref={uploadRef}
                  className="hidden"
                  type="file"
                  id="edu_file"
                />
                <button
                  className="w-fit flex items-center justify-end h-[40px] rounded-[4px] mb-5 px-4 bg-[#17A2B8] text-white"
                  type="button"
                  onClick={() => uploadRef.current.click()}
                >
                  <GoUpload />
                </button>
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label
                  htmlFor="certi_file"
                  className="font-normal text-neutral-900"
                >
                  Certifications
                </label>
                <input
                  className="lg:w-[500px] h-[40px] rounded-[4px] border border-[#A3A3A3] px-4"
                  type="text"
                  id="certi_file"
                />
                <input
                  ref={uploadRef}
                  className="hidden"
                  type="file"
                  id="edu_file"
                />
                <button
                  className="w-fit flex items-center justify-end h-[40px] rounded-[4px] mb-5 px-4 bg-[#17A2B8] text-white"
                  type="button"
                  onClick={() => uploadRef.current.click()}
                >
                  <GoUpload />
                </button>
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label
                  htmlFor="course"
                  className="font-normal text-neutral-900"
                >
                  Relevant Course or Training
                </label>
                <input
                  className="lg:w-[500px] h-[40px] mb-5 rounded-[4px] border border-[#A3A3A3] px-4"
                  type="text"
                  id="course"
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <textarea
                  className="lg:w-[500px] h-[100px] rounded-[4px] mb-5 border border-[#A3A3A3] px-4 py-5"
                  id="message"
                  placeholder="Type your message here..."
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <button
                  className="w-full flex items-center justify-center h-[40px] rounded-[4px] mb-5 px-4 bg-[#17A2B8] text-white"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
};

export default FormSection;
