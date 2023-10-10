import React from 'react';
import AnotherTestimonialGrid from '../Home/TestimonialCard2';
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  chakra,
  OrderedList,
  VStack,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import '../../Utils/fonts.css';
import partnership1 from '../../Assests/images/image 28.png';
import partnership2 from '../../Assests/images/image 29.png';
import partnership3 from '../../Assests/images/image 30.png';
import partnership4 from '../../Assests/images/image 31.png';
import partnership5 from '../../Assests/images/image 32.png';
import scriptBg from '../../Assests/images/script bg.png';
import centerContent from '../../Assests/images/center content 1.png';
import ReactPlayer from 'react-player';
import whatisprocreator from '../../Assests/images/ProCreator.png';
import { ReactComponent as PinkCheck } from '../../Assests/icon/pinkCheck.svg';
import { ReactComponent as LineCheck } from '../../Assests/icon/LineIcon.svg';
import scriptFeatureVid from '../../Assests/images/scriptFeatureVid.png';
import whyProCreator from '../../Assests/images/whyProCreator.png';
import video1Cover from '../../Assests/images/p1.png';
import video2Cover from '../../Assests/images/p2.png';
import video3Cover from '../../Assests/images/p3.png';
import video4Cover from '../../Assests/images/p4.png';
const ShortVideoFeatures = () => {
  const videoUrls = [
    {
      url: 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
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
  return (
    <>
      <Container
        minH={'100vh'}
        maxW="full"
        padding={0}
        paddingTop={'8'}
        bg={'white'}
        w={'full'}
        overflow={'hidden'}
      >
        <Stack direction={['column', 'row']} alignItems={'center'} mb={4}>
          <Stack
            w={['100%', '60%']}
            p={10}
            direction={'column'}
            ml={[0, '8rem']}
          >
            <Heading
              fontSize={['4xl', '6xl']}
              width={['100%', '70%']}
              fontFamily={'Recoleta'}
              fontWeight={'semibold'}
              textAlign={['center', 'left']}
            >
              Create Shareable Video
              <chakra.span color="#FF5757"> Highlight</chakra.span> Reels
            </Heading>
            <Text
              children="When long needs to be short, Pro Creator got you covered"
              fontFamily={'Poppins, sans-serif'}
              fontSize={'16px'}
            />
            <Image
              cursor={'pointer'}
              src={scriptFeatureVid}
              h={['auto', '100px']}
              w={['auto', '400px']}
            />
          </Stack>

          <Stack
            w={['100%', '50%']}
            padding={10}
            fontSize={'18px'}
            alignItems={'flex-start'}
          >
            <List spacing={[6, 8]}>
              <ListItem>
                <ListIcon as={PinkCheck} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>
                  Share Highlights,{' '}
                </chakra.span>
                creates short highlight videos
              </ListItem>
              <ListItem>
                <ListIcon as={PinkCheck} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>
                  Boost Engagement,{' '}
                </chakra.span>
                short clips engage viewers
              </ListItem>
              <ListItem>
                <ListIcon as={PinkCheck} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>
                  Skyrocket Webinar Attendance,{' '}
                </chakra.span>
                trailer videos increase bookings and show-up rates
              </ListItem>
              <ListItem>
                <ListIcon as={PinkCheck} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>Increase Sales, </chakra.span>
                sneak peeks increase conversions
              </ListItem>
              <ListItem>
                <ListIcon as={PinkCheck} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>
                  Publish To Socials,{' '}
                </chakra.span>
                perfect for all social sites
              </ListItem>
              <ListItem w={'80%'}>
                ProCreator.io advanced AI automatically creates short videos
                from your long videos so you can enjoy maximum return on your
                video creation investment.
              </ListItem>
            </List>
          </Stack>
        </Stack>
        <Divider my={2} />
        <Stack
          p={[4, 16]}
          bgImage={scriptBg}
          bgSize={'cover'}
          w={'full'}
          h={'full'}
        >
          <Heading
            mb={[6, 12]}
            w={['100%', '40%']}
            fontSize={['2xl', '48px']}
            fontFamily={'Poppins, sans-serif'}
            color={'white'}
          >
            ProCreator.io Script To Video Features At A Glance
          </Heading>
          <Stack direction={['column-reverse', 'row']}>
            <VStack w={['100%', '40%']} alignItems={['center', 'flex-start']}>
              <List spacing={[6, 8]} color={'white'}>
                <ListItem>
                  <ListIcon as={LineCheck} />
                  <chakra.span fontWeight={'bold'}>
                    Get Your Message Out
                  </chakra.span>
                  <br />
                  <Text ml={[0, 5]}>
                    automatically creates short highlight videos you can
                    showcase to prospects and clients
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={LineCheck} />
                  <chakra.span fontWeight={'bold'}>
                    Increase Engagement
                  </chakra.span>
                  <br />
                  <Text ml={[0, 5]}>
                    short video clips are proven to drive higher viewer
                    engagement.
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={LineCheck} />
                  <chakra.span fontWeight={'bold'}>
                    Skyrocket Webinar Attendance
                  </chakra.span>
                  <br />
                  <Text ml={[0, 5]}>
                    automatically created short trailer videos shared on sales
                    pages and social media leading to more bookings and higher
                    show-up rates.
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={LineCheck} />
                  <chakra.span fontWeight={'bold'}>Sell More</chakra.span>
                  <br />
                  <Text ml={[0, 5]}>
                    give prospects a peek at what's behind the pay-wall and see
                    your sales explode!
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={LineCheck} />
                  <chakra.span fontWeight={'bold'}>
                    Publish To Socials
                  </chakra.span>
                  <br />
                  <Text ml={[0, 5]}>
                    social media compatible, be seen everywhere. Pictory
                    highlight reels are perfect for all social sites including
                    YouTube, facebook & Instagram
                  </Text>
                </ListItem>
              </List>
            </VStack>
            <VStack w={['100%', '50%']} alignItems={['center', 'flex-end']}>
              <Image
                src={centerContent}
                w={['auto', '650px']}
                h={['auto', '380px']}
              />
            </VStack>
          </Stack>
        </Stack>
        <Stack alignItems={'center'} mt={(4, 8)}>
          <Heading fontSize={['2xl', '4xl']} mb={[8, 10]}>
            Procreator.io Is Easy To Use
          </Heading>
          <Image src={whyProCreator} />
        </Stack>

        <Stack mt={[4, 8]} p={[4, 8]}>
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
        <Divider my={8} borderWidth={'1.5px'} />
        <Stack alignItems={'center'} w={'100%'} mt={[8, 10]}>
          <Heading fontSize={['2xl', '4xl']}>
            Where to use Procreator.io?
          </Heading>
          <Text color={'#898989'} textAlign={'center'}>
            Use Pictory to summarize any kind of videos with spoken content and
            get them ready for sharing on social media.
          </Text>
          <Image src={whatisprocreator} mt={[4, 8]} />
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

const CustomPlayIcon = () => (
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

export default ShortVideoFeatures;
