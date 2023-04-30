"use client";

import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { sidebarAccordionProp } from "./types";

const SideBarAccordion: React.FC<sidebarAccordionProp> = ({
  label,
  children,
  open,
}) => {
  const [collapse, setCollapse] = useState<boolean>(open);
  const toggleCollapse = () => setCollapse((prev) => !prev);
  return (
    <div className="rounded-xl shadow-xl text-base mb-5 bg-white border border-light-grey">
      <div
        onClick={toggleCollapse}
        className="flex justify-between items-center cursor-pointer py-3.5 px-4 border-b border-black/10"
      >
        <p className="font-semibold">{label}</p>
        {collapse && <AiFillCaretDown />}
        {!collapse && <AiFillCaretRight />}
      </div>
      <div
        className={`${
          collapse ? "h-fit py-3.5" : "h-0 overflow-hidden py-0"
        }  px-4 duration-200 `}
      >
        {children}
      </div>
    </div>
  );
};

export default SideBarAccordion;
