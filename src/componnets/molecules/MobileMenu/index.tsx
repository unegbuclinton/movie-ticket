import ClientOnly from "@/utils/helperFunctions";
import React, { useState } from "react";
import Sort from "../Sidebar/sidebar-components/Sort";
import Filter from "../Sidebar/sidebar-components/Filter";
import RangeSlider from "@/componnets/atom/RangeSlider";
import { useAppSelector } from "@/utils/hooks";
import { RootState } from "@/store";

interface mobileMenuProp {
  open: boolean;
}
const MobileMenu: React.FC<mobileMenuProp> = ({ open }) => {
  const { filterType } = useAppSelector((state: RootState) => state.filter);
  const [value, setValue] = useState<number>(0);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const showMenuBar = "-translate-x-[0%] duration-200";
  const closeMenuBar = "-translate-x-[200%] duration-200";

  return (
    <ClientOnly>
      <div
        className={`  ${
          open ? showMenuBar : closeMenuBar
        } absolute top-0 left-0 bg-black w-full z-10 pt-20 px-10 h-screen overflow-auto`}
      >
        <Sort />
        <Filter />
        {filterType === "vote-count" && (
          <RangeSlider
            valueUpdate={value}
            label="Filter by rating"
            laeblClassName="text-white"
            min={3}
            value={value}
            max={10}
            onChange={handleChange}
          />
        )}
      </div>
    </ClientOnly>
  );
};

export default MobileMenu;
