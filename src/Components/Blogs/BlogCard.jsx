import { Box, Grid, GridItem, Image, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import blogImg1 from '../../Assests/images/blogimg.png';
import blogImg3 from '../../Assests/images/blogimg3.png';
import blogImg2 from '../../Assests/images/blogimg2.png';

const BlogCard = () => {
  const blogItems = [
    {
      id: 1,
      title: 'Strategic Video Marketing & Repurpose – TIE Video Podcast',
      imageUrl: blogImg1,
    },
    {
      id: 2,
      title:
        'Top Video Production Tips & Tricks – Interview with Llewellyn Dalton',
      imageUrl: blogImg2,
    },
    {
      id: 3,
      title:
        'Developing your Personal Brand through Video – Interview with Zahrina Roberston',
      imageUrl: blogImg3,
    },
    {
      id: 4,
      title: 'Strategic Video Marketing & Repurpose – TIE Video Podcast',
      imageUrl: blogImg1,
    },
    {
      id: 5,
      title:
        'Top Video Production Tips & Tricks – Interview with Llewellyn Dalton',
      imageUrl: blogImg2,
    },
    {
      id: 6,
      title:
        'Developing your Personal Brand through Video – Interview with Zahrina Roberston',
      imageUrl: blogImg3,
    },
    {
      id: 7,
      title: 'Strategic Video Marketing & Repurpose – TIE Video Podcast',
      imageUrl: blogImg1,
    },
    {
      id: 8,
      title:
        'Top Video Production Tips & Tricks – Interview with Llewellyn Dalton',
      imageUrl: blogImg2,
    },
    {
      id: 9,
      title:
        'Developing your Personal Brand through Video – Interview with Zahrina Roberston',
      imageUrl: blogImg3,
    },
  ];

  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
      gap={4}
    >
      {blogItems.map(item => (
        <GridItem key={item.id} colSpan={1}>
          <Box height="100%" overflow="hidden">
            <Image
              src={item.imageUrl}
              alt={`Blog ${item.id}`}
              height="200px"
              width="full"
              objectFit="contain"
            />
            <Link
              as={RouterLink}
              to={`/blog/${item.id}`} // Replace with your actual route path
              mt={2}
              fontSize="lg"
              fontWeight="semibold"
              _hover={{ textDecoration: 'underline' }}
              display="block"
            >
              {item.title}
            </Link>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default BlogCard;
