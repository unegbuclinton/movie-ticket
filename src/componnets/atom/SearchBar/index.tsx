import React from "react";
import { searchbarProp } from "./type";
import { debounce } from "lodash";
import { AiOutlineSearch } from "react-icons/ai";
import { useAppDispatch } from "@/utils/hooks";
import { playingMovie, searchMovie } from "@/utils/redux/MovieSlice";

const SearchBar: React.FC<searchbarProp> = () => {
  const dispatch = useAppDispatch();
  const getSearchDebounce = debounce((input: string) => {
    if (input) {
      dispatch(searchMovie(input));
    } else {
      dispatch(playingMovie());
    }
  }, 700);
  return (
    <form action="" className="relative w-max mb-3">
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => getSearchDebounce(e.target.value)}
        className="peer cursor-pointer relative z-10 h-10 w-28 rounded-3xl border bg-transparent duration-300 pl-12 outline-none focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4"
      />
      <AiOutlineSearch
        color="#fff"
        className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-white peer-focus:stroke-white"
      />
    </form>
  );
};

export default SearchBar;
