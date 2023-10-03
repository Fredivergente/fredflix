import React, { useState } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const onVideoClick = () => {
    setIsPlaying(true);
  };

  const opts = {
    width: '640',
    height: '360',
    playerVars: {
      autoplay: isPlaying ? 1 : 0,  // Iniciar la reproducción si isPlaying es true
    },
  };

  return (
    <div onClick={onVideoClick}>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoPlayer;
