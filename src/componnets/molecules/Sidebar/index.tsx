import React, { useEffect, useState } from "react";
import Filter from "./sidebar-components/Filter";
import Sort from "./sidebar-components/Sort";
import SearchBar from "@/componnets/atom/SearchBar";
import RangeSlider from "@/componnets/atom/RangeSlider";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { filterMovie, playingMovie } from "@/utils/redux/MovieSlice";
import { debounce } from "lodash";
import { RootState } from "@/store";
import ClientOnly from "@/utils/helperFunctions";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { filterType } = useAppSelector((state: RootState) => state.filter);
  const [value, setValue] = useState<number>(0);
  const handleChange = (e: any) => {
    setValue(e.target.value);
    getSearchDebounce(value);
  };
  const getSearchDebounce = debounce((input: any) => {
    if (input) {
      dispatch(filterMovie(input));
    } else {
      dispatch(playingMovie());
    }
  }, 700);
  return (
    <ClientOnly>
      <div className="pb-15 h-screen overflow-auto">
        <SearchBar />
        <Sort />
        <Filter />
        {filterType === "vote-count" && (
          <RangeSlider
            valueUpdate={value}
            label="Filter by rating"
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

export default Sidebar;
