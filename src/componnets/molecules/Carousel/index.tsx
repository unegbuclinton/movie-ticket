import React, { useState, useRef, useEffect } from "react";
import { carouselProp } from "./types";
// import CarouselImageCard from "../CarouselImageCard";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { getMovieById } from "@/utils/redux/SingleMovie";
import { useAppDispatch } from "@/utils/hooks";
import { useRouter } from "next/navigation";
import ClientOnly from "@/utils/helperFunctions";
import { similarMovies } from "@/utils/redux/MovieSlice";

const Carousel: React.FC<carouselProp> = ({
  header,
  carouselData,
  height,
  className,
  containerHeight,
}) => {
  const scrollRef = useRef<null | HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <ClientOnly>
      <div>
        <header className="mb-2 font-bold pl-5">{header}</header>
        <div className="relative flex max-w[100%] group mb-4">
          <div
            ref={scrollRef}
            className={`${
              containerHeight ? containerHeight : "h-[16rem] lg:h-[19.8rem]"
            } flex w-full  overflow-x-scroll gap-4 px-5`}
          >
            {carouselData?.map(
              (
                { backdrop_path, original_title, release_date, name, id },
                idx
              ) => (
                <div
                  onClick={() => {
                    dispatch(similarMovies(id));
                    dispatch(getMovieById(id)).then(() =>
                      router.push("/movieoverview")
                    );
                  }}
                  key={idx}
                >
                  <div
                    className={`${
                      height ? height : "h-[12rem] lg:h-[15.8rem]"
                    } w-[7rem] lg:w-[16.3rem]  flex flex-col my-0 mr-[1.6rem] cursor-pointer`}
                  >
                    <img
                      src={`${API_IMG}${backdrop_path}`}
                      alt=""
                      className="object-cover rounded-xl w-full h-full"
                    />
                  </div>
                  <h1 className="py-2 text-sm">{original_title || name}</h1>
                </div>
              )
            )}
          </div>
          <div
            onClick={handleScrollLeft}
            className="hidden group-hover:block absolute top-[32%] -translate-y-[-25] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          >
            <AiFillCaretLeft size={30} />
          </div>
          <div
            onClick={handleScrollRight}
            className="hidden group-hover:block absolute top-[25%] -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer"
          >
            <AiFillCaretRight size={30} />
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default Carousel;
{
}
