"use client";
import React from "react";
import icon from "../navbar/img/icons.png";
import matchtable from "../../assets/img/matchtable.png";
import { Typography } from "@material-tailwind/react";

import Linkedin from "./img/Linkedin.png";
import Medium from "./img/Medium.png";
import Twitter from "./img/Twitter.png";
import Youtube from "./img/Youtube.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footerStyle">
        {/* left column  */}
        <div className="flex flex-col gap-y-6">
          <div className="flex items-center justify-start gap-x-2 ">
            <img src={icon.src} alt="" className="h-6 w-6   cursor-pointer" />
            <img src={matchtable.src} alt="" className="w-36  cursor-pointer" />
          </div>
          <Typography as="p" className="font-bold text-[#02164F] italic">
            Bringing people and jobs together
          </Typography>
          <Typography as="p" className="font-bold text-[#02164F] italic">
            ®2023 Matchable
          </Typography>
        </div>

        {/* Right Column  */}
        <div className="flex gap-x-16">
          <div className="flex flex-col gap-y-4">
            <Typography className="text-xl font-bold text-[#02164F]">
              For Candidates
            </Typography>
            <div className="flex flex-col gap-y-2">
              <Typography className="text-base font-normal text-[#02164F]">
                How it works?
              </Typography>
              <Typography className="text-base font-normal text-[#02164F]">
                Assessment Process
              </Typography>
              <Typography className="text-base font-normal text-[#02164F]">
                Sign Up
              </Typography>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <Typography className="text-xl font-bold text-[#02164F]">
              Company
            </Typography>
            <div className="flex flex-col gap-y-2">
              <Typography className="text-base font-normal text-[#02164F]">
                About us
              </Typography>
              <Typography className="text-base font-normal text-[#02164F]">
                Blog
              </Typography>
              <Typography className="text-base font-normal text-[#02164F]">
                Contact
              </Typography>
              <Typography className="text-base font-normal text-[#02164F]">
                FAQ
              </Typography>
              <Typography className="text-base font-normal text-[#02164F]">
                Privacy Policy
              </Typography>
              <Typography className="text-base font-normal text-[#02164F]">
                Cookie Declaration
              </Typography>
              <div className="flex items-center justify-start gap-x-2">
                <img
                  src={Linkedin.src}
                  alt=""
                  className="h-6 w-6   cursor-pointer"
                />
                <img
                  src={Twitter.src}
                  alt=""
                  className="h-6 w-6   cursor-pointer"
                />
                <img
                  src={Youtube.src}
                  alt=""
                  className="h-6 w-6   cursor-pointer"
                />
                <img
                  src={Medium.src}
                  alt=""
                  className="h-6 w-6   cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center text-gray-700 mt-[-24px]">
        &copy; {currentYear} Freddy Chebli. All Rights Reserved.
      </div>
    </>
  );
};
export default Footer;
