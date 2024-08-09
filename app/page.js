"use client";
import { Avatar } from "@material-tailwind/react";
import avatar from "./components/navbar/img/avatar.png";
import edit from "./assets/img/editIcon.png";
import open from "./assets/img/openIcon.png";
import mark from "./assets/img/mark.png";
import downloadIcon from "./assets/img/downloadIcon.png";
import pdf from "./assets/img/pdfIcon.png";
import link from "./assets/img/linkIcon.png";

import Certified from "./assets/img/Certified.png";
import Certified2 from "./assets/img/Certified2.png";
import Certified3 from "./assets/img/Certified3.png";

import Services from "./components/services-card";
import Skill from "./components/skill";

export default function Home() {
  return (
    <main className="main fontMontreal">
      {/* Hero section  */}
      <div className="flexCenter flex-col gap-8 py-14">
        <Avatar src={avatar.src} alt="avatar" />
        <div className="flexCenter ">
          <div className="text-3xl fontMontreal font-normal mr-6 text-[#02164F]">
            Freddy Chebli
          </div>
          <div className="cursor-pointer">
            <img src={open.src} alt="edit" />
          </div>
        </div>
        <div className="flexCenter gap-2">
          <div className="roundPadding bg-white text-gray-700 cursor-pointer">
            Fullstack
          </div>
          <div>•</div>
          <div className="roundPadding bg-white text-gray-700 cursor-pointer">
            Open to Work
          </div>
        </div>
        <div className="flex justify-center gap-2 relative">
          <div className="absolute left-[-40px] pt-1 cursor-pointer">
            <img
              src={edit.src}
              alt="edit"
              className="h-10 w-10 rounded-lg  cursor-pointer"
            />
          </div>
          <div className="largeText font-bold text-center ml-6 text-[#02164F]">
            <span>Engineering Seamless</span> <br />
            <span>Software Solutions</span>
          </div>
        </div>
      </div>

      {/* Main abouts section  */}
      {/*Margin bottom mb-96 temporary added for space  */}
      <div className="bg-white p-8 rounded-[64px] w-full flex flex-col justify-center gap-14 mb-96">
        {/* Tags sections  */}
        <div className="flex gap-x-2 flex-wrap gap-y-2">
          <div className="active roundPadding cursor-pointer">About Erin</div>
          <div className="inactive roundPadding cursor-pointer">About Erin</div>
          <div className="inactive roundPadding cursor-pointer">
            Matched Jobs
          </div>
          <div className="inactive roundPadding cursor-pointer">
            Assesstments
          </div>
          <div className="inactive roundPadding cursor-pointer">Timeline</div>
          <div className="inactive roundPadding cursor-pointer">
            Intro Video
          </div>
          <div className="inactive roundPadding cursor-pointer">
            Personality
          </div>
          <div className="inactive roundPadding cursor-pointer">More info</div>
          <div className="inactive roundPadding cursor-pointer">My Groups</div>
        </div>
        {/* Career Profile Sections  */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-[#02164F]">
              Career Profile
            </div>
            <img
              src={edit.src}
              alt="edit"
              className="h-10 w-10 rounded-lg  cursor-pointer"
            />
          </div>
          <div className="text-lg rounded-3xl font-normal py-4 px-6 bg-[#F5F9FE]">
            Erin Deluca is currently a Maths teacher and is also providing
            private tutoring. She is pursuing a Master's degree in Actuarial
            Science after completing her Bachelor's degree in Mathematics.
          </div>
        </div>
        {/* Earned badges  */}
        <div className="flex flex-col gap-y-2">
          <div className="text-xl font-bold text-[#02164F]">Earned Badges</div>
          <div className="flex gap-x-8 flex-wrap gap-y-4">
            <div className=" rounded-3xl cursor-pointer hover:bg-[#deeaf9] min-w-40 w-60 p-8 flexCenter flex-col bg-[#F5F9FE]">
              <img src={Certified.src} alt="" />
              <div className="text-[#02164F]">Beginner - Frontend</div>
            </div>
            <div className=" rounded-3xl cursor-pointer hover:bg-[#deeaf9] min-w-40 w-60 p-8 flexCenter flex-col bg-[#F5F9FE]">
              <img src={Certified2.src} alt="" />
              <div className="text-[#02164F]">Intermediate - Frontend</div>
            </div>
            <div className=" rounded-3xl cursor-pointer hover:bg-[#deeaf9] min-w-40 w-60 p-8 flexCenter flex-col bg-[#F5F9FE]">
              <img src={Certified3.src} alt="" />
              <div className="text-[#02164F]">Expert - Frontend</div>
            </div>
          </div>
        </div>
        {/* skill section  */}
        <div className="flex flex-col gap-y-2">
          <div className="text-xl font-bold text-[#02164F]">Skill</div>
          <div className="flex gap-4 flex-wrap ">
            <Skill title="Ruby on Rails" src={mark.src} />
            <Skill title="Backend" src={mark.src} />
            <Skill title="French" />
            <Skill title="Spanish" />
            <Skill title="Portuguese" />
            <div className="skillCardAdd border-2  font-medium text-[#02164F]">
              Add Skill +
            </div>
          </div>
        </div>
        {/* Services Offers  */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-[#02164F]">
              Services Erin Offers
            </div>
            <img
              src={edit.src}
              alt="edit"
              className="h-10 w-10 rounded-lg  cursor-pointer"
            />
          </div>

          <div className="flex gap-x-8 flex-wrap gap-y-4">
            <Services
              title="Custom Web Development"
              desc="Tailored front-end and back-end solutions using the MERN stack"
            />
            <Services
              title="Responsive Web Design"
              desc="Creating visually appealing and mobile-friendly web designs"
            />
            <Services
              title="Project Management & Consultation"
              desc="Guiding web projects from conception to launch with expert oversight"
            />
          </div>
        </div>
        {/* Documents Download  */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-[#02164F]">Documents</div>
            <img
              src={edit.src}
              alt="edit"
              className="h-10 w-10 rounded-lg  cursor-pointer"
            />
          </div>

          <div className="flex gap-x-8 flex-wrap gap-y-4">
            <div className="flex justify-between items-center min-w-40 w-96 bg-[#F5F9FE] rounded-2xl p-4">
              <div className="flex gap-x-1 items-center ">
                <div>Erin CV</div>
                <img
                  src={pdf.src}
                  alt="pdf"
                  className="h-10 w-10 rounded-lg  cursor-pointer"
                />
              </div>
              <img
                src={downloadIcon.src}
                alt="downloadIcon"
                className="h-10 w-10 rounded-lg  cursor-pointer"
              />
            </div>

            <div className="flex justify-between items-center min-w-40 w-96 bg-[#F5F9FE] rounded-2xl p-4">
              <div className="flex gap-x-1 items-center ">
                <div>Erin CV</div>
                <img
                  src={pdf.src}
                  alt="pdf"
                  className="h-10 w-10 rounded-lg  cursor-pointer"
                />
              </div>
              <img
                src={downloadIcon.src}
                alt="downloadIcon"
                className="h-10 w-10 rounded-lg  cursor-pointer"
              />
            </div>
            <div className="skillCardAdd border-2  font-medium text-[#02164F]">
              Add a new document (up to 6 mbs) +
            </div>
          </div>
        </div>
        {/* Links sections */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-[#02164F]">Links</div>
            <img
              src={edit.src}
              alt="edit"
              className="h-10 w-10 rounded-lg  cursor-pointer"
            />
          </div>

          <div className="flex gap-x-8 flex-wrap gap-y-4">
            <div className="flex justify-between items-center min-w-36 w-96 bg-[#F5F9FE] rounded-2xl px-4 py-2">
              <div className="flex gap-x-1 items-center ">www.linkedin.com</div>
              <img
                src={link.src}
                alt="downloadIcon"
                className="h-10 w-10 rounded-lg  cursor-pointer"
              />
            </div>

            <div className="flex justify-between items-center min-w-36 w-96 bg-[#F5F9FE] rounded-2xl px-4 py-2">
              <div className="flex gap-x-1 items-center ">www.github.com</div>
              <img
                src={link.src}
                alt="downloadIcon"
                className="h-10 w-10 rounded-lg  cursor-pointer"
              />
            </div>
            <div className="flex justify-between items-center min-w-36 w-96 bg-[#F5F9FE] rounded-2xl px-4 py-2">
              <div className="flex gap-x-1 items-center ">
                www.other-website.com
              </div>
              <img
                src={link.src}
                alt="downloadIcon"
                className="h-10 w-10 rounded-lg  cursor-pointer"
              />
            </div>
            <div className="skillCardAdd border-2  font-medium text-[#02164F] px-4 py-2 min-w-44">
              Add new link
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
