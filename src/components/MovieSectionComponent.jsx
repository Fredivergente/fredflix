import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import VideoPlayer from './VideoPlayer';

const MovieSectionContainer = styled.section`
  padding: 15px;
`;

const MoviePairContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-flow: wrap;
  place-content: space-around;
`;

const MovieCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  margin: 10px;



  @media (max-width: 767px) {
    width: calc(100% - 20px); /* Mostrar una tarjeta por fila en pantallas pequeñas */
  }
`;

const MovieTitle = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

const MovieSectionComponent = () => {
  const [videos, setVideos] = useState([
    { title: 'Nuevo video Descartes a Kant', url: 'https://www.youtube.com/watch?v=yC0NdHnc2gg' },
    { title: '¿Qué son las softskills?', url: 'https://www.youtube.com/watch?v=vhwspfvI52k' },
    { title: 'Aprende JS desde cero', url: 'https://www.youtube.com/watch?v=RqQ1d1qEWlE' },
    { title: 'Politigato #70', url: 'https://www.youtube.com/watch?v=-LN6nzTWQTo' },
    { title: "La magia detrás de Java #aluramás", url: "https://www.youtube.com/watch?v=GrEO8nZzyZM"},
    { title: "Spring Framework. ¿Qué es ? #AluraMás", url: "https://www.youtube.com/watch?v=t-iqt1b2qqk"},
    { title: "Simplificando tu código en Java: Conoce los enum #AluraMás", url: "https://www.youtube.com/watch?v=EoPvlE85XAQ"},
    { title: "Animando un texto en HTML y CSS #AluraMás", url: "https://www.youtube.com/watch?v=j71g5TiMA-M"},
    { title: "¿Qué es JavaScript?", url: "https://www.youtube.com/watch?v=GJfOSoaXk4s"},
    { title: "Consejos de CSS FlexBox para comenzar #aluramás", url: "https://www.youtube.com/watch?v=EB4vWLzfVcI"},
    { title: "¿Por qué utilizar React?", url: "https://www.youtube.com/watch?v=MnBNPA45NW8"},
    { title: "Box Model y Box sizing #AluraMás", url: "https://www.youtube.com/watch?v=ts9qfCKamKg"}
    // Se agregaron algunos videos de forma manual por errores con la api
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../db.json');
        const data = await response.json();
        setVideos(data.video); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const extractVideoId = (url) => {
    const regex = /[?&]v=([^#&]*)/i;
    const match = url.match(regex);
    return match && match[1] ? match[1] : null;
  };

  const getVisibleItems = (items, numVisible) => {
    if (!Array.isArray(items)) {
      console.error('Error: items is not an array.');
      return [];
    }

  const shuffledItems = items.sort(() => Math.random() - 1.7);
  return shuffledItems.slice(0, numVisible);
  };

  const visibleMovies = getVisibleItems(videos, 3);  
  const visibleVideos = getVisibleItems(videos, 5); 


  return (
    <MovieSectionContainer>
      <h2>Videos recomendados de hoy</h2>
      <MoviePairContainer className='cardV'>
        {visibleVideos.map((video, index) => (
          <MovieCard key={index}>
            <VideoPlayer videoId={extractVideoId(video.url)} />
            <MovieTitle>{video.title}</MovieTitle>
          </MovieCard>
        ))}
      </MoviePairContainer>
  
      <h2>Tendencias</h2>
      <MoviePairContainer className='cardV'>
        {visibleMovies.map((movie, index) => (
          <MovieCard className='cardH' key={index}>
            <VideoPlayer videoId={extractVideoId(movie.url)} />
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieCard>
        ))}
      </MoviePairContainer>
    </MovieSectionContainer>
  )};

export default MovieSectionComponent;