import React from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const FifthSection = () => {
  return (
    <section className="w-[1100px] mx-auto flex">
      <div className="grid grid-cols-5 bg-primary-color p-10 rounded-lg ">
        <div className="col-span-3">
          <p className="text-4xl text-white font-miniHeader_weight font-header_font_style">
            Ready to Explore New Languages
          </p>
          <p className="text-4xl text-white font-miniHeader_weight font-header_font_style">
            and Cultures?
          </p>
          <p className="text-white text-ps_font_size">
            Join us for tips, lessons, and exclusive updates straight to your
            inbox!
          </p>
        </div>
        <div className="col-span-2">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-sm"
          >
            <div className="relative">
              <Input
                type="email"
                placeholder="Your email address"
                className="w-full pr-24 h-10 border-[#00B8D4] focus:ring-[#00B8D4] focus:border-[#00B8D4]"
                required
              />
              <Button
                type="submit"
                className="absolute right-0 top-0 h-10 bg-[#00B8D4] hover:bg-[#00A4BD] text-white rounded-l-none"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
