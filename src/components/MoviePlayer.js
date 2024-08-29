import React from 'react'
import Youtube from "react-youtube";
import { useLocation } from 'react-router-dom';

function MoviePlayer() {

  const location = useLocation()
  const passedState = location.state?.passedState || "No state passed";

  console.log("passedState:",passedState);
  

  const opts = {
    height: "650",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
   
  return (
    <div className='mt-10'>
 {passedState && <Youtube videoId={passedState.key} opts={opts} />}
      
      
    </div>
  )
}

export default MoviePlayer
