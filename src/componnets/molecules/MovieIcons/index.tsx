import { movieListIcons } from "@/utils/jsonData/MovielistData";
import React from "react";

const MovieIcons = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-center lg:justify-start gap-5">
        {movieListIcons?.map(({ icon }, idx) => (
          <div
            key={idx}
            className="w-fit h-fit p-4 bg-dark rounded-full cursor-pointer hover:scale-110 duration-200"
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieIcons;
