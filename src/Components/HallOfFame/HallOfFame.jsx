import React, { useState } from 'react';
import partnership1 from '../../Assests/images/image 28.png';
import partnership2 from '../../Assests/images/image 29.png';
import partnership3 from '../../Assests/images/image 30.png';
import partnership4 from '../../Assests/images/image 31.png';
import partnership5 from '../../Assests/images/image 32.png';
import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import VideoCarousel from './VideoCarousal';

const HallOfFame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const buttonNames = [
    'Coaches & Teaching',
    'YouTube Creators & Bloggers',
    'Course Creators & Social Media Managers',
    'Another Button',
  ];

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + 3) % 3);
  };
  return (
    <>
      <Container minH={'100vh'} maxW="100%" p={0} pt={4} pb={8} bg={'white'}>
        <Stack w={'full'} bg={'#FF5757'} h={'484px'} top={0}>
          <Stack
            direction={['column', 'row']}
            p={[8, 12]}
            justifyContent={['center', 'space-around']}
            alignItems={['center', 'flex-start']}
          >
            <Heading
              children="Hall of Fame"
              color={'white'}
              fontSize={['2xl', '6xl']}
            />

            <VStack>
              <Text
                children="Our free trial plan allows you to create 3 video projects, each of up to 10 mins long!"
                color={'white'}
              />
              <HStack mt={2}>
                <Button
                  variant={'solid'}
                  bg={'white'}
                  color={'black'}
                  borderRadius={'full'}
                  size={'lg'}
                >
                  Start Your Free Trial
                </Button>
                <Text fontSize={'14px'} color={'white'}>
                  No Credit Card Required
                </Text>
              </HStack>
            </VStack>
          </Stack>
          <Stack>
            <HStack justifyContent="center" mt={4}>
              <AiOutlineArrowLeft
                onClick={handlePrev}
                size={24}
                cursor="pointer"
                color="white"
              />
              {buttonNames.map((buttonName, index) => (
                <Button
                  key={index}
                  variant={'outline'}
                  bg={'transparent'}
                  color={'white'}
                  borderRadius={'full'}
                  border={'1px solid white'}
                  size={'lg'}
                >
                  {buttonName}
                </Button>
              ))}
              <AiOutlineArrowRight
                onClick={handleNext}
                size={24}
                cursor="pointer"
                color="white"
              />
            </HStack>
          </Stack>
          <HStack justifyContent="center" w={'full'} mt={[10, 14]}>
            <VideoCarousel />
          </HStack>
        </Stack>
      </Container>
      <Stack
        justifyContent={['center', 'space-between']}
        w={'100%'}
        // my={[4, 20]}
        p={20}
        bg={'#F7F7F8'}
        h={'100%'}
      >
        <Heading textAlign={['center', 'left']}>In Partnership With</Heading>
        <Stack
          direction={['column', 'row']}
          justifyContent={'space-evenly'}
          mt={[2, 4]}
        >
          <Image src={partnership1} />
          <Image src={partnership2} />
          <Image src={partnership3} />
          <Image src={partnership4} />
          <Image src={partnership5} />
        </Stack>
      </Stack>
    </>
  );
};

export default HallOfFame;
