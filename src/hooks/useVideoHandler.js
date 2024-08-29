import { API_KEY } from "../constants/constants";
import axios from '../axios';
import { useNavigate } from 'react-router-dom';

const useVideoHandler = ()=>{
   const navigate  =  useNavigate()

    const HandleVideo = (id) => {
        axios
          .get(`/movie/${id}/videos?api_key=${API_KEY}`)
          .then((response) => {
            if (response.data.results.length !== 0) {
              const videoData = response.data.results[0];
              navigate("/trailers", { state: { passedState: videoData } });
              console.log("videoData:", videoData);
            } else {
              console.log("No video available");
            }
          })
          .catch((error) => {
            console.error("Error fetching video data", error);
          });
      };
      return HandleVideo;
}

export default useVideoHandler
