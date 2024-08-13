"use client";
import {
  Avatar,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Textarea,
  Tooltip,
  Typography,
} from "@material-tailwind/react";

import { MdOutlineKeyboardArrowDown, MdOutlineDone } from "react-icons/md";

import avatar from "./components/navbar/img/avatar.png";
import edit from "./assets/img/editIcon.png";
import open from "./assets/img/openIcon.png";
import mark from "./assets/img/mark.png";
import downloadIcon from "./assets/img/downloadIcon.png";
import pdf from "./assets/img/pdfIcon.png";
import link from "./assets/img/linkIcon.png";

import love from "./assets/img/love.png";
import file from "./assets/img/file.png";
import play from "./assets/img/play.png";
import hire from "./assets/img/hire.png";
import google from "./assets/img/google.png";

import score from "./assets/img/score.png";

import Certified from "./assets/img/Certified.png";
import Certified2 from "./assets/img/Certified2.png";
import Certified3 from "./assets/img/Certified3.png";

import Services from "./components/services-card";
import Skill from "./components/skill";
import { useState } from "react";
import JobCard from "./components/job-card";

export default function Home() {
  const [editProfile, setEditProfile] = useState(false);
  const [title, setTitle] = useState("Engineering Seamless Software Solutions");
  const [career, setCareer] = useState(
    "Erin Deluca is currently a Maths teacher and is also providing private tutoring. She is pursuing a Master's degree in Actuarial Science after completing her Bachelor's degree in Mathematics."
  );
  const [activeTab, setActiveTab] = useState("about-erin");

  const tabsData = [
    { label: "About Erin", value: "about-erin" },
    { label: "Matched Jobs", value: "matched-jobs" },
    { label: "Assessments", value: "assessments" },
    { label: "Timeline", value: "timeline" },
    { label: "Intro Video", value: "intro-video" },
    { label: "Personality", value: "personality" },
    { label: "More info", value: "more-info" },
    { label: "My Groups", value: "my-groups" },
  ];

  const handleEdit = () => {
    setEditProfile(!editProfile);
  };
  return (
    <>
      <main className="main fontMontreal">
        {/* Hero section  */}
        <div className="flexCenter flex-col md:gap-8 sm:gap-2  py-14">
          <Avatar src={avatar.src} alt="avatar" />
          <div className="flexCenter ">
            <div className="md:text-3xl sm:text-xl fontMontreal font-normal mr-6 text-[#02164F]">
              Freddy Chebli
            </div>
            <div className="cursor-pointer">
              <Tooltip
                content="Share Profile"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <img src={open.src} alt="edit" />
              </Tooltip>
            </div>
          </div>
          <div className="flexCenter gap-2">
            <div className="roundPadding bg-white text-gray-700 cursor-pointer flexCenter gap-2">
              <span>Fullstack</span>
              <MdOutlineKeyboardArrowDown />
            </div>
            <div>•</div>
            <div className="roundPadding bg-white text-gray-700 cursor-pointer flexCenter gap-2">
              <span>Open to work</span>
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
          <div className="flex justify-center gap-2 relative">
            <div
              onClick={() => handleEdit()}
              className="absolute md:left-[-40px]  sm:left-[-10px] md:pt-1 cursor-pointer"
            >
              <Tooltip
                content={editProfile ? "Save Profile" : "Edit Profile"}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                {editProfile ? (
                  <MdOutlineDone className="border w-10 h-10 bg-white rounded-full cursor-pointer" />
                ) : (
                  <img
                    src={edit.src}
                    alt="edit"
                    className="h-10 w-10 rounded-lg  cursor-pointer"
                  />
                )}
              </Tooltip>
            </div>
            {editProfile ? (
              <Textarea
                onChange={(e) => setTitle(e.target.value)}
                size="lg"
                variant="static"
                placeholder="Engineering Seamless
              Software Solutions"
                className="fontMontreal largeText font-bold text-center border-none  "
              />
            ) : (
              <Typography className="fontMontreal md:largeText sm:text-2xl font-bold text-center ml-6 md:w-[600px] sm:w-72 text-[#02164F]">
                {title}
              </Typography>
            )}
          </div>
        </div>

        <div className="bg-white md:p-8 sm:p-4 md:rounded-[64px] sm:rounded-3xl w-full flex flex-col justify-center gap-14 mb-96">
          <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
            <TabsHeader className="flex justify-between bg-transparent gap-x-2 flex-wrap">
              {tabsData.map((tab) => (
                <Tab
                  key={tab.label}
                  value={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`rounded-2xl py-2 px-4 font-semibold cursor-pointer w-fit`}
                  // className={`py-2 px-4 rounded-lg cursor-pointer   ${
                  //   activeTab === tab.value
                  //     ? "bg-blue-500 text-white"
                  //     : "bg-gray-200 text-black"
                  // } `}
                >
                  {tab.label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              <TabPanel value="about-erin" className="flex flex-col gap-14">
                {/* Career Profile Sections  */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-[#02164F]">
                      Career Profile
                    </div>
                    <div onClick={() => handleEdit()}>
                      <Tooltip
                        content={editProfile ? "Save Profile" : "Edit Profile"}
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        {editProfile ? (
                          <MdOutlineDone className="border w-10 h-10 bg-white rounded-full cursor-pointer" />
                        ) : (
                          <img
                            src={edit.src}
                            alt="edit"
                            className="h-10 w-10 rounded-lg  cursor-pointer"
                          />
                        )}
                      </Tooltip>
                    </div>
                  </div>
                  {editProfile ? (
                    <Textarea
                      onChange={(e) => setCareer(e.target.value)}
                      size="lg"
                      variant="static"
                      placeholder="Engineering Seamless
            Software Solutions"
                      className="fontMontreal text-2xl rounded-3xl font-normal py-4 px-6 bg-[#F5F9FE]r border-none  "
                    />
                  ) : (
                    <div className="text-lg rounded-3xl font-normal py-4 px-6 bg-[#F5F9FE]">
                      {career}
                    </div>
                  )}
                </div>
                {/* Earned badges  */}
                <div className="flex flex-col gap-y-2">
                  <div className="text-xl font-bold text-[#02164F]">
                    Earned Badges
                  </div>
                  <div className="flex gap-x-8 flex-wrap gap-y-4">
                    <div className=" rounded-3xl cursor-pointer hover:bg-[#deeaf9] min-w-40 w-60 p-8 flexCenter sm:flex-row gap-x-8 md:flex-col bg-[#F5F9FE]">
                      <img src={Certified.src} alt="" />
                      <div className="text-[#02164F]">Beginner - Frontend</div>
                    </div>
                    <div className=" rounded-3xl cursor-pointer hover:bg-[#deeaf9] min-w-40 w-60 p-8 flexCenter sm:flex-row gap-x-8 md:flex-col flex-col bg-[#F5F9FE]">
                      <img src={Certified2.src} alt="" />
                      <div className="text-[#02164F]">
                        Intermediate - Frontend
                      </div>
                    </div>
                    <div className=" rounded-3xl cursor-pointer hover:bg-[#deeaf9] min-w-40 w-60 p-8 flexCenter sm:flex-row gap-x-8 md:flex-col flex-col bg-[#F5F9FE]">
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
                    <div className="text-xl font-bold text-[#02164F]">
                      Documents
                    </div>
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
                    <div className="text-xl font-bold text-[#02164F]">
                      Links
                    </div>
                    <img
                      src={edit.src}
                      alt="edit"
                      className="h-10 w-10 rounded-lg  cursor-pointer"
                    />
                  </div>

                  <div className="flex gap-x-8 flex-wrap gap-y-4">
                    <div className="flex justify-between items-center min-w-36 w-96 bg-[#F5F9FE] rounded-2xl px-4 py-2">
                      <div className="flex gap-x-1 items-center ">
                        www.linkedin.com
                      </div>
                      <img
                        src={link.src}
                        alt="downloadIcon"
                        className="h-10 w-10 rounded-lg  cursor-pointer"
                      />
                    </div>

                    <div className="flex justify-between items-center min-w-36 w-96 bg-[#F5F9FE] rounded-2xl px-4 py-2">
                      <div className="flex gap-x-1 items-center ">
                        www.github.com
                      </div>
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
              </TabPanel>

              <TabPanel value="matched-jobs" className="flex flex-col gap-14">
                {/* Matched Jobs Content */}
                <div className="text-xl font-bold text-[#02164F]">
                  Jobs post matches
                </div>
                <div className="flex gap-x-8 flex-wrap gap-y-4">
                  {/* Matched  */}
                  <div className="flex flex-col gap-y-4 border p-6 rounded-xl">
                    {/* card header  */}
                    <div className="flex justify-between">
                      <div className="flex gap-x-2">
                        <img src={love.src} className="w-6" alt="love" />
                        <div className="text-xl font-bold text-[#02164F]">
                          Matched (36)
                        </div>
                      </div>
                      <div className="text-[#02164F] cursor-pointer">
                        View all
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <JobCard
                        company="google"
                        icon={google.src}
                        match="Matched"
                        prof="Senior UI Designer - Full Time-Remote"
                        percent="77% Match"
                      />
                      <JobCard
                        company="google"
                        icon={google.src}
                        match="Matched"
                        prof="Senior UI Designer - Full Time-Remote"
                        percent="77% Match"
                      />
                      <JobCard
                        company="google"
                        icon={google.src}
                        match="Matched"
                        prof="Senior UI Designer - Full Time-Remote"
                        percent="77% Match"
                      />
                      <JobCard
                        company="google"
                        icon={google.src}
                        match="Matched"
                        prof="Senior UI Designer - Full Time-Remote"
                        percent="77% Match"
                      />
                    </div>
                  </div>
                  {/* Shortlisted  */}
                  <div className="flex flex-col gap-y-4 border p-6 rounded-xl">
                    {/* card header  */}
                    <div className="flex justify-between">
                      <div className="flex gap-x-2">
                        <img src={file.src} className="w-6" alt="love" />
                        <div className="text-xl font-bold text-[#02164F]">
                          Shortlisted (3)
                        </div>
                      </div>
                      <div className="text-[#02164F] cursor-pointer">
                        View all
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <JobCard
                        company="google"
                        icon={google.src}
                        match="Matched"
                        prof="Senior UI Designer - Full Time-Remote"
                        percent="77% Match"
                      />
                      <JobCard
                        company="google"
                        icon={google.src}
                        match="Matched"
                        prof="Senior UI Designer - Full Time-Remote"
                        percent="77% Match"
                      />
                      <JobCard
                        company="google"
                        icon={google.src}
                        match="Matched"
                        prof="Senior UI Designer - Full Time-Remote"
                        percent="77% Match"
                      />
                    </div>
                  </div>
                  {/* Interviewed  */}
                  <div className="flex flex-col gap-y-4 border p-6 rounded-xl">
                    {/* card header  */}
                    <div className="flex justify-between">
                      <div className="flex gap-x-2">
                        <img src={play.src} className="w-6" alt="love" />
                        <div className="text-xl font-bold text-[#02164F]">
                          Interviewed (2)
                        </div>
                      </div>
                      <div className="text-[#02164F] cursor-pointer">
                        View all
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <JobCard
                        company="google"
                        icon={google.src}
                        match="Matched"
                        prof="Senior UI Designer - Full Time-Remote"
                        percent="77% Match"
                      />
                      <JobCard
                        company="google"
                        icon={google.src}
                        match="Matched"
                        prof="Senior UI Designer - Full Time-Remote"
                        percent="77% Match"
                      />
                    </div>
                  </div>
                  {/* Hired  */}
                  <div className="flex flex-col gap-y-4 border p-6 rounded-xl">
                    {/* card header  */}
                    <div className="flex justify-between">
                      <div className="flex gap-x-2">
                        <img src={hire.src} className="w-6" alt="love" />
                        <div className="text-xl font-bold text-[#02164F]">
                          Hired (1)
                        </div>
                      </div>
                      <div className="text-[#02164F] cursor-pointer">
                        View all
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <JobCard
                        company="google"
                        icon={google.src}
                        match="Matched"
                        prof="Senior UI Designer - Full Time-Remote"
                        percent="77% Match"
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel value="assessments" className="flex flex-col gap-14">
                {/* Assessments Content */}
                <div className="flex justify-between">
                  <div className="text-xl font-bold text-[#02164F]">
                    Assessments
                  </div>
                  <div className="roundPadding border text-[#02164F]  ">
                    View All Assessments
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="flex flex-col justify-center bg-[#f5f8fd] border p-6 rounded-3xl ">
                    <div className="text-xl font-bold text-[#02164F]">MCQs</div>
                    <div className="text-black">
                      Ratio of correct vs wrong answers
                    </div>
                    <img src={score.src} className="w-full  p-2 " alt="" />
                  </div>

                  <div className="flex flex-col justify-center bg-[#f5f8fd] border p-6 rounded-3xl ">
                    <div className="text-xl font-bold text-[#02164F]">MCQs</div>
                    <div className="text-black">
                      Ratio of correct vs wrong answers
                    </div>
                    <img src={score.src} className="w-full  p-2 " alt="" />
                  </div>

                  <div className="flex flex-col justify-center bg-[#f5f8fd] border p-6 rounded-3xl ">
                    <div className="text-xl font-bold text-[#02164F]">MCQs</div>
                    <div className="text-black">
                      Ratio of correct vs wrong answers
                    </div>
                    <img src={score.src} className="w-full  p-2 " alt="" />
                  </div>
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </main>
    </>
  );
}
