import React from 'react';
import {
  Flex,
  Heading,
  VStack,
  Stack,
  Box,
  Grid,
  Text,
  Container,
  Button,
  HStack,
  Divider,
  Image,
} from '@chakra-ui/react';
import PricingBox from './PricingBox';
import { prices } from './data.js';
import Faq from './Faq';
import blob from '../../Assests/images/Vector.png';
import videoIcon from '../../Assests/images/video.png';
import speakerIcon from '../../Assests/images/speaker.png';
import './Pricing.css';
import partnership1 from '../../Assests/images/image 28.png';
import partnership2 from '../../Assests/images/image 29.png';
import partnership3 from '../../Assests/images/image 30.png';
import partnership4 from '../../Assests/images/image 31.png';
import partnership5 from '../../Assests/images/image 32.png';

const PricingAndFaq = () => {
  return (
    <>
      <Box
        position="absolute"
        overflow="hidden"
        bg={'transparent'}
        opacity={'95%'}
      >
        <Image src={blob} width="100%" height="100%" objectFit="cover" />
      </Box>
      <Container minH={'100vh'} maxW="90%" paddingY={'8'} bg={'white'}>
        {/* <Image src={blob} position={'absolute'} top={0} left={0} zIndex={0} /> */}

        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          justifyContent={'space-around'}
          position={'relative'}
          textAlign={'center'}
          spacing={[0, 0]}
        >
          <Heading fontSize={'5xl'} w={['auto', '30%']}>
            PRICING
          </Heading>
          <Stack>
            <Text fontSize={'xl'} pt={2} color={'#898989'}>
              Our free trial plan allows you to create 3 video projects, each of
              up to 10 mins long!
            </Text>
            <HStack mt={2}>
              <Button
                variant={'solid'}
                bg={'#FF5757'}
                color={'white'}
                borderRadius={'full'}
                size={'lg'}
                _hover={{
                  bg: '#E04141',
                }}
              >
                Start Your Free Trial
              </Button>
              <Text fontSize={'14px'} color={'#5F5F5F'}>
                No Credit Card Required
              </Text>
            </HStack>
          </Stack>
        </Stack>

        <Stack paddingY={10} mt={8} position="relative" p={8} bg={'white'}>
          <div
            style={{
              borderRadius: '20px',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              boxShadow:
                '0 0 10px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1)',
              pointerEvents: 'none',
            }}
          />

          <PricingBox />
        </Stack>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={['center', 'space-around']}
          mb={[4, 12]}
        >
          <Image src={videoIcon} className="hideOnMobile" />
          <VStack mt={[10, 12]} spacing={4} textAlign={'center'}>
            <Text color={'#5F5F5F'} fontSize={'16px'}>
              All plans include
            </Text>
            <Text color={'#5F5F5F'} fontSize={'16px'}>
              All AI-enabled features
            </Text>
            <Text color={'#5F5F5F'} fontSize={'16px'}>
              Text To Video Creation
            </Text>
            <Text color={'#5F5F5F'} fontSize={'16px'}>
              Automatic captioning & subtitles
            </Text>
            <Text color={'#5F5F5F'} fontSize={'16px'}>
              16:9, 1:1 or 9:16 aspect ratios on text-to-video
            </Text>
            <Text color={'#5F5F5F'} fontSize={'16px'}>
              Full access to 3+ million licensed stock videos, and images
            </Text>
            <Text color={'#5F5F5F'} fontSize={'16px'}>
              Start with free trial, upgrade or swap anytime
            </Text>
          </VStack>{' '}
          <Image src={speakerIcon} className="hideOnMobile" />
        </Stack>
        <Divider my={4} />
        <Stack mt={[4, 8]}>
          <Faq />
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

export default PricingAndFaq;
