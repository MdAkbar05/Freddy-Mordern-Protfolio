import React from "react";

const JobCard = ({ match, icon, company, prof, percent }) => {
  return (
    <div className="border p-4 flex flex-col gap-y-2 bg-[#f5f8fd] rounded-lg">
      <div className="flex justify-between ">
        <img
          className="w-11 h-11 p-1.5 rounded-full border"
          src={icon}
          alt={company}
        />
        <div className="roundPadding border bg-white text-[#02164F]">
          {match}
        </div>
      </div>
      <div className="flex flex-col gap-y-0.5">
        <div className="font-bold text-[#02164F]">{company}</div>
        <div className="text-[#02164F] font-medium">{prof}</div>
      </div>
      <div className="font-bold text-[#02164F]">{percent}</div>
    </div>
  );
};

export default JobCard;
