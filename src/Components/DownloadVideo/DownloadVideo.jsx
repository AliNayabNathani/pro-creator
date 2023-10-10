import { Container, Divider, Stack, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import TopBar from './TopBar';
import VideoDownloadCard from './VideoDownloadCard';
import carImage from '../../Assests/images/car.png';

const DownloadVideo = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const dummyData = [
    {
      title: 'Awesome Video #1',
      content:
        "Check out this amazing video! No need to spend money on other subscriptions. Automatically selects clips from over 3 MILLION videos and images PLUS 15,000 music tracks from industry leaders StoryBlocks and Melod.ie - all royalty free forever meaning you'll never get a copyright claim.",
      score: 99,
      image: carImage,
    },
    {
      title: 'Exciting Footage #2',
      content:
        "Discover the thrill! No need to spend money on other subscriptions. Automatically selects clips from over 3 MILLION videos and images PLUS 15,000 music tracks from industry leaders StoryBlocks and Melod.ie - all royalty free forever meaning you'll never get a copyright claim.",
      score: 85,
      image: carImage,
    },
  ];
  return (
    <>
      <Container minH={'100vh'} maxW="90%" paddingY={'8'}>
        {isLargerThan768 && <TopBar />}
        {dummyData.map((data, index) => (
          <React.Fragment key={index}>
            <VideoDownloadCard data={data} />
            {index < dummyData.length - 1 && (
              <Divider my={4} borderWidth={'1px'} />
            )}
          </React.Fragment>
        ))}
      </Container>
    </>
  );
};

export default DownloadVideo;
