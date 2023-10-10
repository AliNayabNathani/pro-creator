import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ReactPlayer from 'react-player';
import cPoster1 from '../../Assests/images/CarousalPoster1.png';
import cPoster2 from '../../Assests/images/CarousalPoster2.png';
import cPoster3 from '../../Assests/images/CarousalPoster3.png';
import { Stack } from '@chakra-ui/react';
import v1 from '../../Assests/v1.mp4';

const VideoCarousel = () => {
  const videoData = [
    {
      url: v1,
      poster: cPoster2,
      title: 'Chang Joon Jeon, 5 FREE Life Changing Apps',
    },
    {
      url: 'https://www.example.com/video2.mp4',
      poster: cPoster1,
      title: 'Elisabeth de Nijs, NFT Informational Video',
    },
    {
      url: 'https://www.example.com/video3.mp4',
      poster: cPoster3,
      title: 'Barry Chaffee, 10 Gigs For Teachers',
    },
  ];

  const [centerIndex, setCenterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSlideChanged = ({ item }) => {
    setCenterIndex(item);
    setIsPlaying(false); // Reset isPlaying when changing slides
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const carouselSettings = {
    responsive: { 0: { items: 1 }, 1024: { items: 3 } },
    mouseTracking: true,
    controlsStrategy: 'responsive',
    disableButtonsControls: true,
    disableDotsControls: true,
    onSlideChanged: handleSlideChanged,
  };

  return (
    <Stack w={'100%'}>
      <AliceCarousel {...carouselSettings}>
        {videoData.map((video, index) => (
          <div
            key={index}
            style={{
              marginRight: '10px',
              height: '350px',
              position: 'relative',
            }}
          >
            <ReactPlayer
              url={video.url}
              width="100%"
              height="100%"
              controls
              light={video.poster}
              onPlay={handlePlay}
              style={{
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
            {!isPlaying && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                {video.title}
              </div>
            )}
          </div>
        ))}
      </AliceCarousel>
    </Stack>
  );
};

export default VideoCarousel;
