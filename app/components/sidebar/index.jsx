import React from "react";

import { MdOutlineAddChart } from "react-icons/md";
import { MdStorefront } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { IoMdGift } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";

import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between  py-4 w-16 h-96 float-left border overflow-hidden rounded-br-3xl sticky left-0 ">
      <ul className="flexCenter flex-col  gap-y-8">
        <li>
          <Link
            href="#about"
            className="text-gray-600 cursor-pointer hover:text-gray-800"
          >
            <MdOutlineAddChart className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="text-gray-600 cursor-pointer hover:text-gray-800"
          >
            <IoMdGift className="w-6 h-6" />{" "}
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="text-gray-600 cursor-pointer hover:text-gray-800"
          >
            <MdStorefront className="w-6 h-6" />{" "}
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="text-gray-600 cursor-pointer hover:text-gray-800"
          >
            <LuClipboardList className="w-6 h-6" />{" "}
          </Link>
        </li>
      </ul>
      <div className="flexCenter cursor-pointer text-center text-gray-600 hover:text-gray-800">
        <MdOutlineSettings className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Sidebar;
