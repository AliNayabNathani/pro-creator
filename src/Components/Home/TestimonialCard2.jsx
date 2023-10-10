import {
  Box,
  Flex,
  chakra,
  Image,
  Text,
  SimpleGrid,
  Grid,
  Avatar,
  HStack,
  VStack,
  Stack,
} from '@chakra-ui/react';

import zoeAvatar from '../../Assests/images/zoe.png';
const TestimonialCard = ({ name, content, date, avatar }) => {
  return (
    <Box
      bg="white"
      p={4}
      my={[4, 8]}
      alignItems={['center', 'flex-start']}
      maxH={'250px'}
      maxW={'400px'}
      justifyItems={'center'}
      textAlign={['center', 'center']}
      borderRadius={'lg'}
      boxShadow="0 0 0 0.5px #F16A29, 0 0 0 1px #815AC0"
    >
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Avatar size="md" name={name} src={avatar} boxSize={16} />
        <VStack alignItems={['center', 'flex-start']} w={'full'}>
          <Text fontWeight="bold" fontSize="xl">
            {name}
          </Text>
          <Text className="time-posted">{date}</Text>
        </VStack>
      </Stack>

      <Text fontSize="sm" mt={4} color="gray.700">
        {content}
      </Text>
    </Box>
  );
};

const AnotherTestimonialGrid = () => {
  const testimonials = [
    {
      avatar: zoeAvatar,
      name: 'Zoe Hashim',
      content:
        'Automatically add captions to your videos, quickly, easily and accurately. 85% of social media videos are watched on mute - captions will increase your reach by 85%.',
      date: '24/08/2023',
    },
    {
      avatar: zoeAvatar,
      name: 'Zoe Hashim',
      content:
        'Automatically add captions to your videos, quickly, easily and accurately. 85% of social media videos are watched on mute - captions will increase your reach by 85%.',
      date: '24/08/2023',
    },
    {
      avatar: zoeAvatar,
      name: 'Zoe Hashim',
      content:
        'Automatically add captions to your videos, quickly, easily and accurately. 85% of social media videos are watched on mute - captions will increase your reach by 85%.',
      date: '24/08/2023',
    },
    {
      avatar: zoeAvatar,
      name: 'Zoe Hashim',
      content:
        'Automatically add captions to your videos, quickly, easily and accurately. 85% of social media videos are watched on mute - captions will increase your reach by 85%.',
      date: '24/08/2023',
    },
  ];

  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      templateRows="repeat(auto-fill, minmax(200px, 1fr))"
      gap={6}
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </Grid>
  );
};

export default AnotherTestimonialGrid;
