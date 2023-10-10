import React from 'react';
import {
  Box,
  Container,
  Heading,
  Grid,
  GridItem,
  Button,
  Image,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  HStack,
  Stack,
  VStack,
  Text,
  Divider,
} from '@chakra-ui/react';
import Rating from 'react-rating-stars-component';
import blogImg1 from '../../../Assests/images/blogimg.png';

const BlogDetail = () => {
  const blogItem = {
    id: 1,
    title:
      'Developing your Personal Brand through Video – Interview with Zahrina Roberston',
    imageUrl: blogImg1,
    date: new Date(),
    rating: 4.7,
    reviewCount: 3,
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = blogItem.date.toLocaleDateString('en-US', options);

  return (
    <>
      <Container minH={'100vh'} maxW="95%" paddingY={'8'} bg={'white'}>
        <Stack direction={['column', 'row']}>
          <Stack width={['100%', '50%']}>
            <Text color="#898989" fontSize="sm" mb={2}>
              {formattedDate}
            </Text>
            <Heading mb="4">{blogItem.title}</Heading>
            <HStack justifyContent={'space-between'}>
              <HStack>
                <Rating
                  count={5}
                  value={blogItem.rating}
                  size={24}
                  edit={false}
                  isHalf={true}
                  activeColor="#FFD700"
                />
                <Text fontSize="md">
                  {blogItem.rating}/5 ({blogItem.reviewCount} reviews)
                </Text>
              </HStack>
              <Button
                variant={'outline'}
                border={'1px solid #FF5757'}
                color={'#FF5757'}
                borderRadius={'full'}
              >
                Share Now
              </Button>
            </HStack>

            <Box>
              <Image
                src={blogItem.imageUrl}
                alt={`Blog ${blogItem.id}`}
                width="100%"
              />
            </Box>
          </Stack>
          <Stack width={'50%'}>
            <Box bg={'#F5F5F5'} p={[4, 8]} borderRadius={'20px'}>
              <Heading fontSize={'5xl'} my={2}>
                Share your thoughts
              </Heading>
              <Text color={'#898989'} mb={2}>
                Your email address will not be published. <br />
                Required fields are marked *
              </Text>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Comment"
                    focusBorderColor="black"
                  />
                </FormControl>
                <FormControl mt="4">
                  <Input
                    type="text"
                    placeholder="Name"
                    focusBorderColor="black"
                  />
                </FormControl>
                <FormControl mt="4">
                  <Input
                    type="text"
                    placeholder="Email"
                    focusBorderColor="black"
                  />
                </FormControl>
                <FormControl mt="4">
                  <Input
                    type="text"
                    placeholder="Website"
                    focusBorderColor="black"
                  />
                </FormControl>
                <Text color={'black'} my={2} textAlign={'center'}>
                  Save my name, email, and website in
                  <br /> this browser for the next time I comment.
                </Text>

                <Button
                  type="submit"
                  mt="4"
                  variant={'solid'}
                  color={'white'}
                  borderRadius={'full'}
                  w={'full'}
                  p={6}
                  bg={'#FF5757'}
                  _hover={{
                    bg: '#E04141',
                  }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Stack>
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
      <Stack
        justifyContent={['center', 'space-between']}
        w={'100%'}
        // my={[4, 20]}
        p={20}
        bg={'#F7F7F8'}
        h={'100%'}
      >
        <Heading textAlign={['center', 'left']}>In Partnership With</Heading>
      </Stack>
    </>
  );
};

export default BlogDetail;
