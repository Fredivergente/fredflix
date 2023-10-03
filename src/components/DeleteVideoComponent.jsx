import React from 'react';
import styled from 'styled-components';

const DeleteVideoContainer = styled.div`
  margin-top: 20px;
`;

const VideoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const VideoItem = styled.li`
  margin-bottom: 10px;
`;

const DeleteVideoComponent = ({ videos, onDelete }) => {
  return (
    <DeleteVideoContainer>
      <h2>Eliminar Video</h2>
      <VideoList>
        {videos.map((video) => (
          <VideoItem key={video.id}>
            <input type="checkbox" id={video.id} />
            <label htmlFor={video.id}>{video.title}</label>
            <button onClick={() => onDelete(video.id)}>Eliminar</button>
          </VideoItem>
        ))}
      </VideoList>
    </DeleteVideoContainer>
  );
};

export default DeleteVideoComponent;
