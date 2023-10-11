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
  HStack,
} from '@chakra-ui/react';

import { ReactComponent as MdCheckCircle } from '../../Assests/icon/pinkCheck.svg';
import '../../Utils/fonts.css';
import workingImg from '../../Assests/images/img.png';
import youtubeIcon from '../../Assests/images/youtube.png';
import SponsorCard from '../CommonComponents/SponsorCard';
const WhoUses = () => {
  return (
    <>
      <Container minH={'100vh'} maxW="90%" paddingY={'8'} bg={'white'}>
        <Stack direction={['column', 'row']} alignItems={'center'} mb={4}>
          <Stack w={['100%', '50%']} p={4} alignSelf={'self-end'}>
            <Heading
              fontSize={['4xl', '7xl']}
              p={[0, 20]}
              fontFamily={'Recoleta'}
              fontWeight={'semibold'}
              textAlign={['center', 'left']}
            >
              Grow Your{' '}
              <HStack alignItems={'center'}>
                <chakra.span color="#E53935">Youtube</chakra.span>
                <Image
                  src={youtubeIcon}
                  h={'48px'}
                  w={'48px'}
                  ml={4}
                  mr={'auto'}
                />
              </HStack>
              Channel With Procreators.Io
            </Heading>
          </Stack>

          <Stack w={['100%', '50%']} padding={10} fontSize={'18px'}>
            <List spacing={[6, 8]}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>
                  Best Video Creator
                </chakra.span>
                , make faceless videos from text or edit videos using text in a
                flash
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>Choose Your Voice</chakra.span>
                , upload your voiceover or let our realistic AI voices do the
                talking
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>
                  Huge Media Library
                </chakra.span>
                , 3M+ royalty-free videos, images and music tracks
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#FF5757" />
                Simple, Powerful{' '}
                <chakra.span fontWeight={'bold'}>AI</chakra.span> does the hard
                work for you
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>
                  Increase Your rankings
                </chakra.span>
                , automatically add subtitles to boost your SEO
              </ListItem>
              <ListItem>
                Procreator.io uses AI to help you create videos for your YouTube
                channel quickly, easily and cost effectively.
              </ListItem>
            </List>
          </Stack>
        </Stack>
        <Divider my={2} />
        <Stack
          color={'#5F5F5F'}
          alignItems={'center'}
          justifyContent={'center'}
          textAlign={['center', 'left']}
        >
          <Text fontSize={'lg'} mb={2}>
            Perfect for newbies and established channel owners alike
          </Text>
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
            Start Your Trial
          </Button>
          <Text color={'#5F5F5F'} fontSize={'sm'} mt={2}>
            No Credit Card Required
          </Text>
        </Stack>
        <Divider my={2} />
        <Stack
          justifyContent={['center', 'space-between']}
          w={'100%'}
          my={[4, 20]}
        >
          <Heading textAlign={['center', 'left']} mt={4}>
            Here's What People Are Saying About
          </Heading>
          <AnotherTestimonialGrid />
        </Stack>
        <Stack p={[2, 16]}>
          <Heading mb={[6, 12]}>Why YouTubers Love Procreator.Io</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <List spacing={[6, 12]} gridColumn="span 1">
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>One-Stop-Shop.</chakra.span>
                Whether you're creating a faceless YouTube channel to generate
                revenue, or need to edit videos of you speaking to a camera,
                Pictory has you covered. No other solution makes your life this
                easy.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>
                  Powerful AI Assistant.
                </chakra.span>
                Powerful A.I. steps in just when you need it and does the hard
                work for you. Create your first fully-captioned video in less
                than 10 minutes, no previous video making experience or
                technical knowledge required
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>
                  Massive Media Library.
                </chakra.span>
                No need to spend money on other subscriptions. Automatically
                selects clips from over 3 MILLION videos and images PLUS 15,000
                music tracks from industry leaders StoryBlocks and Melod.ie -
                all royalty free forever meaning you'll never get a copyright
                claim.
              </ListItem>
            </List>
            <List spacing={[6, 12]} gridColumn="span 1">
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>The Right Voice.</chakra.span>,
                Record your own voice in-app or upload a pre-recorded voiceover
                OR select one of our incredibly realistic A.I. voices and let do
                the talking for you.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#FF5757" />
                <chakra.span fontWeight={'bold'}>
                  PC & Mac Compatible.
                </chakra.span>
                runs in the cloud meaning there's no software to download and
                install PLUS your computer won't slow down!
              </ListItem>
            </List>
          </SimpleGrid>
        </Stack>
        <Divider my={4} />
        <Stack justifyContent={'center'} mt={8} p={[2, 16]}>
          <Heading fontSize={['4xl', '6xl']}>
            How <chakra.span color="#FF5757">ProCreator.Io</chakra.span> Works
            <Box w="10%" h="4px" bg="#FF5757" mt={[6, 8]} />{' '}
          </Heading>
          <Stack direction={['column', 'row']} mt={8} alignItems={'center'}>
            <Stack w={['100%', '50%']} spacing={[8, 16]}>
              <Heading>Start from text</Heading>
              <OrderedList spacing={4} fontSize={['md', 'xl']}>
                <ListItem>
                  Paste your scripts straight into Procreator or use our AI to
                  extract key sentences when starting from blog posts.
                </ListItem>
                <ListItem>
                  Procreator creates stunning videos using visuals sourced from
                  over three million royalty-free videos clips and music tracks.
                </ListItem>
                <ListItem>
                  Add AI-powered voiceover or record your own voice.
                </ListItem>
              </OrderedList>
              <Button
                variant={'outline'}
                alignSelf={'flex-start'}
                mt={6}
                border={'1px solid black'}
                borderRadius={'full'}
                size={'lg'}
                marginInline={['auto', 'unset']}
              >
                Learn More
              </Button>
            </Stack>
            <Stack alignItems={'center'}>
              <Image src={workingImg} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <SponsorCard />
    </>
  );
};

export default WhoUses;
