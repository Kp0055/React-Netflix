import { useEffect, useState } from 'react';
import { imageUrl } from '../constants/constants';
import {action} from '../urls'
import axios from '../axios';
import useVideoHandler from '../hooks/useVideoHandler';

const Banner = () => {
  const [movie, setMovie] = useState(); 

  useEffect(() => {
    axios.get(action)
      .then((response) => {
        const movies = response.data.results;

        // Function to pick a random movie
        const pickRandomMovie = () => {
          const randomIndex = Math.floor(Math.random() * movies.length);
          return movies[randomIndex];
        };

        const selectedMovie = pickRandomMovie(); 
        setMovie(selectedMovie); // Set the selected movie to state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleVideo = useVideoHandler();

  const onVideoClick = (id)=>{
    handleVideo(id)
  }



    return (
      <header className="relative h-[650px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path:""})`}}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          
        </div>
  
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-36 py-40 p.x-8 text-white">
          <h1 className="text-5xl font-extrabold mb-4">{movie ? movie.original_title : ""}</h1>
          <p className="text-xl max-w-2xl mb-6">
           {movie ? movie.overview : ""}
          </p>
          <div className="space-x-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"onClick={()=>onVideoClick(movie.id)}>
              Play
            </button>
            <button className="bg-gray-700 bg-opacity-70 hover:bg-opacity-50 text-white font-bold py-2 px-6 rounded">
              More Info
            </button>
          </div>
        </div>
  
        {/* Fade at Bottom */}
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
      </header>
    );
  };
export default Banner 