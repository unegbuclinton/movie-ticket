import React, { useState, useRef, useEffect } from "react";
import { carouselProp } from "./types";
import CarouselImageCard from "../CarouselImageCard";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { getMovieById } from "@/utils/redux/SingleMovie";
import { useAppDispatch } from "@/utils/hooks";
import { useRouter } from "next/navigation";
import ClientOnly from "@/utils/helperFunctions";

const Carousel: React.FC<carouselProp> = ({
  header,
  carouselData,
  className,
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

  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <ClientOnly>
      <div className="max-w-[100%] m-auto px-1 relative group duration-200">
        <h1 className="mb-2 font-bold">{header}</h1>
        <div
          ref={scrollRef}
          className={`${className} flex gap-4 h-[20.8rem] w-full overflow-scroll scrollbar-hide bg-red`}
        >
          {carouselData.map(
            (
              { backdrop_path, original_title, release_date, name, id },
              idx
            ) => (
              <CarouselImageCard
                onClick={() => {
                  dispatch(getMovieById(id)).then(() =>
                    router.push("/movieoverview")
                  );
                }}
                key={idx}
                imgUrl={backdrop_path}
                movieTitle={original_title || name}
                release={release_date}
              />
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
    </ClientOnly>
  );
};

export default Carousel;
