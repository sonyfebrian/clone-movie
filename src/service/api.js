import axios from "axios";
import localforage from "localforage";
import { matchSorter } from "match-sorter";

export const getMoviesNow = async (query) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=0c6b702dd4abb7572f9269e48baee0f9"
    );

    const data = response.data.results;
    await localforage.setItem("now_playing", data);
    let movie = data;
    if (query) {
      movie = matchSorter(movie, query, { keys: ["title"] });
    }

    return movie.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getPopularMovie = async (query) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=0c6b702dd4abb7572f9269e48baee0f9"
    );
    const data = response.data.results;
    await localforage.setItem("popular", data);
    let movie = data;
    if (query) {
      movie = matchSorter(movie, query, { keys: ["title"] });
    }

    return movie.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getTopRatedMovie = async (query) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=0c6b702dd4abb7572f9269e48baee0f9"
    );
    const data = response.data.results;
    await localforage.setItem("top_rated", data);
    let movie = data;
    if (query) {
      movie = matchSorter(movie, query, { keys: ["title"] });
    }

    return movie.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getUpcomingMovie = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=0c6b702dd4abb7572f9269e48baee0f9"
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
