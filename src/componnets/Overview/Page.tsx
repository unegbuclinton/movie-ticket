import React from "react";
import Button from "@/componnets/atom/Button";
import MovieIcons from "@/componnets/molecules/MovieIcons";
import OverviewText from "../molecules/OverviewText";
import { useRouter } from "next/navigation";
import { RootState } from "@/store";
import { useAppSelector } from "@/utils/hooks";
const Overview = () => {
  const { singleMovie } = useAppSelector(
    (state: RootState) => state.singlemovie
  );
  const router = useRouter();
  return (
    <div className="lg:pt-10">
      <h1 className="text-2xl font-bold lg:text-3xl">
        {singleMovie?.original_title || singleMovie?.name}
      </h1>
      <div className="flex flex-wrap mt-2 items-center gap-2 text-xs lg:text-xl">
        <p>
          <b>Release Date:</b> {singleMovie?.release_date}(NG)
        </p>
        <span className="w-[5px] h-[5px] rounded-full bg-white"></span>
        <p>
          {singleMovie?.genres?.map(
            (g: { id: number; name: string }, idx: number) => (
              <span key={idx}>
                {g.name}
                {idx < singleMovie?.genres?.length - 1 && ", "}
              </span>
            )
          )}
        </p>
        <span className="w-[5px] h-[5px] rounded-full bg-white"></span>
        <p>2h 10m</p>
      </div>
      <MovieIcons />
      <OverviewText text={singleMovie?.overview} />
      <div className="flex gap-3 mt-10">
        <Button
          type="button"
          text="Back"
          onClick={() => router.push("/moviepage")}
        />
        <Button
          type="button"
          text="Book Ticket"
          onClick={() => router.push("/movieticket")}
        />
      </div>
    </div>
  );
};

export default Overview;
