import React from 'react';
import ReactPlayer from 'react-player';
import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Avatar,
  Text,
  Button,
} from '@chakra-ui/react';
import './Home.css';
import TestimonialGrid from './TestimonialCard';
import AnotherTestimonialGrid from './TestimonialCard2';
import home2 from '../../Assests/images/homepageimg.png';
import bgImageTop from '../../Assests/background.png';
import bgImageTop1 from '../../Assests/images/bg.png';
import bgImageTop2 from '../../Assests/images/bgTop2.png';
import video1Cover from '../../Assests/images/p1.png';
import video2Cover from '../../Assests/images/p2.png';
import video3Cover from '../../Assests/images/p3.png';
import video4Cover from '../../Assests/images/p4.png';
import secTimer from '../../Assests/icon/15sec.svg';
import magicWand from '../../Assests/icon/magicpen.svg';
import textIcon from '../../Assests/icon/text.svg';
import scriptIcon from '../../Assests/icon/script.svg';
import HomeHeader from './HomeHeader/HomeHeader';
import v1 from '../../Assests/v1.mp4';
import SponsorCard from '../CommonComponents/SponsorCard';
const Home = () => {
  const videoUrls = [
    {
      url: v1,
      poster: video1Cover,
    },
    {
      url: 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      poster: video2Cover,
    },
    {
      url: 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      poster: video3Cover,
    },
    {
      url: 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      poster: video4Cover,
    },
  ];

  // Dummy accordionData
  const accordionData = [
    {
      avatar: secTimer,
      title: 'Create Short Branded Video Snippets From Long Form Videos.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      avatar: scriptIcon,
      title: 'Turn Scripts Into Jaw-Dropping Sales Videos.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      avatar: magicWand,
      title: 'Transform Blog Posts Into Engaging Videos On Auto-Pilot.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      avatar: textIcon,
      title: 'Add Captions Automatically.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <>
      <Stack bgImage={bgImageTop} bgSize={'cover'} h={['350px', '713px']}>
        <HomeHeader />

        <Stack
          mt={[10, 20]}
          direction="column"
          align="center"
          justify="flex-end"
          position="relative"
        >
          <Heading
            color={'white'}
            fontWeight={'semibold'}
            fontSize={['2xl', '6xl']}
            fontFamily={'Poppins, sans-serif'}
          >
            Video Creation Made Easy
          </Heading>
          <Text
            fontFamily={'Poppins, sans-serif'}
            color={'white'}
            font
            size={['14px', '16px']}
            w={['80%', '60%']}
            textAlign={'center'}
          >
            Automatically create short, highly-sharable branded videos from your
            long form content. Quick, easy & cost-effective. No technical skills
            or software download required.
          </Text>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'md'}
            fontWeight={600}
            color={'white'}
            bg={'transparent'}
            href={'#'}
            _hover={{
              border: '1px solid black',
              bg: 'white',
              color: 'black',
            }}
            border={'1.5px solid white'}
            borderRadius={'full'}
            padding={{ base: '2', md: '4' }}
            minW={{ base: '80px', md: '120px' }}
            mt={10}
            zIndex={2}
          >
            Upload Video
          </Button>
          <Box
            position="absolute"
            bottom={0}
            top="-68%"
            w={'100%'}
            h={'100%'}
            className="hideOnMobile"
          >
            <Image src={bgImageTop1} marginInline={'auto'} />
          </Box>
        </Stack>
      </Stack>

      <Container minH={'100vh'} maxW="90%" paddingY={'8'} bg={'white'}>
        <Stack>
          <Heading textAlign={['center', 'left']}>
            Here's What People Are Saying About
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mt={8}>
            {videoUrls.map((video, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                width="320px"
                height="450px"
              >
                <ReactPlayer
                  url={video.url}
                  width="320px"
                  height="450px"
                  controls
                  light={video.poster}
                  playIcon={<CustomPlayIcon />}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
        <Heading textAlign={['center', 'left']} mt={10}>
          Your Complete Video Marketing Toolkit
        </Heading>
        <Stack
          direction={['column', 'row']}
          mt={8}
          justifyContent={['center', 'space-between']}
          alignItems={'flex-start'}
        >
          <Stack w={['100%', '50%']} padding={4}>
            <Accordion allowToggle>
              {accordionData.map((item, index) => (
                <AccordionItem key={index} bg={'#D9D9D9'} my={4} p={4}>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className="job-header"
                      >
                        <Avatar
                          className="avatar"
                          src={item.avatar}
                          boxSize={10}
                        />
                        <div className="job-details">
                          <h3 className="job-title">{item.title}</h3>
                        </div>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{item.content}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Stack>
          <Stack
            w={['100%', '50%']}
            p={4}
            className="mobile-view"
            alignSelf={'self-end'}
          >
            <Image src={home2} h={('auto', '600px')} />
          </Stack>
        </Stack>
        <Stack
          justifyContent={['center', 'space-between']}
          w={'100%'}
          my={[4, 8]}
        >
          <Heading textAlign={['center', 'left']} mt={4}>
            Here's What People Are Saying About
          </Heading>
          <TestimonialGrid />
        </Stack>
        <Stack
          justifyContent={['center', 'space-between']}
          w={'100%'}
          my={[4, 20]}
        >
          <Heading textAlign={['center', 'left']} mt={4}>
            The World's Best-Loved Online Video Creator
          </Heading>
          <AnotherTestimonialGrid />
        </Stack>
      </Container>
      <SponsorCard />
    </>
  );
};

export const CustomPlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="70"
    height="70"
    fill="#fff"
  >
    <circle cx="50" cy="50" r="45" fill="#898989" />
    <polygon points="35,25 65,50 35,75" fill="#D9D9D9" />
  </svg>
);
export default Home;
