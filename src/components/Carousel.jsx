import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { getUpcomingMovie } from "../service/api";

const Carousell = () => {
  const [Movies, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const fetchedMovieList = await getUpcomingMovie();
        setMovie(fetchedMovieList);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }

    fetchMovie();
  }, []);

  return (
    <>
      <section>
        <Swiper
          slidesperview={1.2}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {Movies.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="flex flex-col container px-5 py-24 mx-auto justify-between mt-4 bg-black/10 bg-blend-multiply rounded-3xl h-80 overflow-hidden bg-cover bg-center  pt-4 pb-6 text-white"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})`,
                }}
              >
                <div className="flex -space-x-1 items-center ">
                  <div className="w-5 h-5 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-2 h-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>

                  <div className="w-5 h-5 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-2 h-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="w-5 h-5 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-2 h-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <span className="pl-4 text-xs drop-shadow-lg">
                    +{item.popularity} friends are watching
                  </span>
                </div>

                <div className="bg-gradient-to-r from-black/30 to-transparent -mx-7 -mb-6 px-7 pb-6 pt-2">
                  <span className="uppercase text-3xl font-semibold drop-shadow-lg">
                    {item.title}
                  </span>
                  <div className="text-xs text-gray-200 mt-2">
                    <p>{item.overview}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      ;
    </>
  );
};
export default Carousell;
