import React from "react";

const Skill = ({ title, src }) => {
  return (
    <div className="skillCard">
      <div className="text-sm font-normal text-[#02164F] fontMontreal">
        {title}
      </div>
      <img
        className={`${
          src ? "" : "hidden"
        } h-4 w-4 rounded-lg object-cover object-center`}
        src={src ? src : ""}
        alt="icon"
      />
    </div>
  );
};

export default Skill;
