import { playingMovie, topMovie, tvMovies } from "@/utils/redux/MovieSlice";
import MoviesPage from "./moviepage";
import { useAppDispatch } from "@/utils/hooks";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(playingMovie());
    dispatch(tvMovies());
    dispatch(topMovie());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <MoviesPage />
    </>
  );
}
