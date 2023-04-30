import Carousel from "@/componnets/molecules/Carousel";
import Navbar from "@/componnets/molecules/Navbar";
import Sidebar from "@/componnets/molecules/Sidebar";
import TvCarousel from "@/componnets/molecules/TvCarousel";
import { RootState } from "@/store";
import { useAppSelector } from "@/utils/hooks";
import { useEffect, useState } from "react";

const MoviesPage = () => {
  const { nowPlaying, topRated, tvSeries, rating } = useAppSelector(
    (state: RootState) => state.movie
  );
  const [delay, setDelay] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => setDelay(true), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />
      <div className="h-[89vh] flex justify-evenly gap-5">
        <div className="hidden md:block w-[25%] px-3 ">
          <Sidebar />
        </div>
        {delay && (
          <div className="w-[97%] md:w-[75%] overflow-auto">
            <Carousel carouselData={nowPlaying} header="For You" />
            <Carousel carouselData={topRated} header="Popular Movies" />
            <TvCarousel carouselData={tvSeries} header="Popular Tv series" />
            <Carousel carouselData={rating} header="Rated Movies" />
          </div>
        )}
      </div>
    </main>
  );
};

export default MoviesPage;
