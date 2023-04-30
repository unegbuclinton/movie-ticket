import Carousel from "@/componnets/molecules/Carousel";
import Navbar from "@/componnets/molecules/Navbar";
import Sidebar from "@/componnets/molecules/Sidebar";
import TvCarousel from "@/componnets/molecules/TvCarousel";
import { RootState } from "@/store";
import ClientOnly from "@/utils/helperFunctions";
import { useAppSelector } from "@/utils/hooks";
import { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const MoviesPage = () => {
  const { nowPlaying, topRated, tvSeries, rating } = useAppSelector(
    (state: RootState) => state.movie
  );

  return (
    <ClientOnly>
      <main className="h-screen overflow-hidden">
        <Navbar />
        <div className="h-[89vh] flex justify-evenly gap-5">
          <div className="hidden md:block w-[25%] px-3 ">
            <Sidebar />
          </div>
          {nowPlaying.length > 1 && (
            <div className="w-[97%] md:w-[75%] overflow-auto">
              <div className="bg-dark h-[300px] w-full rounded-xl"></div>
              <Carousel carouselData={nowPlaying} header="For You" />
              <Carousel carouselData={topRated} header="Popular Movies" />
              <TvCarousel carouselData={tvSeries} header="Popular Tv series" />
              <Carousel carouselData={rating} header="Rated Movies" />
            </div>
          )}
          {nowPlaying.length < 1 ||
            (undefined && (
              <div className="w-[97%] h-screen flex items-center justify-center md:w-[75%]">
                <RingLoader />
              </div>
            ))}
        </div>
      </main>
    </ClientOnly>
  );
};

export default MoviesPage;
