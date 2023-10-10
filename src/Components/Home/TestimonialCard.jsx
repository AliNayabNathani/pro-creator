import React from 'react';
import { Box, Image, Text, SimpleGrid } from '@chakra-ui/react';
import homeBlog1 from '../../Assests/images/home-blog1.png';
import homeBlog2 from '../../Assests/images/home-blog2.png';
import homeBlog3 from '../../Assests/images/home-blog3.png';
import homeBlog4 from '../../Assests/images/home-blog4.png';

const TestimonialCard = ({ name, content, image }) => {
  return (
    <Box
      bg="white"
      p={4}
      my={16}
      alignItems={['center', 'flex-start']}
      maxH={'302px'}
      maxW={'540px'}
      justifyItems={'center'}
      textAlign={['center', 'left']}
    >
      <Box w={'full'}>
        <Image src={image} alt={name} w="full" h="auto" objectFit={'contain'} />
      </Box>
      <Text mt={4} fontWeight="bold" fontSize="lg">
        {name}
      </Text>

      <Text fontSize="md" mt={4} color="gray.700">
        {content}
      </Text>
    </Box>
  );
};

const TestimonialGrid = () => {
  const testimonials = [
    {
      name: 'Turn Scripts Into Jaw-Dropping Sales Videos.',
      content:
        'Use to automatically create high-conversion Video Sales Letters complete with stock footage, music, and voiceovers, in just minutes.',
      image: homeBlog1,
    },
    {
      name: 'Automatically Extract Short Video Snippets From Long Videos',
      content:
        "Easily and quickly extract 'golden nuggets' hidden deep within your Zoom, Teams & Webinar recordings in multiple formats. Then easily share these across your social media platforms.",
      image: homeBlog2,
    },
    {
      name: 'Turn Your Text Blog Posts Into Engaging Videos On Auto-Pilot.',
      content:
        'Breathe new life into your blog by adding video. Video will boost your search engine rankings and watch your readership sky-rocket.',
      image: homeBlog3,
    },
    {
      name: 'Add Captions to Videos Automatically',
      content:
        'Automatically add captions to your videos, quickly, easily and accurately. 85% of social media videos are watched on mute - captions will increase your reach by 85%.',
      image: homeBlog4,
    },
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </SimpleGrid>
  );
};

export default TestimonialGrid;
