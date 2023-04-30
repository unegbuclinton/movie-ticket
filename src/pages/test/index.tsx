import { RootState } from "@/store";
import ClientOnly from "@/utils/helperFunctions";
import { useAppSelector } from "@/utils/hooks";
import React from "react";

const Test = () => {
  const { nowPlaying, topRated, tvSeries, rating } = useAppSelector(
    (state: RootState) => state.movie
  );
  const fff = "https://image.tmdb.org/t/p/w500/";
  return (
    <ClientOnly>
      <div>
        <p>test</p>
        <div className="flex max-w[100%]">
          <div className=" flex w-full h-[20.8rem] overflow-x-scroll gap-4 px-5">
            {nowPlaying.map((x) => (
              <div>
                <div className="w-[16.3rem] h-[15.8rem] flex flex-col my-0 mr-[1.6rem]">
                  <img
                    src={`${fff}${x.backdrop_path}`}
                    alt=""
                    className="object-cover rounded-xl w-full h-full"
                  />
                </div>
                <h1 className="py-4">{x.original_title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default Test;
