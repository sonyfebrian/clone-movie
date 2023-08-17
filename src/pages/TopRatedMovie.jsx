import { useState, useEffect } from "react";
import { getTopRatedMovie } from "../service/api";
import Card from "../components/Card";
import PropTypes from "prop-types";

const TopRatedMovie = ({ query }) => {
  const [Movies, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(Movies, "movie Top Rated");

  useEffect(() => {
    async function fetchMovie() {
      try {
        const fetchedMovieList = await getTopRatedMovie(query);
        setMovie(fetchedMovieList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setIsLoading(false);
      }
    }

    fetchMovie();
  }, [query]);
  return (
    <>
      {isLoading ? (
        <div className="bg-gray-200 w-full min-h-screen flex justify-center items-center">
          <div className="flex min-h-screen w-full items-center justify-center bg-gray-200">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
              <div className="h-9 w-9 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>
      ) : Movies.length === 0 ? (
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold">Movie not found</h2>
        </div>
      ) : (
        <>
          <div className="container px-1 py-10 mx-auto" id="top">
            <div className="lg:w-1/2 w-full mx-3 mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Top Rated Movie
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <div className="grid grid-flow-col gap-2 overflow-x-auto mt-3 mx-3 pb-2 scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300 scrollbar-track-gray-200 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-300">
              {Movies?.map(
                (
                  { id, poster_path, original_title, vote_average, overview },
                  i
                ) => (
                  <Card
                    key={i}
                    id={id}
                    poster_path={poster_path}
                    original_title={original_title}
                    vote_average={vote_average}
                    overview={overview}
                  />
                )
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

TopRatedMovie.propTypes = {
  query: PropTypes.string.isRequired,
};
export default TopRatedMovie;
