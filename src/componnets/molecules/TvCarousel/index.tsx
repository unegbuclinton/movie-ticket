import ClientOnly from "@/utils/helperFunctions";
import { useAppDispatch } from "@/utils/hooks";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { getTvSeriesById } from "@/utils/redux/SingleMovie";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export interface carouselProp {
  header: string;
  carouselData: Array<any>;
}

const TvCarousel: React.FC<carouselProp> = ({ header, carouselData }) => {
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
        <header className="mb-2 font-bold">{header}</header>
        <div className="relative flex max-w[100%] group">
          <div
            ref={scrollRef}
            className=" flex w-full h-[22.8rem] overflow-x-scroll gap-4 px-5 "
          >
            {carouselData?.map(
              (
                { backdrop_path, original_title, release_date, name, id },
                idx
              ) => (
                <div
                  onClick={() => {
                    // dispatch(similarMovies(id));
                    dispatch(getTvSeriesById(id)).then(() =>
                      router.push("/movieoverview")
                    );
                  }}
                  key={idx}
                >
                  <div className="w-[16.3rem] h-[15.8rem] flex flex-col my-0 mr-[1.6rem]">
                    <img
                      src={`${API_IMG}${backdrop_path}`}
                      alt=""
                      className="object-cover rounded-xl w-full h-full"
                    />
                  </div>
                  <h1 className="py-4">{original_title || name}</h1>
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

export default TvCarousel;
