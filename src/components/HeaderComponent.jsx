import React, { useState} from 'react';
import styled from 'styled-components';
import UploadVideoComponent from './UploadVideoComponent';
import DeleteVideoComponent from './DeleteVideoComponent';


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  color: #ffffff;
  padding: 10px 20px;
`;

const Title = styled.h1`
  margin: 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #555;
  }
`;

const HeaderComponent = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [showDeleteVideosList, setShowDeleteVideosList] = useState(false);
  const [showEditDelete, setShowEditDelete] = useState(false);
  const [videos, setVideos] = useState([]);  // Ejemplo de definición usando useState
  




  const handleVideoUpload = (videoTitle, videoUrl) => {
    // Crear un objeto de video a partir del título y la URL
    const newVideo = {
      title: videoTitle,
      url: videoUrl
    };
  
    // Agregar el nuevo video a la lista de videos existente
    const updatedVideos = [...videos, newVideo];
  
    // Actualizar el estado con la nueva lista de videos
    setVideos(updatedVideos);
  
    console.log('Video subido:', newVideo);
  };
  

  const handleDeleteVideo = (videoId) => {
    // Implementa la lógica para eliminar el video con el ID videoId
    console.log('Eliminar video con ID:', videoId);
  };




  const handleUploadButtonClick = () => {
    setShowUpload(true);
    setShowEditDelete(false);
  };



  const toggleDeleteVideosList = () => {
    setShowDeleteVideosList((prevState) => !prevState);
  };
  

  return (
    <HeaderContainer>
      <Title>You-Flix</Title>
      <div className='ver'>{"Version 1.0 - Pronto nuevas mejoras"}</div>
      <ButtonsContainer>
        <Button onClick={handleUploadButtonClick}>Subir Nuevo Video</Button>
        <Button onClick={toggleDeleteVideosList}>Eliminar Video</Button>
        {showUpload && <UploadVideoComponent onVideoUpload={handleVideoUpload} />}
        {showDeleteVideosList && (
  <DeleteVideoComponent
    videos={videos}
    onDelete={handleDeleteVideo}
    onClose={toggleDeleteVideosList} // Agrega esta prop para cerrar la lista
  />
)}

      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default HeaderComponent;
