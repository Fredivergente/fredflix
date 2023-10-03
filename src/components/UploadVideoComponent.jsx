// UploadVideoComponent.js
import React, { useState } from 'react';

const UploadVideoComponent = ({ onVideoUpload }) => {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleTitleChange = (event) => {
    setVideoTitle(event.target.value);
  };

  const handleUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleUpload = () => {
    // Llama a la función proporcionada por el padre
    onVideoUpload(videoTitle, videoUrl);
    setVideoTitle('');
    setVideoUrl('');
  };

  return (
    <div>
      <h3>Subir Nuevo Video</h3>
      <label>Título del Video:</label>
      <input type="text" value={videoTitle} onChange={handleTitleChange} />

      <label>URL del Video:</label>
      <input type="text" value={videoUrl} onChange={handleUrlChange} />

      {/* Llama a handleUpload al hacer clic en el botón */}
      <button onClick={handleUpload}>Subir Video</button>
    </div>
  );
};

export default UploadVideoComponent;
