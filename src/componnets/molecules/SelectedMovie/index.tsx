import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { SelectedMovieProp } from "./types";
import { useAppSelector } from "@/utils/hooks";
import { RootState } from "@/store";
import ClientOnly from "@/utils/helperFunctions";
import Carousel from "../Carousel";
import { useRouter } from "next/navigation";

const SelectedMovie: React.FC<SelectedMovieProp> = ({ children }) => {
  const { singleMovie } = useAppSelector(
    (state: RootState) => state.singlemovie
  );
  const { similar } = useAppSelector((state: RootState) => state.movie);
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const router = useRouter();
  return (
    <ClientOnly>
      <div className=" text-white">
        <div
          style={{
            backgroundImage: `url(${API_IMG}${singleMovie?.backdrop_path})`,
          }}
          className="flex flex-col lg:flex-row relative py-16 px-5 lg:px-20 gap-10 single-movie w-full bg-cover bg-no-repeat bg-top z-[5] before:z-[-1] lg:h-screen overflow-auto"
        >
          <div
            onClick={() => router.push("/")}
            className="absolute p-2 top-4 left-6 bg-white rounded-lg lg:hidden"
          >
            <IoIosArrowBack color="#000" size={22} />
          </div>
          {/* img */}
          <div className="w-full lg:w-[45%]">
            <img
              src={`${API_IMG}${singleMovie?.backdrop_path}`}
              alt=""
              width={250}
              height={250}
              className="rounded-2xl mb-5"
            />
            <Carousel
              carouselData={similar}
              header="Similar Movies"
              className="h-300px"
            />
          </div>
          {/* Right-side of the page */}
          {children}
        </div>
      </div>
    </ClientOnly>
  );
};

export default SelectedMovie;
