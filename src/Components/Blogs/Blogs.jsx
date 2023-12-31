import {
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import BlogCard from './BlogCard';
import speakerIcon from '../../Assests/images/speaker.png';
import mediaIcon from '../../Assests/images/video.png';
import './Blogs.css';
import SponsorCard from '../CommonComponents/SponsorCard';

const Blogs = () => {
  const blogCategories = [
    'Video Podcast',
    'Video Marketing',
    'Tips and Trick',
    'Technology',
    'Social Media Startegy',
  ];
  return (
    <>
      <Container minH={'100vh'} maxW="90%" paddingY={'8'} bg={'white'}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={['center', 'space-around']}
          mb={[4, 12]}
        >
          <Image src={mediaIcon} className="hideOnMobile" />
          <VStack>
            <Heading textAlign={['center', 'center']} fontSize={['5xl', '7xl']}>
              Blogs
            </Heading>
            <Text
              fontWeight={'semibold'}
              fontSize={'lg'}
              textAlign={['center', 'center']}
            >
              Video Marketing Masterclasses
            </Text>
          </VStack>{' '}
          <Image src={speakerIcon} className="hideOnMobile" />
        </Stack>
        <Stack mt={[4, 8]} alignItems={'center'}>
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}
            gap={[4, 4]}
          >
            {blogCategories.map((category, index) => (
              <GridItem key={index} colSpan={1}>
                <Button
                  borderRadius={'full'}
                  variant={'outline'}
                  border={'1px solid #898989'}
                  color={'#898989'}
                >
                  {category}
                </Button>
              </GridItem>
            ))}
          </Grid>
        </Stack>
        <Stack mt={[4, 8]}>
          <BlogCard />
        </Stack>
        <Divider my={4} />
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
      </Container>
      <SponsorCard />
    </>
  );
};

export default Blogs;
