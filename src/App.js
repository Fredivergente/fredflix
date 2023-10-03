import React, { useState } from 'react';
import HeaderComponent from './components/HeaderComponent';
import BannerComponent from './components/BannerComponent';
import MovieSectionComponent from './components/MovieSectionComponent';
import FooterComponent from './components/FooterComponent';
import UploadVideoComponent from './components/UploadVideoComponent';
import DeleteVideoComponent from './components/DeleteVideoComponent';

const App = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  // const [selectedVideo, setSelectedVideo] = useState(false);


  // Sample video data for demonstration
  const [videos, setVideos] = useState([
    { id: 1, title: 'Video 1' },
    { id: 2, title: 'Video 2' },
    { id: 3, title: 'Video 3' },
  ]);

  const handleUploadButtonClick = () => {
    setShowUpload(true);
    setShowDelete(false);
  };

  const handleDeleteButtonClick = () => {
    setShowUpload(false);
    setShowDelete(true);
  };

  const handleDeleteVideo = (videoId) => {
    const updatedVideos = videos.filter((video) => video.id !== videoId);

    // Actualizar el estado con la nueva lista de videos
    setVideos(updatedVideos);
  };

  return (
    <div>
      <HeaderComponent
        onUploadButtonClick={handleUploadButtonClick}
        onDeleteButtonClick={handleDeleteButtonClick}
      />
      {showUpload && <UploadVideoComponent />}
      {showDelete && <DeleteVideoComponent videos={videos} onDelete={handleDeleteVideo} />}
      <BannerComponent />
      <MovieSectionComponent />
      <FooterComponent />
    </div>
  );
}
  export default App;
