import { instance } from "@/apiInstance";
import axios from "axios";

export const getSingleMovie = async (id: number) => {
  try {
    const response = await axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${id}?api_key=db1c6812d2a608d24bafbc337b36b53c&language=en-US`,
    });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

// export const getNowPlayingMovies = async () => {
//   async () => {
//     try {
//       const response = await axios({
//         method: "get",
//         url: "now_playing?api_key=db1c6812d2a608d24bafbc337b36b53c",
//       });
//       console.log(response);
//       return response;
//     } catch (error) {
//       return error;
//     }
//   };
// };

// export const getTopMovies = async () => {
//   try {
//     const response = await axios({
//       method: "get",
//       url: "top_rated?api_key=db1c6812d2a608d24bafbc337b36b53c&language=en-US&page=1",
//     });
//     return response?.data?.results;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getTvSeries = async () => {
//   try {
//     const response = await axios({
//       method: "get",
//       url: "https://api.themoviedb.org/3/tv/popular?api_key=db1c6812d2a608d24bafbc337b36b53c&language=en-US&page=1",
//     });
//     return response?.data?.results;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const searchMovie = async () => {
  async (search: string) => {
    try {
      const response = await axios({
        method: "get",
        url: `
      https://api.themoviedb.org/3/search/movie?api_key=db1c6812d2a608d24bafbc337b36b53c&language=en-US&query=${search}&page=1&include_adult=false`,
      });
      return response?.data?.results;
    } catch (error) {
      console.log(error);
    }
  };
};
