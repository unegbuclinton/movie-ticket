import { playingMovie, topMovie, tvMovies } from "@/utils/redux/MovieSlice";
import MoviesPage from "./moviepage";
import { useAppDispatch } from "@/utils/hooks";
import { useEffect, useState } from "react";

export default function Home() {
  const [delay, setDelay] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(playingMovie());
    dispatch(tvMovies());
    dispatch(topMovie());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setDelay(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return <>{delay && <MoviesPage />}</>;
}
