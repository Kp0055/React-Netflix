import React, { useRef, useState, useEffect } from "react";
import axios from "../axios";
import { action } from "../urls";
import { imageUrl, } from "../constants/constants";
import useVideoHandler from '../hooks/useVideoHandler'

const RowComponent = (props) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(action).then((response) => {
      setMovie(response.data.results);
    });
  }, []);

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleVideo = useVideoHandler()

  const onVideoClick = (id) => {
    handleVideo(id);
  };  


  return (
    <div className="relative">
      <h2 className="text-xl font-semibold mb-4 px-5">{props.title}</h2>
      <button
        onClick={scrollLeft}
        className="absolute rounded-full left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-transparent text-black hover:bg-white transition-colors duration-300"
      >
        &#8592;
      </button>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-scroll scrollbar-hide space-x-4 p-5"
      >
        {movie.map((movie) => (
          <div
            key={movie.id}
            className={`flex-shrink-0 ${
              props.isSmall ? "w-48 h-72" : "w-85 h-60"
            } bg-gray-200 rounded-lg overflow-hidden relative`}
          >
            <img
              src={`${imageUrl + movie.backdrop_path}`}
              alt={movie.original_title}
              onClick={() => onVideoClick(movie.id)}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-sm p-2">
              {movie.original_title}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute rounded-full right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-transparent text-black hover:bg-white transition-colors duration-300"
      >
        &#8594;
      </button>
    </div>
  );
};

export default RowComponent;
