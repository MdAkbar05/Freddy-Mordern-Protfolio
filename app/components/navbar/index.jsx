"use client";

import { Avatar } from "@material-tailwind/react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { ImCoinEuro } from "react-icons/im";

import Link from "next/link";
import React from "react";
import logo from "./img/logo.png";
import icon from "./img/icons.png";
import avatar from "./img/avatar.png";
const Navigations = () => {
  return (
    <nav className="navbar">
      <div className="flexCenter border h-24 min-w-16 mx-0">
        <Link href="/">
          <img className="min-w-6 h-6" src={icon.src} alt="Logo" />
        </Link>
      </div>
      <div className="flex justify-between w-full px-8 border-b">
        <div className="flexCenter">
          <div className="flex justify-center items-center h-24 w-20">
            <img className="w-12" src={logo.src} alt="" />
          </div>
          <div>
            <div className="font-semibold md:text-lg sm:text-base">
              Hello Preddy,
            </div>
            <div className="text-gray-800 lg:block sm:hidden">
              3 new jobs, one interview on Wednesday, 2 new messages
            </div>
          </div>
        </div>
        <div className="flexCenter gap-4">
          <div className="roundPadding border bg-white flexCenter gap-x-2 sm:hidden md:flex">
            <span>20 Credits</span> <ImCoinEuro className="text-orange-600" />
          </div>
          <div className="text-gray-400 font-thin">|</div>
          <div className="flexCenter size-10 rounded-full bg-white border">
            <IoChatbubbleOutline className=" h-6 w-6 text-[#02164F]" />
          </div>
          <div className="flexCenter size-10 rounded-full bg-white border sm:hidden md:flex">
            <IoMdNotificationsOutline className="h-6 w-6 text-[#02164F]" />
          </div>
          <div className="text-gray-400 font-thin">|</div>
          <div className="flexCenter gap-2">
            <Avatar src={avatar.src} alt="avatar" />
            <div>Freddy Ch.</div>
            <div className="cursor-pointer">
              <MdOutlineKeyboardArrowDown className="h-6 w-6 text-gray-400 hover:text-gray-900 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigations;
