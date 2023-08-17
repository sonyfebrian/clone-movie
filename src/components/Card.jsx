// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "./Modal";
const Card = ({ id, poster_path, original_title, vote_average, overview }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="h-60 w-40 flex flex-col bg-gray-200 items-center justify-center mb-3 text-gray-400 cursor-pointer rounded-xl relative overflow-hidden"
        onClick={handleCardClick}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />

        <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 p-3 flex flex-col justify-between mr-3">
          <span
            className="p-2.5 bg-gray-800/80 bg-gradient-to-t from-black/50 rounded-lg text-amber-500 self-end hover:bg-red-600/80"
            onClick={handleCardClick}
          >
            {vote_average}
          </span>
          <div className="self-center flex flex-col items-center space-y-2">
            <button
              className="bg-transparent  text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleCardClick}
            >
              {original_title}
            </button>
          </div>
        </div>
      </div>

      <Modal
        id={id}
        original_title={original_title}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        overview={overview}
      />
    </>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};
export default Card;
